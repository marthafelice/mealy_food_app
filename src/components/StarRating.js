import React from 'react';
import '../styles/restaurantCard.css'

const StarRating = ({ starCount, src }) => {
  return (
    <div className="star-rating-container">
      {[...Array(starCount)].map((_, i) => (
        <img  alt="restaurant star ating" className="star" src={src} key={i} />
      ))}
    </div>
  );
};

export default StarRating;
