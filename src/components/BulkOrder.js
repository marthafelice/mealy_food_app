import React from "react";
import RestaurantCard from "./RestaurantCard";
import Restuarant5 from "../images/rest5.png";
import Monogram1 from "../images/monogram1.png";

function BulkOrder() {
  return (
    <div className="order-category_pickup order-category">
      <h3>Featured Restaurants</h3>
      <div className="order-category_restaurant-cards">
      <RestaurantCard
          name="Breakfast Hub"
          rating="4.6"
          price="400"
          Monogram={Monogram1}
          Food={Restuarant5}
        />  <RestaurantCard
        name="Breakfast Hub"
        rating="4.6"
        price="400"
        Monogram={Monogram1}
        Food={Restuarant5}
      />  <RestaurantCard
      name="Breakfast Hub"
      rating="4.6"
      price="400"
      Monogram={Monogram1}
      Food={Restuarant5}
    />  <RestaurantCard
    name="Breakfast Hub"
    rating="4.6"
    price="400"
    Monogram={Monogram1}
    Food={Restuarant5}
  />  <RestaurantCard
  name="Breakfast Hub"
  rating="4.6"
  price="400"
  Monogram={Monogram1}
  Food={Restuarant5}
/>  <RestaurantCard
          name="Breakfast Hub"
          rating="4.6"
          price="400"
          Monogram={Monogram1}
          Food={Restuarant5}
        />  <RestaurantCard
        name="Breakfast Hub"
        rating="4.6"
        price="400"
        Monogram={Monogram1}
        Food={Restuarant5}
      />  <RestaurantCard
      name="Breakfast Hub"
      rating="4.6"
      price="400"
      Monogram={Monogram1}
      Food={Restuarant5}
    />  <RestaurantCard
    name="Breakfast Hub"
    rating="4.6"
    price="400"
    Monogram={Monogram1}
    Food={Restuarant5}
  />
           </div>
    </div>
  );
}
export default BulkOrder;
