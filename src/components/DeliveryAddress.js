import React, { useEffect, useState } from "react";
import map from "../images/Map.jpg";
import "../styles/mapAddress.css"
import RoundLocation from "../images/locationround.svg";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authedHomepage, closedAuthModal, toggled } from "../redux/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
  const { displayDeliveryMap } = useSelector((state) => state.auth);
  const [setAddress,setSetAddress]=useState(false)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const location=useLocation()

  function closeMapModal(){
    dispatch(closedAuthModal('map'))
    setSetAddress(true)
    dispatch(authedHomepage('auth'))
    dispatch(toggled('loginTip'))
    console.log(setAddress)
    console.log(location.pathname)
  }
  useEffect(()=>{
  
    if(setAddress&&location.pathname==='/'){
     navigate("/home/deliveryOrder")
 
    }
    
  },[setAddress])
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
            className="delivery-address_search-input"
            placeholder="Search street, city, district....."
            autoComplete="current-password"
          />

          <div className="current-location">
            <img src={RoundLocation} alt="a round location icon" />{" "}
            <p onClick={closeMapModal}> Use current location</p>
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
export default DeliveryAddress;
