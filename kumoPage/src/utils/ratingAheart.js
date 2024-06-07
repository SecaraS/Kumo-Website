import React from 'react';
import StarRating from './starRating'; // import your StarRating component
import HeartButton from './heartButton'; // import your HeartButton component
import './ratingAheart.css'; // Import your CSS file for styling

function RatingAndHeart() {
  return (
    <div className="ratingHeartContainer">
      <StarRating />
      <HeartButton />
    </div>
  );
}

export default RatingAndHeart;

