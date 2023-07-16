import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function Blog() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(function () {
    document.title = "Blog";
    async function getArticles() {
      const request = await fetch(
        "https://api.spaceflightnewsapi.net/v3/articles"
      );
      const response = await request.json();
      setArticles(response);
      setLoading(false);
    }
    getArticles();
  }, []);
  return (
    <section className="section">
      <h1 className="section-title">blog</h1>
      <p className="section-description">
        berikut ini adalah tulisan tulisanku
      </p>
      {loading && <i>loading article.....</i>}
      {!loading &&
        articles.map((article) => {
          return (
            <article key={article.id} className="article">
              <h2 className="article-title">
                <Link to={`/blog/${article.id}`}>{article.title}</Link>
              </h2>
              <h6 className="article-time">
                {new Date(article.publishedAt).toString()}
              </h6>
            </article>
          );
        })}
    </section>
  );
}
