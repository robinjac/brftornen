import { useParams } from "react-router-dom";
import { trim } from "@/lib/utils";
import pages from "@/pages.json";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = pages.find((page: WordpressPage) => page.slug === slug);

  if (!data) {
    return <div className="prose">Page not found</div>;
  }

  return (
    <article className="prose">
      <h1>{data.title.rendered.replace(/\//g, " / ")}</h1>
      <section dangerouslySetInnerHTML={{ __html: trim(data.content.rendered) }} />
      <p className="text-gray-500 text-sm">
        <time dateTime={data.date}>
        {new Date(data.date).toLocaleDateString()}
        </time>
      </p>
    </article>
  );
};

export default Page;
