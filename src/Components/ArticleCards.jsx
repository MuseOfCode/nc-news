import "../Styles/ArticleCards.css";
import { Link } from "react-router-dom";
import { ThumbsUp, ThumbsDown, MessageCircle } from "react-feather";

export default function ArticleCards({ articles, setSingleArticle }) {
  return (
    <section className="article-list">
      <div className="box"></div>
      {articles.map((article) => (
        <div className="article-container" key={article.article_id}>
          <Link
            to={`/article/${article.article_id}`}
            className="article-link"
            onClick={() => setSingleArticle(article.article_id)}
          >
            <p className="author-username">{article.author}</p>

            <img
              className="article-img"
              src={article.article_img_url}
              alt={article.title}
            />

            <h2 className="article-title">{article.title}</h2>
            <div className="comment-count">{article.comment_count}</div>

            <div className="votes">{article.votes}</div>
          </Link>
          <div className="article-actions">
            <MessageCircle
              className="comment-bttn"
              onClick={() => handleComment(article.article_id)}
            />

            <ThumbsDown
              className="dislike-bttn"
              onClick={() => handleDislike(article.article_id)}
            />

            <ThumbsUp
              className="like-bttn"
              onClick={() => handleLike(article.article_id)}
            />
          </div>{" "}
        </div>
      ))}
    </section>
  );
}

const handleLike = (article_id) => {
  console.log(`Liked article with id: ${article_id}`);
};

const handleDislike = (article_id) => {
  console.log(`Disliked article with id: ${article_id}`);
};

const handleComment = (article_id) => {
  console.log(`Commented on article with id: ${article_id}`);
};
//
