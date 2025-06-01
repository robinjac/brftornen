import fs from "node:fs";
import path from "node:path";

async function clearPagesFolder(folderPath: string) {
  try {
    if (fs.existsSync(folderPath)) {
      const files = fs.readdirSync(folderPath);
      for (const file of files) {
        fs.unlinkSync(path.join(folderPath, file));
      }
      console.log("Pages folder cleared.");
    } else {
      fs.mkdirSync(folderPath);
      console.log("Pages folder created.");
    }
  } catch (error) {
    console.error("Failed to clear pages folder:", error);
  }
}

async function fetchWordPressPages() {
  try {
    const response = await fetch(
      "https://brftornen.se/wp-json/wp/v2/pages?per_page=100"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pages = await response.json();

    const pagesFolder = path.resolve(__dirname, "../src/pages");
    await clearPagesFolder(pagesFolder);

    // Example: print each page title
    pages.forEach((page) => {
      fs.writeFile(
        "src/pages/" + page.slug + ".html",
        `<div className="prose">
          <h1>${page.title.rendered.replace(/\//g, " / ")}<h1/>
          <article>${String(page.content.rendered)}</article>
        </div>`.replace(/>\s+</g, "><"),
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
