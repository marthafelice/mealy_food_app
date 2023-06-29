import React, { useRef } from "react";
import Image from "../images/activation.svg";
import ButtonLarge from "../components/Buttons";
import ReactModal from "react-modal";
import {  closedAuthModal } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import close from "../images/close.svg";
import * as auth from "../redux/constants/auth";
import { useForm } from "react-hook-form";


function Activation() {
  
  const { displayActivationModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const InputRefs=useRef([]);
  // dispatch(displayedAuthModal(auth.login));
  // dispatch(closedAuthModal(auth.activation));
  const {
    register,
    handleSubmit,
    formState: {isSubmitting },
  } = useForm();




  function closeActivationModal() {
    dispatch(closedAuthModal(auth.activation));
  }
  function handleInputChange(e,i){
   const {value}=e.target
   if (value.length===1 && i<InputRefs.current.length-1){

      InputRefs.current[i+1].focus()
   }
  }
  function verifyCode(data){
    console.log("activation clciked")
    console.log(data)
  }
   
  


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
        <input {...register('box1',{required:"enter a number"})} ref={(el)=>InputRefs.current[0]=el} onChange={(e)=>handleInputChange(e,0)} maxLength="1" className="code-box" type="password" placeholder="*" autoFocus/>
        <input  {...register('box2',{required:"enter a number"})}ref={(el)=>InputRefs.current[1]=el} onChange={(e)=>handleInputChange(e,1)}  maxLength="1" className="code-box" type="password" placeholder="*"/>
        <input  {...register('box3',{required:"enter a number"})}ref={(el)=>InputRefs.current[2]=el} onChange={(e)=>handleInputChange(e,2)}  maxLength="1" className="code-box" type="password" placeholder="*"/>
        <input  {...register('box4',{required:"enter a number"})}ref={(el)=>InputRefs.current[3]=el} onChange={(e)=>handleInputChange(e,3)}  maxLength="1" className="code-box" type="password" placeholder="*"/>
        </div>
      
      <p className="receive-code">
        Did not receive code? <span>Resend Code</span>
      </p>

      <ButtonLarge
        text="VERIFY AND PROCEED"
        classname="verify-proceed-btn"
        isSubmit={isSubmitting}
        loading={<div className="loader"></div>}
      
      />
        
      </form>
    </ReactModal>
  );
}

export default Activation;
