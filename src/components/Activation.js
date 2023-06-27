import React from "react";
import Image from "../images/activation.svg";
import ButtonLarge from "./Buttons";
import ReactModal from "react-modal";
import {  closedAuthModal } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import close from "../images/close.svg";
import * as auth from "../redux/constants/auth";
import { useForm } from "react-hook-form";

function Activation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const { displayActivationModal } = useSelector((state) => state.auth);
  function closeActivationModal() {
    dispatch(closedAuthModal(auth.activation));
  }
  function verifyCode(data){
    console.log(data)
    console.log(data.box1 + data.box2 + data.box3 + data.box4)
  }
  // function openLoginModal() {
  //   dispatch(displayedAuthModal(auth.login));
  //   dispatch(closedAuthModal(auth.activation));
  // }
  console.log(errors)
  return (
    <ReactModal
      isOpen={displayActivationModal}
      contentLabel="activationpmodal"
      overlayClassName="overlay"
      className="activation-container auth-padding auth-width"
      onRequestClose={closeActivationModal}
    >
      <img
        src={close}
        alt="close icon"
        className="close-icon"
        onClick={closeActivationModal}
      />
      <img src={Image} alt="activation" className="activation-img" />
      <h2 className="activation-title auth-title">Activation Code</h2>
      <p className="activation-email-notify">
        An email was sent to *****@gmail.com with an active code
      </p>
      <form className="activation-form" onSubmit={handleSubmit(verifyCode)}>
        <div className="activation-code-box-container">
        <input {...register('box1',{required:"enter a number"})} maxLength="1" className="code-box" type="password" placeholder="*"/>
        <input  {...register('box2',{required:"enter a number"})} maxLength="1" className="code-box" type="password" placeholder="*"/>
        <input  {...register('box3',{required:"enter a number"})}maxLength="1" className="code-box" type="password" placeholder="*"/>
        <input  {...register('box4',{required:"enter a number"})} maxLength="1" className="code-box" type="password" placeholder="*"/>
        </div>
      
      <p className="receive-code">
        Did not receive code? <span>Resend Code</span>
      </p>

      <ButtonLarge
        text="VERIFY AND PROCEED"
        classname="verify-proceed-btn"
        loading={'Verifying ....'}
        type="submit"
      />
      </form>
    </ReactModal>
  );
}

export default Activation;
