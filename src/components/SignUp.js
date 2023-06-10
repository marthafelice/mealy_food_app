import React from "react";
import { useForm } from "react-hook-form";
import Biker from "../images/bike.png";
import Name from "../images/name.png";
import Password from "../images/password.png";
import Email from "../images/email.png";
import "../styles/SignUp.css";

import ReactModal from "react-modal";
import close from "../images/close.svg";
import { useDispatch, useSelector } from "react-redux";
import { displayedAuthModal, toggledSignUp } from "../redux/slices/authSlice";
import ButtonLarge from "./Buttons";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const dispatch = useDispatch();
  function closeSignUp() {
    dispatch(toggledSignUp());
  }
  function openActivationModal(){
    dispatch(displayedAuthModal("activation"))
  }
  
  const { displaySignUpModal } = useSelector((state) => state.auth);
  return (
    <ReactModal
      isOpen={displaySignUpModal}
      contentLabel="signupmodal"
      overlayClassName="overlay"
      onRequestClose={closeSignUp}
      className="signup-container auth-padding auth-width"
    >
      <img
        src={close}
        alt="close icon"
        className="close-signup-icon"
        onClick={closeSignUp}
      />

      <h3>Sign Up to Mealy</h3>
      <p className="signup-instruction">
        Already have an Account?
        <a href="/">Login</a>
      </p>
      <img src={Biker} alt="a biker" className="biker-img" />

      <form onSubmit={handleSubmit(onSubmit)} className="text-2xl w-40rem">
        <div className="signup-input-container">
          <img src={Name} alt="name icon" />
          <input
            {...register("Name", { required: true })}
            placeholder="First name"
            className="signup-input"
          />
        </div>
        <div className="signup-input-container">
          <img src={Name} alt="name icon" />
          <input
            {...register("Name", { required: true })}
            placeholder="Last name"
            className="signup-input"
          />
        </div>

        <div className="signup-input-container">
          <img src={Email} alt="email icon" className="icon-email" />
          <input
            {...register("mail", { required: "Email Address is required" })}
            aria-invalid={errors.mail ? "true" : "false"}
            placeholder="Email"
            className="signup-input"
          />
        </div>
        {errors.mail && <p className="error-message">{errors.mail?.message}</p>}
        <div className="signup-input-container">
          <img src={Password} alt="password icon" />
          <input
            {...register("password", {
              required: true,
            })}
            placeholder="Password"
            className="signup-input"
          />
        </div>

          <ButtonLarge text="SIGNUP" onclick={openActivationModal} />
    
      </form>
    </ReactModal>
  );
}

export default SignUp;
