import fs from "node:fs";
import path from "node:path";
import { StaticRouter } from "react-router";
import { renderToString } from "react-dom/server";
import App from "../src/App";
import routes from "../routes.json";
import { trim } from "../src/lib/utils";

function prerender(route: string) {
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
        <title>BRF Tornen Järfälla</title>
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
