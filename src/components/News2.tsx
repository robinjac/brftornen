import { Bell } from "lucide-react";
import { trim } from "@/lib/utils";

const News = async () => {
  const response = await fetch(
    "https://brftornen.se/wp-json/wp/v2/posts?per_page=100"
  );

  const posts = (await response.json()) as WordpressPost[];

  return (
    <>
      <div className="flex prose items-center mb-6">
        <h1 className="!m-0">NYHETER</h1>
        <Bell className="ml-2 size-8 -rotate-12 text-blue-800" />
      </div>
      {posts.map((post) => (
        <article className="py-6 space-y-6 border-t">
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
