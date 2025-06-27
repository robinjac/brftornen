import { Bell } from "lucide-react";
import { trim } from "@/lib/utils";
import posts from "@/posts.json";

const News = () => {
  return (
    <>
      <div className="flex prose items-center mb-6">
        <h1 className="!m-0">NYHETER</h1>
        <Bell className="ml-2 size-8 -rotate-12 text-blue-800" />
      </div>
      {posts.map((post) => (
        <article key={post.guid.rendered} className="py-6 space-y-6 border-t">
          <header>
            <h2 className="text-xl font-semibold">{post.title.rendered}</h2>
            <p className="text-gray-500 text-sm">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString()}
              </time>
            </p>
          </header>
          <section
            className="prose"
            dangerouslySetInnerHTML={{ __html: trim(post.content.rendered) }}
          />
        </article>
      ))}
    </>
  );
};

export default News;
