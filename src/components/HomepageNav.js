import React from "react";
import LogoDark from "../images/logo.svg";
import Location from "../images/location.svg";
import ArrowDown from "../images/arrowdown.svg";
import Filter from "../images/filterIcon.svg";
import Profile from "../images/profile.svg";
import { useDispatch } from "react-redux";
import { toggleProfile } from "../redux/slices/profileSlice";
import { toggledSignUp } from "../redux/slices/authSlice";
import unAuthProfileIcon from "../images/unAuthProfileIcon.svg";

function HomepageNav() {
  const authUser = false;
  let dispatch = useDispatch();
  function toggle() {
    dispatch(toggleProfile());
  }
  function toggleSignup(){
    dispatch(toggledSignUp())
    console.log('signup-triggered')
  }
  return (
    <nav className="homepage-nav">
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
        <input className="homepage-nav_search" placeholder="search"></input>
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
              src={Profile}
              alt="profile icon"
              className="nav-section_profile-icon"
              onClick={toggle}
            />
          </>
        ) : (
          
            <img
              src={unAuthProfileIcon}
              alt="unathourized user profile icon"
              className="unAuthprofile-icon"
              onClick={toggleSignup}
            />
    
        )}
      </div>
    </nav>
  );
}

export default HomepageNav;
