import fs from "node:fs";

async function fetchWordPressPages() {
  try {
    const response = await fetch("https://brftornen.se/wp-json/wp/v2/pages");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    
    const pages = await response.json();

    // Example: print each page title
    pages.forEach((page) => {
      fs.writeFile(
        "src/pages/" + page.slug + ".tsx",
        `
        <div className="prose">
          <h1>${page.title.rendered.replace(/\//g, " / ")}<h1/>
          <article>${page.content.rendered}</article>
        </div>
      `,
        (err) => {
          if (err) {
            console.error(`Error writing file for page ${page.slug}:`, err);
          } else {
            console.log(`Page ${page.slug} written successfully.`);
          }
        }
      );
    });
  } catch (error) {
    console.error("Failed to fetch pages:", error);
  }
}

fetchWordPressPages();
