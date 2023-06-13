import React from "react";
import "../styles/categories.css";
import RestaurantCard from "./RestaurantCard";

function BulkOrder() {
  return (
    <div className="order-category_pickup order-category">
      <h3>Featured Restaurants</h3>
      <div className="order-category_restaurant-cards">

        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" />
      </div>
    </div>
  );
}
export default BulkOrder;
