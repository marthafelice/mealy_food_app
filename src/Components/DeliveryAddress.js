import React from "react";
import map from "../images/Map.jpg";
import "../styles/deliveryAddress.css";
import RoundLocation from "../images/locationround.svg";
const DeliveryAddress = () => {
  return (
    <div className="delivery-address auth-width ">
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
        <img src={map} className="" alt="map" />
      </div>
    </div>
  );
};

export default DeliveryAddress;
