import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [pages, setPages] = useState<WordpressPage[]>([]);

  useEffect(() => {
    fetch(`https://www.brftornen.se/wp-json/wp/v2/pages?per_page=100`)
      .then((res) => res.json())
      .then(setPages);
  }, []);

  if (pages.length === 0) return <p>Loading...</p>;

  return (
    <div className="space-y-8">
      {/* Quick Links Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pages.map((page) => {
          // const Icon = feature.icon;
          return (
            <Link
              key={page.slug}
              to={page.slug}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <h3
                dangerouslySetInnerHTML={{ __html: page.title.rendered }}
                className="text-lg font-semibold mb-2 text-wrap"
              ></h3>
             {/*  <div
                dangerouslySetInnerHTML={{ __html: page.excerpt.rendered }}
                className="text-gray-600"
              ></div> */}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
