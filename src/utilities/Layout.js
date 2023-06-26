// import React, { useEffect, useState } from "react";
import HomepageNav from "../components/HomepageNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/layout.css"
import EditNameEmailModal from "../modals/EditNameEmail";
import EditPasswordModal from "../modals/EditPassword";
// import Categories from "./Categories";

import SignUp from "../modals/SignUp";
import Activation from "../modals/Activation";
import Login from "../modals/Login";
import DeliveryAddress from "../components/DeliveryAddress";
import ForgotPassword from "../modals/ForgotPassword";
import NewPassword from "../modals/NewPassword";
// import CartModal from "../components/CartModal"
import Logout from "../modals/Logout";
import ProfileComp from "../modals/ProfileComp";
import { useSelector } from "react-redux";
import YourOrders from "../modals/YourOrders";
import CartModal from "../modals/CartModal";

function Layout() {
  const { displayProfile } = useSelector((state) => state.profile);

  return (
    <div className="app-layout">

      {/* PORTAL AND MODALS */}
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
         
     {/* track order */}
      <YourOrders/>
      <CartModal />
     

      {/* MAIN CONTENT */}
      <HomepageNav />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
}

export default Layout;
