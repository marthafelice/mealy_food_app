import React from "react";
import "../styles/restaurantCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import star from "../images/star.svg"


import { Link } from "react-router-dom";
import StarRating from "./StarRating";
function RestaurantCard({ name, rating, price, Monogram, Food,Img,starcount }) {
  return (
    <Link to="/menu" className="restaurant-card">
      <div className=" restaurant-card_top-section">
        <div className="restaurant-name-container">
          <div className="restaurant-logo-container"><img src={Monogram} alt="a small restaurant" className="restaurant-logo"/></div>
          <p className="restaurant-name">{name}</p>
        </div>
        <BsThreeDotsVertical />
      </div>
      <img src={Food} className="restaurant-img" alt="restaurant meal" />
      <div className="restaurant-card_bottom-section">
        <div className="rating">
         <StarRating src={star} starCount={starcount}/>
        <p>{rating} (Excellent)</p>
        </div>
        <p className="delivery-price"> {price}</p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
