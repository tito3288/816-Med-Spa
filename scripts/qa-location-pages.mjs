import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? "dist/client";
const locationsRoot = join(root, "locations");
const errors = [];
const expectedSlugs = [
  "brookside",
  "country-club-plaza",
  "fairway",
  "mission",
  "mission-hills",
  "prairie-village",
  "rockhill",
  "union-hill",
  "waldo",
  "westwood",
].sort();

const decode = (value) =>
  value
    .replaceAll("&amp;", "&")
    .replaceAll("&quot;", '"')
    .replaceAll("&#39;", "'")
    .replaceAll("&nbsp;", " ");

const text = (value) =>
  decode(value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim());

const tagValue = (html, pattern, attribute) => {
  const tag = html.match(pattern)?.[0];
  return tag?.match(new RegExp(`${attribute}=["']([^"']+)["']`, "i"))?.[1];
};

const routeExists = (urlPath) => {
  const cleanPath = decodeURIComponent(urlPath.split(/[?#]/)[0]);
  if (!cleanPath || cleanPath === "/") return existsSync(join(root, "index.html"));

  const relativePath = cleanPath.replace(/^\//, "");
  return (
    existsSync(join(root, relativePath)) ||
    existsSync(join(root, relativePath, "index.html")) ||
    existsSync(join(root, `${relativePath}.html`))
  );
};

if (!existsSync(locationsRoot)) {
  throw new Error(`Location build output not found at ${locationsRoot}. Run npm run build:sites first.`);
}

const slugs = readdirSync(locationsRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && existsSync(join(locationsRoot, entry.name, "index.html")))
  .map((entry) => entry.name)
  .sort();

if (slugs.join("|") !== expectedSlugs.join("|")) {
  errors.push(
    `location routes: expected ${expectedSlugs.join(", ")}; found ${slugs.join(", ") || "none"}`,
  );
}

const pages = slugs.map((slug) => {
  const html = readFileSync(join(locationsRoot, slug, "index.html"), "utf8");
  const titleMatches = [...html.matchAll(/<title>(.*?)<\/title>/gis)];
  const descriptionMatches = [
    ...html.matchAll(/<meta\b[^>]*\bname=["']description["'][^>]*>/gi),
  ];
  const canonicalMatches = [...html.matchAll(/<link\b[^>]*\brel=["']canonical["'][^>]*>/gi)];
  const h1Matches = [...html.matchAll(/<h1\b[^>]*>(.*?)<\/h1>/gis)];
  const schemaMatches = [
    ...html.matchAll(/<script\b[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/gis),
  ];

  if (titleMatches.length !== 1) errors.push(`${slug}: expected one title, found ${titleMatches.length}`);
  if (descriptionMatches.length !== 1)
    errors.push(`${slug}: expected one meta description, found ${descriptionMatches.length}`);
  if (canonicalMatches.length !== 1)
    errors.push(`${slug}: expected one canonical, found ${canonicalMatches.length}`);
  if (h1Matches.length !== 1) errors.push(`${slug}: expected one H1, found ${h1Matches.length}`);
  if (schemaMatches.length !== 1)
    errors.push(`${slug}: expected one JSON-LD block, found ${schemaMatches.length}`);

  const title = text(titleMatches[0]?.[1] ?? "");
  const description = tagValue(descriptionMatches[0]?.[0] ?? "", /<meta[^>]+>/i, "content") ?? "";
  const canonical = tagValue(canonicalMatches[0]?.[0] ?? "", /<link[^>]+>/i, "href") ?? "";
  const ogUrl = tagValue(
    html,
    /<meta\b[^>]*\bproperty=["']og:url["'][^>]*>/i,
    "content",
  );
  const h1 = text(h1Matches[0]?.[1] ?? "");
  const expectedCanonical = `https://www.816medspa.com/locations/${slug}/`;

  if (canonical !== expectedCanonical)
    errors.push(`${slug}: canonical is ${canonical || "missing"}; expected ${expectedCanonical}`);
  if (ogUrl !== expectedCanonical)
    errors.push(`${slug}: og:url is ${ogUrl || "missing"}; expected ${expectedCanonical}`);

  let schema;
  try {
    schema = JSON.parse(schemaMatches[0]?.[1] ?? "");
  } catch (error) {
    errors.push(`${slug}: JSON-LD does not parse (${error.message})`);
  }

  const graph = schema?.["@graph"] ?? [];
  const webPage = graph.find((item) => item["@type"] === "WebPage");
  const breadcrumb = graph.find((item) => item["@type"] === "BreadcrumbList");
  const business = graph.find((item) => item["@type"] === "MedicalBusiness");
  const neighborhood = breadcrumb?.itemListElement?.at(-1)?.name;

  if (webPage?.url !== expectedCanonical) errors.push(`${slug}: WebPage schema URL is incorrect`);
  if (!webPage?.areaServed?.name?.includes(neighborhood ?? ""))
    errors.push(`${slug}: WebPage areaServed does not match its neighborhood`);
  if (!breadcrumb || breadcrumb.itemListElement?.length !== 3)
    errors.push(`${slug}: BreadcrumbList schema is missing or incomplete`);
  if (business?.["@id"] !== "https://www.816medspa.com/#business")
    errors.push(`${slug}: shared MedicalBusiness ID is incorrect`);
  if (business?.address?.streetAddress !== "638 W 39th St.")
    errors.push(`${slug}: MedicalBusiness address is incorrect`);
  if (business && "areaServed" in business)
    errors.push(`${slug}: shared MedicalBusiness must not be redefined per neighborhood`);

  const localUrls = [
    ...html.matchAll(/<(?:a|img)\b[^>]*\b(?:href|src)=["'](\/[^"']*)["'][^>]*>/gi),
  ].map((match) => match[1]);

  for (const urlPath of new Set(localUrls)) {
    if (!routeExists(urlPath)) errors.push(`${slug}: unresolved local URL ${urlPath}`);
  }

  return {
    slug,
    html,
    main: html.match(/<main\b[^>]*>(.*?)<\/main>/is)?.[1] ?? html,
    title,
    description,
    h1,
    neighborhood,
    uniqueCopy: [
      ...html.matchAll(
        /<([a-z0-9]+)\b[^>]*\bdata-location-copy(?:=["'][^"']*["'])?[^>]*>(.*?)<\/\1>/gis,
      ),
    ].map((match) => text(match[2]).toLowerCase()),
  };
});

for (const field of ["title", "description", "h1"]) {
  const values = new Map();
  for (const page of pages) {
    if (!page[field]) errors.push(`${page.slug}: ${field} is empty`);
    if (values.has(page[field])) {
      errors.push(`${page.slug}: duplicate ${field} also used by ${values.get(page[field])}`);
    }
    values.set(page[field], page.slug);
  }
}

for (const page of pages) {
  if (!page.h1.toLowerCase().includes((page.neighborhood ?? "").toLowerCase()))
    errors.push(`${page.slug}: H1 does not identify its neighborhood`);
}

const uniqueCopyValues = new Map();
for (const page of pages) {
  if (page.uniqueCopy.length < 20)
    errors.push(`${page.slug}: expected at least 20 page-specific copy elements`);

  for (const value of page.uniqueCopy) {
    if (value.length < 50) continue;
    if (uniqueCopyValues.has(value))
      errors.push(`${page.slug}: duplicate long-form copy also used by ${uniqueCopyValues.get(value)}`);
    uniqueCopyValues.set(value, page.slug);
  }
}

for (const page of pages) {
  if (!page.neighborhood) errors.push(`${page.slug}: neighborhood is missing from breadcrumb schema`);
  const pageText = text(page.main).toLowerCase();
  for (const other of pages) {
    if (other.slug === page.slug || !other.neighborhood) continue;
    if (page.neighborhood.toLowerCase().startsWith(`${other.neighborhood.toLowerCase()} `))
      continue;

    const leakageMarkers = [
      `med spa near ${other.neighborhood}`,
      `services near ${other.neighborhood}`,
      `treatments near ${other.neighborhood}`,
      `plan your visit from ${other.neighborhood}`,
      `${other.neighborhood} faqs`,
    ];

    if (leakageMarkers.some((marker) => pageText.includes(marker.toLowerCase())))
      errors.push(`${page.slug}: possible templated copy leakage from ${other.neighborhood}`);
  }
}

const hub = readFileSync(join(locationsRoot, "index.html"), "utf8");
const sitemap = readFileSync(join(root, "sitemap.xml"), "utf8");
const hubSchemaMatch = hub.match(
  /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>(.*?)<\/script>/is,
);
let hubSchema;
try {
  hubSchema = JSON.parse(hubSchemaMatch?.[1] ?? "");
} catch (error) {
  errors.push(`locations hub: JSON-LD does not parse (${error.message})`);
}

const hubItems = hubSchema?.["@graph"]?.find((item) => item["@type"] === "ItemList");
if (hubItems?.numberOfItems !== pages.length || hubItems?.itemListElement?.length !== pages.length)
  errors.push(`locations hub: ItemList count does not match the ${pages.length} live pages`);

for (const page of pages) {
  const path = `/locations/${page.slug}/`;
  if (!hub.includes(`href="${path}"`)) errors.push(`${page.slug}: missing crawlable link from hub`);
  if (!sitemap.includes(`https://www.816medspa.com${path}`)) errors.push(`${page.slug}: missing from sitemap`);
}

if (errors.length) {
  console.error(`Location QA failed with ${errors.length} issue(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exitCode = 1;
} else {
  console.log(`Location QA passed for ${pages.length} pages: ${slugs.join(", ")}`);
}
