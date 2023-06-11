import React from "react";
import map from "../images/Map.jpg";
import "../styles/deliveryAddress.css";
import RoundLocation from "../images/locationround.svg";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closedAuthModal } from "../redux/slices/authSlice";
import "../styles/categories.css";
import RestaurantCard from "./RestaurantCard";

const DeliveryAddress = () => {
  const { displayDeliveryMap } = useSelector((state) => state.auth);
  const dispatch=useDispatch();
  function closeMapModal(){
    dispatch(closedAuthModal('map'))
  }
  return (
    <ReactModal
      isOpen={displayDeliveryMap}
      overlayClassName="overlay"
      className="delivery-address auth-width"
      onRequestClose={closeMapModal}
    >
      <div className="address-section">
        <h2>Add a delivery address</h2>

        <div className="input-container">
          <input
            type="text"
            class="delivery-address_search-input"
            placeholder="Search street, city, district....."
          />

          <div className="current-location">
            <img src={RoundLocation} alt="a round location icon" />{" "}
            <p> Use current location</p>
          </div>
        </div>
        <p className="set-location">Or set your location on the map</p>
      </div>

      <div className="map-section">
        <img src={map}  alt="map" />
      </div>
    </ReactModal>
  );
};


function OrderDeliver() {
  return (
    <div className="order-category_delivery order-category">
      <h3>African Restaurants</h3>
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

export { OrderDeliver};

export default DeliveryAddress;
