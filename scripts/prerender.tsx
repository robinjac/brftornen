import fs from "node:fs";
import path from "node:path";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import routes from "../src/routes.json";
import { trim } from "../src/lib/utils";

const DOMAIN = process.env.VITE_DOMAIN ?? "https://localhost:3000";
const BASE_URL = DOMAIN + (process.env.VITE_BASENAME ?? "/");

function formatRouteTitle(route: string): string {
  const withoutSlash = route.replace(/^\//, "");
  const withSpaces = withoutSlash.replace(/-/g, " ");
  return withSpaces.charAt(0).toUpperCase() + withSpaces.slice(1);
}

function prerender(route: string) {
  // Example: get page title and description from route or a mapping
  const pageTitle = `BRF Tornen Järfälla - ${
    route === "/" ? "" : formatRouteTitle(route)
  }`;
  const pageDescription = formatRouteTitle(route);
  const pageUrl = new URL(route, BASE_URL).toString();

  const html = renderToString(
    <StaticRouter location={route}>
      <App />
    </StaticRouter>
  );

  const distIndex = fs.readFileSync("dist/index.html", "utf-8");
  const assetTags = distIndex.match(/<script.*?<\/script>|<link.*?>/g)!;

  const linkTags = assetTags.filter((tag) => tag.startsWith("<link"));
  const scriptTags = assetTags.filter((tag) => tag.startsWith("<script"));

  const fullHtml = trim(`
  <!doctype html>
    <html lang="sv">
      <head>
        <meta charset="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="brftornen-logga.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${pageTitle}</title>
        <meta name="description" content="${pageDescription}" />
        <meta name="keywords" content="BRF, Tornen, Järfälla, bostadsrättsförening" />
        <meta name="author" content="BRF Tornen Järfälla" />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="${pageUrl}" />

        <!-- Open Graph -->
        <meta property="og:title" content="${pageTitle}" />
        <meta property="og:description" content="${pageDescription}" />
        <meta property="og:url" content="${pageUrl}" />
        <meta property="og:type" content="website" />
        ${linkTags.join("\n")}
      </head>
      <body>
        <div id="root">${html}</div>
        ${scriptTags.join("\n")}
      </body>
    </html>
  `);

  const outDir = path.join("dist" + route);
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, "index.html"), fullHtml);
}

for (const route of routes) {
  prerender(route);
  console.log(`Prerendered ${route}`);
}

// Generate sitemap.xml
const sitemapUrls = routes
  .map(
    (route) => `
  <url>
    <loc>${BASE_URL}${route}</loc>
  </url>`
  )
  .join("\n");

const sitemapXml = trim(`
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapUrls}
  </urlset>
`);

fs.writeFileSync(path.join("dist", "sitemap.xml"), sitemapXml);
console.log("Generated sitemap.xml");

// Generate robots.txt
const robotsTxt = trim(`
  User-agent: *
  Allow: /

  Sitemap: ${BASE_URL}/sitemap.xml
`);

fs.writeFileSync(path.join("dist", "robots.txt"), robotsTxt);
console.log("Generated robots.txt");
