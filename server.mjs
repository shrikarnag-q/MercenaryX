import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, resolve, sep } from "node:path";

const root = resolve("dist");
const port = Number(process.env.PORT) || 4173;

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

function fileFor(urlPath) {
  let pathname = "/";
  try {
    pathname = decodeURIComponent(urlPath.split("?")[0]);
  } catch {
    return join(root, "index.html");
  }
  const relative = pathname.replace(/^\/+/, "");
  const file = resolve(root, relative);
  if (file !== root && !file.startsWith(root + sep)) return join(root, "index.html");
  if (!existsSync(file) || statSync(file).isDirectory()) return join(root, "index.html");
  return file;
}

const server = createServer((request, response) => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end();
    return;
  }

  const file = fileFor(request.url ?? "/");
  if (!existsSync(file)) {
    response.writeHead(503, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("The site has not been built.");
    return;
  }

  const extension = extname(file);
  response.writeHead(200, {
    "Content-Type": types[extension] ?? "application/octet-stream",
    "Cache-Control": extension === ".html" ? "no-cache" : "public, max-age=3600",
  });
  if (request.method === "HEAD") {
    response.end();
    return;
  }
  createReadStream(file).pipe(response);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Mercenary X listening on ${port}`);
});
