import React from "react";
import LogoDark from "../images/logo.svg";
import Location from "../images/location.svg";
import ArrowDown from "../images/arrowdown.svg";
import Filter from "../images/filterIcon.svg";
import ProfileImg from "../images/authprofileIcon.svg";
import { useDispatch, useSelector} from "react-redux";
import { Profile } from "../redux/slices/profileSlice";
import { toggled } from "../redux/slices/authSlice";
import unAuthProfileIcon from "../images/unAuthProfileIcon.svg";

import LoginToolTip from "./LoginToolTip";

function HomepageNav() {

  let dispatch = useDispatch();
const{authUser}=useSelector((state)=>state.auth)
  
  function displayProfile() {
  dispatch(Profile('showProfile'));

  }
 
  function toggleLoginTip(){
    dispatch(toggled('loginTip'))
  }

  return (
    <nav className="homepage-nav" id="home-nav">

        <img
          src={LogoDark}
          alt="mealy dark logo"
          className="logo-dark nav-logo"
      
        />
  

      <div className="address-input">
        <div className="address-container">
          <img
            src={Location}
            alt="location icon"
            className="nav-section_location-icon"
          />
          <p className="address">
            {authUser ? "32, Kingston street" : "Add Address"}
          </p>
          <img
            src={ArrowDown}
            alt="arrow icon"
            className="nav-section_arrow-icon"
          />
        </div>
        <input className="homepage-nav_search" placeholder="search"  autoComplete="current-password"></input>
      </div>
      <div className="cart-profile ">
        {authUser ? (
          <>
            <img
              src={Filter}
              alt="cart icon"
              className="nav-section_filter-icon"
            />

            <img
              src={ProfileImg}
              alt="profile icon"
              className="nav-section_profile-icon"
              onClick={displayProfile}
            />
          </>
        ) : (
          <div className="unAuthIcon-container">
          <img
            src={unAuthProfileIcon}
            alt="unathourized user profile icon"
            className="unAuthprofile-icon"
            onClick={toggleLoginTip}
          />
          <LoginToolTip/>
          </div>
        )}
      </div>
    
    </nav>
  );
}

export default HomepageNav;
