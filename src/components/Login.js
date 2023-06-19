import React from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import cuate from "../images/cuate.svg";
import mail from "../images/mail.svg";
import password from "../images/password.svg";
// import eye from '../images/eye.svg';
import google_logo from "../images/logos_google-icon.svg";
import "../styles/login.css";
import close from "../images/close.svg";
import ButtonLarge from "./Buttons";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import { authedHomepage, closedAuthModal, displayedAuthModal, toggled} from "../redux/slices/authSlice";
import * as auth from "../redux/constants/auth"
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // You can perform your login logic here
  };
  const dispatch = useDispatch();
  const { displayLoginModal } = useSelector((state) => state.auth);
  function closeLogin() {
    dispatch(closedAuthModal(auth.login));

  }
  function displayMap(){
    dispatch(closedAuthModal(auth.login))
    dispatch(displayedAuthModal(auth.map))
    dispatch(authedHomepage())
    
  }
  function displaySignupModal(){
    dispatch(closedAuthModal(auth.login))
    dispatch(toggled('signup'))
  }
  function displayForgotPwdModal(){
    dispatch(displayedAuthModal(auth.forgotPwd))
    dispatch(closedAuthModal(auth.login))
  }
  return (
    <ReactModal
      isOpen={displayLoginModal}
      contentLabel="loginmodal"
      overlayClassName="overlay"
      className="login-container auth-width auth-padding"
      onRequestClose={closeLogin}
    >
      <img src={close} alt="close modal icon" className="login-close-icon" onClick={closeLogin} />
      <h3 className="login-title">Login to Mealy</h3>
      <div className="login-instruction">
        Don't have an account? <p onClick={displaySignupModal}>Sign up</p>
      </div>
      <img src={cuate} alt="mealy" className="cuate-img" />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="login-input-container">
          <img src={mail} alt="mail" />
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="error-message">Email is required</span>
          )}
        </div>

        <div className="login-input-container">
          <img src={password} alt="password" />
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error-message">Password is required</span>
          )}
          {/* <img src={eye} alt='eye'/> */}
        </div>

        <p className="forgot-password" onClick={displayForgotPwdModal}>
          
          Forgot password?
        </p>
        <ButtonLarge text="LOGIN" onclick={displayMap} classname="login-btn" />
      </form>

      <button className="google-btn">
        <img className="google_icon" src={google_logo} alt="google" />
        <p>Continue with Gmail</p>
      </button>
    </ReactModal>
  );
};

export default LoginForm;