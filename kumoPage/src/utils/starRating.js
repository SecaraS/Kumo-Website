import React, { useState } from 'react';
import "./starRating.css";

function StarRating() {
  const [rating, setRating] = useState(0);

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((value) => (
        <span
          key={value}
          className={value <= rating ? "star filled" : "star"}
          onClick={() => handleStarClick(value)}
        >
          ★
        </span>
      ))}
      {/* Display the current rating out of 5 */}
     {/* <p>Rating: {rating}/5</p> */}
    </div>
  );
}

export default StarRating;
