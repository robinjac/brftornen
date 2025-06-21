// import { useState, useEffect } from "react";
import { Bell } from "lucide-react";
import posts from "../../test/posts-response.json";

const News = () => (
  <>
    <div className="flex items-center space-x-2 mb-6">
      <Bell className="h-6 w-6 text-blue-600" />
      <h1 className="text-3xl !m-0 font-bold">NYHETER</h1>
    </div>
    {posts.map((item) => (
      <article key={item.id} className="px-8 py-6 space-y-6 border-t">
        <header>
          <h2 className="text-xl font-semibold">{item.title.rendered}</h2>
          <p className="text-gray-500 text-sm">
            {new Date(item.date).toLocaleDateString()}
          </p>
        </header>
        <section
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: item.content.rendered }}
        />
      </article>
    ))}
  </>
);

export default News;
