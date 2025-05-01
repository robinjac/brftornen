import { Bell } from "lucide-react";
import posts from "../../test/posts-response.json";

const News = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Bell className="h-6 w-6 text-blue-600" />
        <h1 className="text-3xl font-bold">Senaste Nyheterna</h1>
      </div>

      <div className="grid gap-6">
        {posts.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{item.title.rendered}</h2>
                <p className="text-gray-500 text-sm">
                  {new Date(item.date).toLocaleDateString()}
                </p>
              </div>
            </div>
            <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;
