import { Bell } from 'lucide-react';
import newsItems from "../../test/news.json"

const News = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <Bell className="h-6 w-6 text-blue-600" />
        <h1 className="text-3xl font-bold">Latest News</h1>
      </div>

      <div className="grid gap-6">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-xl font-semibold">{item.title}</h2>
                <p className="text-gray-500 text-sm">{new Date(item.date).toLocaleDateString()}</p>
              </div>
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                {item.category}
              </span>
            </div>
            <p className="text-gray-600">{item.content}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default News;