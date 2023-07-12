import React from "react";

import "../styles/mapAddress.css"
import RoundLocation from "../images/locationround.svg";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { closedAuthModal, toggled } from "../redux/slices/authSlice";
import Map from "./Map";
import axios from "axios";

import { Address } from "../redux/slices/userData";


const DeliveryAddress = () => {
  const dispatch=useDispatch(); 
  const { displayDeliveryMap } = useSelector((state) => state.auth);
  const {userAddress}=useSelector((state)=>state.userData)


  function closeMapModal(){
    dispatch(closedAuthModal('map'))
    dispatch(toggled('loginTip'))
  }
 function getCurrentLocation(){
    const Geolocation=navigator.geolocation;
    Geolocation.getCurrentPosition(async(location)=>{
      const long=location.coords.longitude
      const lat=location.coords.latitude
      console.log(lat,long);
      try{
        const response=await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${long}`)
        console.log(response.data.address)
        const data=response.data.address
        const {road,village,city}=data
     
       const address=`${road},${village},${city}`
       dispatch(Address(address))
     
      }catch(err){
       console.warn(err)
      }
    })
  }
  const handleInputChange = (event) => {
    dispatch(Address(event.target.value));
  };
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
            value={userAddress}
            onChange={handleInputChange}
          />

          <div className="current-location">
            <img src={RoundLocation} alt="a round location icon" />{" "}
            <p onClick={getCurrentLocation}> Use current location</p>
          </div>
        </div>
        <p className="set-location">Or set your location on the map</p>
      </div>

      <div className="map-section">
        <Map/>
      </div>
    </ReactModal>
  );
};
export default DeliveryAddress;
