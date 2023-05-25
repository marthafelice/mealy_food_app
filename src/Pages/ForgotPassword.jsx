import React from "react";
import logo from "../images/forgot-password-img.png";
import close from "../images/close-button.png";
import ForgotPasswordForm from "../Components/ForgotPasswordForm";
import CustomHeader from "../Components/CustomHeader";
import "../App.css";
export default function ForgotPassword() {
  return (
    <div className="main-container">
      <div className='header-container'>
      <div><CustomHeader heading="Forgot Password" /></div>
      <div><img src={close} className="close-icon" alt="close" /></div>
      
      </div>
      <img src={logo} className="App-logo" alt="logo" />

      <div className="enter-email-placeholder">
        <CustomHeader subtitle="Please Enter Your Email Address To Receive A Verification Code" />
      </div>
      <ForgotPasswordForm />
    </div>
  );
}
