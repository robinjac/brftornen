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

const trim = (html: string) =>
  html.replace(/\s+/g, " ").replace(/>\s+</g, "><").trim();

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

    fs.writeFile(
      "src/routes.json",
      JSON.stringify(
        pages.map((page) => ({ title: page.title.rendered, slug: page.slug }))
      ),
      (err) => {
        if (err) {
          console.error("Error writing routes.json:", err);
        } else {
          console.log("routes.json written successfully.");
        }
      }
    );

    // Example: print each page title
    pages.forEach((page) => {
      fs.writeFile(
        "src/pages/" + page.slug + ".tsx",
        trim(`export default () => (<div className="prose">
          <h1>${page.title.rendered.replace(/\//g, " / ")}</h1>
          <article dangerouslySetInnerHTML={{__html: '${trim(
            page.content.rendered
          )}'}} />
        </div>)`),
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

async function fetchWordPressNews() {
  try {
    const response = await fetch(
      "https://brftornen.se/wp-json/wp/v2/posts?per_page=100"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    fs.writeFile(
      "src/components/Posts.tsx",
      trim(`export default () => (<>
      ${posts
        .map(
          (post) =>
            `
          <article className="px-8 py-6 space-y-6 border-t">
              <header>
                <h2 className="text-xl font-semibold">${
                  post.title.rendered
                }</h2>
                <p className="text-gray-500 text-sm">
                  <time dateTime="${post.date}">${new Date(
              post.date
            ).toLocaleDateString()}</time>
                </p>
              </header>
              <section
                className="prose"
                dangerouslySetInnerHTML={{__html: '${trim(
                  post.content.rendered
                )}'}}
              />
          </article>`
        )
        .join("")}
      </>)`),
      (err) => {
        if (err) {
          console.error(`Error writing file for news:`, err);
        } else {
          console.log(`news written successfully.`);
        }
      }
    );
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

fetchWordPressPages();
fetchWordPressNews();
