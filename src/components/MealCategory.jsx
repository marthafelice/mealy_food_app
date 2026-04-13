import React from "react";
import "../styles/categories.css";

function MealCategory({categoryName, img}) {
  return (
    <div className="category-meal-container">
      <img src={img} alt="category-icon" />
      <p className="category-meal_name">{categoryName}</p>
    </div>
  );
}

export default MealCategory;
