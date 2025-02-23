// filepath: /s:/HunarBazaar/hunarbazaar/src/components/ReviewForm.js
import React, { useState } from "react";

function ReviewForm({ serviceName, onAddReview }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReview = { rating, comment };
    onAddReview(serviceName, newReview);
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Rating:</label>
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          min="1"
          max="5"
          required
        />
      </div>
      <div>
        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;