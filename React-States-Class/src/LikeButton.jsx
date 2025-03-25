import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  function toggleLike() {
    setIsLiked(!isLiked);
  }

  return (
    <div onClick={toggleLike}>
      {isLiked ? (
        <p style={{ color: "red", fontSize: "1.5rem" }}>
          <i className="fa-solid fa-heart"></i>
        </p>
      ) : (
        <p style={{ fontSize: "1.5rem" }}>
          <i className="fa-regular fa-heart"></i>
        </p>
      )}
    </div>
  );
}
