import RestaurantCard from "./RestaurantCard";
import "../styles/categories.css";
import Monogram from "../images/monogram.svg";
import Monogram1 from "../images/monogram1.png";
import Monogram2 from "../images/monogram2.png";
import Restuarant1 from "../images/rest1.png";
import Restuarant2 from "../images/rest2.png";
import Restuarant3 from "../images/rest3.png";
import Restuarant4 from "../images/rest4.png";
import Restuarant5 from "../images/rest5.png";
import Restuarant6 from "../images/rest6.png";
import Restuarant7 from "../images/rest7.png";
import Restuarant8 from "../images/rest8.png";
import Restuarant9 from "../images/rest9.png";
import Restuarant10 from "../images/rest10.png";
import BreakfastHub from "../images/breakfasthub.svg";
function DeliveryOrder() {
  return (
    <div className='order-category_delivery order-category'>
      <h3>African Restaurants</h3>
      <div className='order-category_restaurant-cards'>
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price={400}
          Monogram={Monogram}
          Food={BreakfastHub}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant1}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram2}
          Food={Restuarant2}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant3}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant4}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant5}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant6}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant7}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant8}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant9}
        />
        <RestaurantCard
          name='Breakfast Hub'
          rating='4.6'
          price='400'
          Monogram={Monogram1}
          Food={Restuarant10}
        />
      </div>
    </div>
  );
}

export default DeliveryOrder;
