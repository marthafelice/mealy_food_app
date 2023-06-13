import React from "react";
import "../styles/categories.css";
import Monogram from "../images/monogram.svg";
import Monogram1 from "../images/monogram1.png";
import Monogram2 from "../images/monogram2.png";
import RestaurantCard from "./RestaurantCard";
import Restuarant4 from "../images/rest4.png";
import Restuarant2 from "../images/rest2.png";
import Restuarant11 from "../images/rest11.png";
import Restuarant9 from "../images/rest9.png";
import Restuarant6 from "../images/rest6.png";
import Restuarant3 from "../images/rest3.png";
import Restuarant8 from "../images/rest8.png";
import Restuarant5 from "../images/rest5.png";
import Restuarant10 from "../images/rest10.png";
import Restuarant12 from "../images/rest12.png";

function BulkOrder() {
  return (
    <div className="order-category_pickup order-category">
      <h3>Featured Restaurants</h3>
      <div className="order-category_restaurant-cards">

        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram1}
          Food={Restuarant4} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram}
          Food={Restuarant12} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram1}
          Food={Restuarant11} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram2}
          Food={Restuarant10} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram1}
          Food={Restuarant9} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram}
          Food={Restuarant3} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram2}
          Food={Restuarant8} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram1}
          Food={Restuarant5} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram}
          Food={Restuarant9} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram1}
          Food={Restuarant6} />
        <RestaurantCard name="Breakfast Hub" rating="4.6" price="400" Monogram={Monogram2}
          Food={Restuarant2} />
      </div>
    </div>
  );
}
export default BulkOrder;
