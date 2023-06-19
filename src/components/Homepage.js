import "../styles/homepage.css";
import "../styles/homepagenav.css";
import Profile from "./ProfileComp";
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
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";
import CartModal from "../components/CartModal"
import Logout from "./Logout";
import ProfileComp from "./ProfileComp";
function Homepage() {
  const { displayProfile } = useSelector((state) => state.profile);

  return (
    <div className="homepage-container">
      <SignUp />
      <Activation />
      <Login />
      <DeliveryAddress />
      <ForgotPassword />
      <NewPassword />
      {displayProfile && <ProfileComp />}
      <EditNameEmailModal />
      <EditPasswordModal />
      <Logout/>

      <CartModal />
      <Categories />
    </div>
  );
}

export default Homepage;
