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
    <div className="prose">
      <h1
        dangerouslySetInnerHTML={{ __html: page.title.rendered.replace(/\//g, ' / ') }}
      />
      <article
        dangerouslySetInnerHTML={{ __html: page.content.rendered }}
      />
    </div>
  );
};

export default WordpressPageView;
