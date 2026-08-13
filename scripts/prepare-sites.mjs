import { copyFile, mkdir, readdir, rename, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const projectRoot = fileURLToPath(new URL("../", import.meta.url));
const distDir = path.join(projectRoot, "dist");
const clientDir = path.join(distDir, "client");
const serverDir = path.join(distDir, "server");

await rm(clientDir, { recursive: true, force: true });
await rm(serverDir, { recursive: true, force: true });
await mkdir(clientDir, { recursive: true });

for (const entry of await readdir(distDir)) {
  if (entry === "client" || entry === "server") continue;
  await rename(path.join(distDir, entry), path.join(clientDir, entry));
}

await mkdir(serverDir, { recursive: true });
await copyFile(path.join(projectRoot, "scripts/sites-worker.mjs"), path.join(serverDir, "index.js"));
