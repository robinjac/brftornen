async function fetchWordPressPages() {
  try {
    const response = await fetch("https://brftornen.se/wp-json/wp/v2/pages");
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const pages = await response.json();
    console.log("Fetched pages:", pages);

    // Example: print each page title
    pages.forEach((page) => {
      console.log(`Page Title: ${page.title.rendered}`);
      console.log(`Page Content: ${page.content.rendered}`);
    });
  } catch (error) {
    console.error("Failed to fetch pages:", error);
  }
}

fetchWordPressPages();
