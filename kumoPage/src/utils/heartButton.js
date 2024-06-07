import React, { useState } from 'react';
import './heartButton.css'; // Import your CSS file for styling
import heartIcon from "../Images/heartIcon.png"  
import heartIcon2 from "../Images/heartIconRed.png"  
function HeartButton() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="heart" onClick={toggleLike}>
      <img src={liked ? heartIcon2 : heartIcon } alt="heartLogo" />
    </div>

  );
}

export default HeartButton;
