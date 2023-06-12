import RestaurantCard from "./RestaurantCard";
import "../styles/categories.css";
function DeliveryOrder() {
  return (
    <div className="order-category_delivery order-category">
      <h3>African Restaurants</h3>
      <div className="order-category_restaurant-cards">
        <RestaurantCard name="Breakfast Hub" rating="4.6" price={400} />
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

export default DeliveryOrder;
