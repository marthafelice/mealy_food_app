import React from "react";
import "../styles/categories.css";
import MealCategory from "./MealCategory";
import OrderCategory from "./OrderCategory";
function Categories() {
  return (
    <section className="categories-section">
      <h3>All Categories</h3>
      <div className="categories-section_meal">
        <MealCategory categoryName="Chinese" />
        <MealCategory categoryName="African" />
        <MealCategory categoryName="Breakfast" />
        <MealCategory categoryName="Lauch" />
        <MealCategory categoryName="Combo meals" />
      </div>
      <OrderCategory />
    </section>
  );
}

export default Categories;
