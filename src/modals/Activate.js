import React, { useState } from "react";
import Image from "../images/activation.svg";
import ButtonLarge from "../components/Buttons";
import ReactModal from "react-modal";
import {  closedAuthModal, displayedAuthModal } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import close from "../images/close.svg";
import * as auth from "../redux/constants/auth";
import { useForm } from "react-hook-form";
import axios from "axios";


function Activate() {
  const {
    register,
    handleSubmit,
    formState: {isSubmitting },
  } = useForm();
 const[errorMessage,setErrorMessage]=useState(null)

  const { displayActivationModal } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  function closeActivationModal() {
    dispatch(closedAuthModal(auth.activation));
  }
  function handleInputChange(e, i) {
    const { value } = e.target;
    console.log(e);
    if (value.length === 1 && i < 3) {
     e.target.nextSibling.focus()
     
    }
  }

  async function verifyCode(data){
   const code = `${data.box1}${data.box2}${data.box3}${data.box4}`;  
    try {
      const response = await axios.post('https://mealyapp-bdev.onrender.com/api/v1/user/otpActivation', {
        otp: code
      })
      console.log(response)
      dispatch(closedAuthModal(auth.activation));
      dispatch(displayedAuthModal(auth.login));
   
    }
    catch(err){
      console.error(err.response.data.message)
      setErrorMessage(err.response.data.message)
    }
   
  }

 
 
   
  


  return (
    <ReactModal
      isOpen={displayActivationModal}
      contentLabel="activation modal"
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
      <form className="activation-form"  onSubmit={handleSubmit(verifyCode)}>
        <div className="activation-code-box-container">
        <input {...register('box1',{required:true})} onChange={(e)=>handleInputChange(e,0)}   maxLength="1" className="code-box" type="password" placeholder="*" autoFocus />
        <input {...register('box2',{required:true})}  onChange={(e)=>handleInputChange(e,1)}   maxLength="1" className="code-box" type="password" placeholder="*" />
        <input {...register('box3',{required:true})}  onChange={(e)=>handleInputChange(e,2)}   maxLength="1" className="code-box" type="password" placeholder="*" />
        <input {...register('box4',{required:true})} onChange={(e)=>handleInputChange(e,3)}    maxLength="1" className="code-box" type="password" placeholder="*" />
   </div>
    
      <p className="receive-code">
        Did not receive code? <span>Resend Code</span>
      </p>

       <p className={errorMessage?"auth-error":"auth-error-display"}>{errorMessage}</p>

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

export default Activate;
