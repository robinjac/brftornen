import { useParams } from "react-router";
import { trim, toDateString } from "@/lib/utils";
import pages from "@/pages.json";

const Page = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = pages.find((page: WordpressPage) => page.slug === slug);

  if (!data) {
    return <div className="prose">Page not found</div>;
  }

  return (
    <article className="prose">
      <h1 className="border-b pb-6">
        {data.title.rendered.replace(/\//g, " / ")}
      </h1>
      <section
        className="border-b pb-6"
        dangerouslySetInnerHTML={{ __html: trim(data.content.rendered) }}
      />
      <p className="text-gray-500 text-sm">
        <time dateTime={data.date}>
          {toDateString(data.date)}
        </time>
      </p>
    </article>
  );
};

export default Page;
