import React from "react";
import map from "../images/Map.jpg";
import "../styles/deliveryAddress.css";
const DeliveryAddress = () => {
  return (
    <div className="delivery-address">
      <div className="address-section">
        <h2>Add a delivery address</h2>

        <div class="deliver-address_search-container">
          <input
            type="text"
            class="deliver-address_search-input"
            placeholder="Search street, city, district....."
          ></input>
        </div>

        <div className="current-location">
         <p> Use current location</p>
        </div>

        <div className="EE">
          <a href="" className="link">
            Or set your location on the map
          </a>
        </div>
      </div>

      <div className="map">
        <img src={map} className="" alt="map" />
      </div>
    </div>
  );
};

export default DeliveryAddress;
