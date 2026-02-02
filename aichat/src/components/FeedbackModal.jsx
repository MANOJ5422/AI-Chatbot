import { useState } from "react";
import RatingStars from "./RatingStars";

export default function FeedbackModal({ onClose }) {
  const [liked, setLiked] = useState(null);

  return (
    <div className="modal">
      <h3>Provide Additional Feedback</h3>

      {liked === true && <RatingStars />}
      {liked === false && <textarea placeholder="Your feedback" />}

      <div>
        <button onClick={() => setLiked(true)}>👍</button>
        <button onClick={() => setLiked(false)}>👎</button>
      </div>

      <button onClick={onClose}>Submit</button>
    </div>
  );
}
