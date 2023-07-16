import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function BlogDetail() {
  const param = useParams();
  const [article, setArticle] = useState({});
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  useEffect(() => {
    document.title ="Blog Detail"
    async function getArticle() {
      const request = await fetch(
        `https://api.spaceflightnewsapi.net/v3/articles/${param.id}`
      );
      if (!request.ok) {
        return setNotFound(true);
      }
      const response = await request.json();
      setArticle(response);
      setLoading(false);
    }
    getArticle();
  }, [param]);
  if (notFound) {
    return <h1>halaman tidak di temukan..</h1>;
  }
  return (
    <section className="section">
      {loading && (
        <i>
          <h1>loading article....</h1>
        </i>
      )}
      <h1 className="article-title">{article.title}</h1>
      <h5 className="article-time">
        {new Date(article.publishedAt).toDateString()}
      </h5>
      <article className="article-content">{article.summary}</article>
      <p>
        Source:{""}
        <a href={article.url} rel="noreferrer" target="_blank">
          {article.newsSite}
        </a>
      </p>
      <img
        src={article.imageUrl}
        alt={article.title}
        className="article-image"
      />
    </section>
  );
}
