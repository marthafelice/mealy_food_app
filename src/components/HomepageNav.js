import React from "react";
import LogoDark from "../images/logo.svg";
import Location from "../images/location.svg";
import ArrowDown from "../images/arrowdown.svg";
import Cart from "../images/cart.svg";
import Profile from "../images/profile.svg";
// import { useState } from "react";
import { useContext } from "react";
import { homepageContext } from "../App";

function HomepageNav() {
  const navContext=useContext(homepageContext)
  const {displayProfile,setDisplayProfile}=navContext

  function showProfile() {
    setDisplayProfile(!displayProfile);
  }
  return (
    <nav className="homepage-nav">
      <div className="nav-section_1 nav-section">
        <img src={LogoDark} alt="mealy dark logo" className="logo-dark" />
        <div className="address-container">
          <img
            src={Location}
            alt="location icon"
            className="nav-section_location-icon"
          />
          <p className="address">32,Kingston street</p>
          <img
            src={ArrowDown}
            alt="arrow icon"
            className="nav-section_arrow-icon"
          />
        </div>
      </div>
      <div className="nav-section_2 nav-section">
        <input className="homepage-nav_search" placeholder="search"></input>
        <img src={Cart} alt="cart icon" className="nav-section_cart-icon" />
        <img
          src={Profile}
          alt="profile icon"
          className="nav-section_profile-icon"
          onClick={showProfile}
        />
      </div>
    </nav>
  );
}

export default HomepageNav;
