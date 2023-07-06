// import React, { useEffect, useState } from "react";
import HomepageNav from "../components/HomepageNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/layout.css"
import EditNameEmailModal from "../modals/EditNameEmail";
import EditPasswordModal from "../modals/EditPassword";
// import Categories from "./Categories";

import SignUp from "../modals/SignUp";

import DeliveryAddress from "../components/DeliveryAddress";
import ForgotPassword from "../modals/ForgotPassword";
import NewPassword from "../modals/NewPassword";
// import CartModal from "../components/CartModal"
import Logout from "../modals/Logout";
import ProfileComp from "../modals/ProfileComp";
import { useDispatch, useSelector } from "react-redux";
import YourOrders from "../modals/YourOrders";
import CartModal from "../modals/CartModal";
import Login from "../modals/Login";
import Activate from "../modals/Activate";
import { Authenticated } from "../redux/slices/authSlice";
import { useEffect } from "react";
import TrackOrder from "../modals/TrackOrder";

function Layout() {
  const { displayProfile } = useSelector((state) => state.profile);
  const dispatch=useDispatch()

  useEffect(() => {
    dispatch(Authenticated(JSON.parse(localStorage.getItem("isAuth"))));
  }, [dispatch]);
  return (
    <div className="app-layout">

      {/* PORTAL AND MODALS */}
      <SignUp />
      <Activate/>
       <Login/>
      <DeliveryAddress />
      <ForgotPassword />
      <NewPassword />
      {displayProfile && <ProfileComp />}
      <EditNameEmailModal />
      <EditPasswordModal />
      <Logout/>
         
     {/* track order */}
      <YourOrders/>
      <TrackOrder/>
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
