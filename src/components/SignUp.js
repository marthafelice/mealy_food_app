import React from "react";
import { useForm } from "react-hook-form";
import Biker from "../images/bike.png";
import Name from "../images/name.png";
import Password from "../images/password.png";
import Email from "../images/email.png";
import "../styles/SignUp.css";
import axios from "axios";

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
  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = {
        ...data,
        userAddress: '123 Street, City, Country'
      };
      const response = await axios.post(
        "https://mealyapp-bdev.onrender.com/api/v1/user/Signup",
        formData
      );
      console.log(response.data);
      if (response.data.success) {
        console.log("success");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  function closeSignUp() {
    dispatch(toggledSignUp());
  }
  function openActivationModal() {
    dispatch(displayedAuthModal("activation"));
    dispatch(toggledSignUp());
  }
  function openLoginModal() {
    dispatch(toggledSignUp());
    dispatch(displayedAuthModal("login"));
  }

  const { displaySignUpModal } = useSelector((state) => state.auth);

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.])[A-Za-z\d@$!%*?&.]{8,}$/;

  return (
    <ReactModal
      isOpen={displaySignUpModal}
      contentLabel='signupmodal'
      overlayClassName='overlay'
      onRequestClose={closeSignUp}
      className='signup-container auth-padding auth-width'
    >
      <img
        src={close}
        alt='close icon'
        className='close-signup-icon'
        onClick={closeSignUp}
      />

      <h3>Sign Up to Mealy</h3>
      <div className='signup-instruction'>
        Already have an Account?
        <p onClick={openLoginModal}>Login</p>
      </div>
      <img src={Biker} alt='a biker' className='biker-img' />

      <form
        onSubmit={handleSubmit(onSubmit)}
        className='text-2xl w-40rem'
        noValidate
      >
        <div className='signup-input-container'>
          <div className='align'>
            <img src={Name} alt='name icon' />
            <input
              id='userName'
              {...register("userName", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name should be at least 2 characters long",
                },
              })}
              placeholder='Name'
              className='signup-input'
            />
          </div>

          {errors.userName && (
            <p className='error-message'>{errors.userName.message}</p>
          )}
        </div>

        <div className='signup-input-container'>
          <div className='align'>
            <img src={Email} alt='email icon' className='icon-email' />
            <input
              id='email'
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
              placeholder='Email'
              className='signup-input'
            />
          </div>
        </div>
        {errors.email && (
          <p className='error-message'>{errors.email?.message}</p>
        )}
        <div className='signup-input-container'>
          <div className='align'>
            <img src={Password} alt='password icon' />
            <input
              id='password'
              {...register("password", {
                required: "Password is required",
                pattern: {
                  value: passwordRegex,
                  message:
                    "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one symbol",
                },
              })}
              placeholder='Password'
              className='signup-input'
            />
          </div>
          {errors.password && (
            <p className='error-message'>{errors.password.message}</p>
          )}
        </div>

        <ButtonLarge text='SIGNUP' type='submit' />
      </form>
    </ReactModal>
  );
}

export default SignUp;
