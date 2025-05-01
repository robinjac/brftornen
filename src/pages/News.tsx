import { useState, useEffect } from "react";
import { Bell } from "lucide-react";

const News = () => {
  const [pages, setPages] = useState<WordpressPost[]>([]);

  useEffect(() => {
    fetch(`https://www.brftornen.se/wp-json/wp/v2/posts`)
      .then((res) => res.json())
      .then(setPages);
  }, []);

  if (pages.length === 0) return <p>Loading...</p>;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Bell className="h-6 w-6 text-blue-600" />
        <h1 className="text-3xl font-bold">Nyheter</h1>
      </div>

      <div className="grid gap-6">
        {pages.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{item.title.rendered}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div
              className="prose max-w-none"
              dangerouslySetInnerHTML={{ __html: item.content.rendered }}
            />
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
