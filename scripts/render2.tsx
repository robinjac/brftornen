import fs from "fs/promises";
import path from "path";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "../src/App";

// Simulate a URL to render
const url = "/";

const appHtml = ReactDOMServer.renderToString(
  <StaticRouter location={url}>
    <App />
  </StaticRouter>
);

const fullHtml = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>SSR SPA</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
  <body>
    <div id="root">${appHtml}</div>
    <script type="module" src="/main.tsx"></script>
  </body>
</html>`;

await fs.mkdir("public", { recursive: true });
await fs.writeFile(path.resolve("public/index.html"), fullHtml);

console.log("✅ SSR complete. HTML written to public/index.html");
