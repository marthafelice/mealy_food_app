import "../styles/homepage.css";
import "../styles/homepagenav.css";
import Profile from "./Profile";
import { useSelector } from "react-redux";

import React from "react";

import EditNameEmailModal from "./EditNameEmail";
import EditPasswordModal from "./EditPassword";
import Categories from "./Categories";
import Footer from "./Footer";
import SignUp from "./SignUp";
import Activation from "./Activation";
import Login from "./Login";
import DeliveryAddress from "./DeliveryAddress";
function Homepage() {
  const { displayProfile } = useSelector((state) => state.profile);

  return (
    <div className="homepage-container">
      
      <SignUp />
      <Activation />
      <Login />
      <DeliveryAddress />
      {displayProfile && <Profile />}
      <EditNameEmailModal />
      <EditPasswordModal />

      <Categories />
   
    </div>
  );
}

export default Homepage;
