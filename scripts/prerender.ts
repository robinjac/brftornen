import fs from "node:fs";

async function fetchWordPressPages() {
  try {
    const response = await fetch(
      "https://brftornen.se/wp-json/wp/v2/pages?per_page=100"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const pages = await response.json();

    const routes = pages.map((page) => "/" + page.slug);

    routes.push("/");

    fs.writeFile("routes.json", JSON.stringify(routes, null, 2), (err) => {
      if (err) {
        console.error("Error writing routes:", err);
      } else {
        console.log("Routes written successfully.");
      }
    });

    fs.writeFile("src/pages.json", JSON.stringify(pages, null, 2), (err) => {
      if (err) {
        console.error("Error writing pages:", err);
      } else {
        console.log("Pages written successfully.");
      }
    });
  } catch (error) {
    console.error("Failed to fetch pages:", error);
  }
}

async function fetchWordPressPosts() {
  try {
    const response = await fetch(
      "https://brftornen.se/wp-json/wp/v2/posts?per_page=100"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const posts = await response.json();

    fs.writeFile("src/posts.json", JSON.stringify(posts, null, 2), (err) => {
      if (err) {
        console.error("Error writing posts:", err);
      } else {
        console.log("Posts written successfully.");
      }
    });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
  }
}

fetchWordPressPages();
fetchWordPressPosts();
