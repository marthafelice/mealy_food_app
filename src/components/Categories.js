import React from "react";
import "../styles/categories.css";
import MealCategory from "./MealCategory";
import OrderCategory from "./OrderCategory";
import Chinese from "../images/chinesefood.svg"
import African from "../images/cat1.png"
import Breakfast from "../images/cat2.png"
import Lunch from "../images/cat3.png"
import ComboMeals from "../images/cat4.png"
function Categories() {
  return (
    <section className="categories-section homepage-padding">
      <h3>All Categories</h3>
      <div className="categories-section_meal">
        <MealCategory categoryName="Chinese" img={Chinese} />
        <MealCategory categoryName="African" img={African} />
        <MealCategory categoryName="Breakfast" img={Breakfast} />
        <MealCategory categoryName="Lunch" img={Lunch} />
        <MealCategory categoryName="Combo meals" img={ComboMeals} />
      </div>
      <OrderCategory />
    </section>
  );
}

export default Categories;
