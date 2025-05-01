import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WordpressPageView = () => {
  const { slug } = useParams<{ slug: string }>();
  const [page, setPage] = useState<WordpressPage | null>(null);

  useEffect(() => {
    fetch(`https://www.brftornen.se/wp-json/wp/v2/pages?slug=${slug}`)
      .then((res) => res.json())
      .then((data: WordpressPage[]) => {
        setPage(data[0]);
      });
  }, [slug]);

  if (!page) return <p>Loading...</p>;

  return (
    <>
      <h1
        className="text-3xl font-bold mb-6"
        dangerouslySetInnerHTML={{ __html: page.title.rendered }}
      />
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </>
  );
};

export default WordpressPageView;
