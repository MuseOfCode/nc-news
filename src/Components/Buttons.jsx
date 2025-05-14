import { useState } from "react";
import { updateVoteCount } from "../../api";

export default function Button({ votes, articleId }) {
  const [currentVotes, setCurrentVotes] = useState(votes);
  const [isAnimating, setIsAnimating] = useState(false);
  const [likeImageIndex, setLikeImageIndex] = useState(1);
  const [dislikeImageIndex, setDislikeImageIndex] = useState(1);
  const [commentImageIndex, setCommentImageIndex] = useState(1);

  const cycleLikeImage = () => {
    if (likeImageIndex === 1) return "/src/assets/likes/1.png";
    if (likeImageIndex === 2) return "/src/assets/likes/2.png";
    return "/src/assets/likes/3.png";
  };

  const cycleDislikeImage = () => {
    if (dislikeImageIndex === 1) return "/src/assets/dislikes/1.png";
    if (dislikeImageIndex === 2) return "/src/assets/dislikes/2.png";
    return "/src/assets/dislikes/3.png";
  };

  const cycleCommentImage = () => {
    if (commentImageIndex === 1) return "/src/assets/comments/1.png";
    if (commentImageIndex === 2) return "/src/assets/comments/2.png";
  };

  const handleLike = (article_id) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setLikeImageIndex(2);

    setTimeout(() => {
      setLikeImageIndex(3);
      updateVoteCount(article_id, 1)
        .then(() => {
          setCurrentVotes((prevVotes) => prevVotes + 1);
        })
        .catch((error) => {
          console.error("Failed to increase vote count", error);
        });

      setTimeout(() => {
        setLikeImageIndex(1);
        setIsAnimating(false);
      }, 100);
    }, 100);
  };

  const handleDislike = (article_id) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setDislikeImageIndex(2);

    setTimeout(() => {
      setDislikeImageIndex(3);
      updateVoteCount(article_id, -1)
        .then(() => {
          setCurrentVotes((prevVotes) => prevVotes - 1);
        })
        .catch((error) => {
          console.error("Failed to decrease vote count", error);
        });

      setTimeout(() => {
        setDislikeImageIndex(1);
        setIsAnimating(false);
      }, 100);
    }, 100);
  };

  const handleComments = (article_id) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCommentImageIndex(2);

    setTimeout(() => {
      setCommentImageIndex(3);

      setTimeout(() => {
        setCommentImageIndex(1);
        setIsAnimating(false);
      }, 100);
    }, 100);
  };
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        className="dislike-bttn"
        onClick={(e) => {
          e.stopPropagation();
          handleDislike(articleId);
        }}
      >
        <img src={cycleDislikeImage()} />
      </button>

      <p style={{ margin: "0 20px" }}>{currentVotes}</p>

      <button
        className="like-bttn"
        onClick={(e) => {
          e.stopPropagation();
          handleLike(articleId);
        }}
      >
        <img src={cycleLikeImage()} />
      </button>

      <button
        className="comment-bttn"
        onClick={(e) => {
          e.stopPropagation();
          handleComments(articleId);
        }}
      >
        <img src={cycleCommentImage()} />
      </button>
    </div>
  );
}
