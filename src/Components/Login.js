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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // const [isModalOpen, setIsModalOpen] = useState(false);

  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  const onSubmit = (data) => {
    console.log(data); // You can perform your login logic here
  };

  return (
    <div className="login-container auth-padding auth-width">
      <img src={close} alt="close modal icon" className="login-close-icon" />
      <h3 className="login-title">Login to Mealy</h3>
      <p className="login-instruction">
        Don't have an account? <Link>Sign up</Link>
      </p>
      <img src={cuate} alt="mealy" className="cuate-img" />
      <form onSubmit={handleSubmit(onSubmit)} className="login-form">
        <div className="login-input-container">
          <img src={mail} alt="mail" />
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
          />
          {errors.email && <span className="error-message">Email is required</span>}
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

        <p className="login-forgot-password">
          {" "}
          <Link>Forgot password?</Link>
        </p>
        <ButtonLarge text="LOGIN" classname="login-btn" />
      </form>

      <button className="google-btn">
        <img className="google_icon" src={google_logo} alt="google" />
        <p>Continue with Gmail</p>
      </button>
    </div>
  );
};

export default LoginForm;
