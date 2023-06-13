import React from "react";
import "../styles/restaurantCard.css";
import Monogram from "../images/monogram.svg";
import { BsThreeDotsVertical } from "react-icons/bs";
import BreakFastHub from "../images/breakfasthub.svg";
import Star from "../images/star.svg";
function RestaurantCard({ name, rating, price }) {
  return (
    <div className="restaurant-card">
      <div className=" restaurant-card_top-section">
        <div className="restaurant-name-container">
          <img src={Monogram} alt="a small restaurant" />
          <p className="restaurant-name">{name}</p>
        </div>
        <BsThreeDotsVertical />
      </div>
      <img
        src={BreakFastHub}
        className="restaurant-img"
        alt="restaurant meal"
      />
      <div className="restaurant-card_bottom-section">
        <div className="rating">
          <img src={Star} alt="restaurant star rating" className="star" />
          <p>{rating} (Excellent)</p>
        </div>
        <p className="price">Delivery: ${price}</p>
      </div>
    </div>
  );
}

export default RestaurantCard;
