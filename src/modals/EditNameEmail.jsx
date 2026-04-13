import React, { useState } from "react";
import ReactModal from "react-modal";
import "../styles/editProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { closedProfileEdit } from "../redux/slices/profileSlice";

import { ButtonPill } from "../components/Buttons";
import { useForm } from "react-hook-form";
import editNameIcon from "../images/editname.svg";
import editMailIcon from "../images/email.svg";
import clearEdit from "../images/clearEdit.svg";
import close from "../images/close.svg";
import * as profileConst from "../redux/constants/profile";
import axios from "axios";

function EditNameEmailModal() {
  const [success,setSuccess]=useState("");
  const { register, handleSubmit ,formState:{isSubmitting,isSubmitSuccessful}} = useForm();
  const { displayNameEdit } = useSelector((state) => state.profile);
  const userId=localStorage.getItem('userId')
  console.log(userId)
  async function editSubmit(userData) {
    console.log(userData);
    try{
        const response=await axios.patch(`https://mealyapp-bdev.onrender.com/api/v1/user/${userId}`,userData)
        console.log(response.data.message)
        setSuccess(response.data.message)
        localStorage.setItem('userName',userData.userName)
        localStorage.setItem('email',userData.email)
      
      }
    catch(err){
    console.warn(err.response.data)
    }
  }
  const dispatch = useDispatch();
  function closeProfileEdit() {
    dispatch(closedProfileEdit(profileConst.nameEdit));
  }

  return (
    <ReactModal
      isOpen={displayNameEdit}
      contentLabel="editprofilemodal"
      onRequestClose={closeProfileEdit}
      overlayClassName="overlay"
      className="overlay-content_edit"
    >
      <img
        src={close}
        alt="close icon"
        className="closeEditProfile-icon"
        onClick={closeProfileEdit}
      />
      <h2 className="editProfile_heading">Your Details</h2>
      <form className="editProfile_form" onSubmit={handleSubmit(editSubmit)}>
        <label htmlFor="edit-name" className="editProfile_title">
          Name
        </label>
        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            placeholder="mariam"
            id="edit-name"
            {...register("userName", { required: "this is required" })}
          />
          <img src={editNameIcon} alt="edit name icon" className="icon-start" />
          <img src={clearEdit} alt="clear edit icon" className="icon-end" />
        </div>
        <label htmlFor="edit-email" className="editProfile_title">
          Email
        </label>
        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            id="edit-email"
            placeholder="marmtee@gmail.com"
            {...register("email", {
              required: "this is required",
              pattern: {
                value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message:'Enter email in the correct format'
              },
            })}
          />
          <img src={editMailIcon} alt="edit name icon" className="icon-start" />
          <img src={clearEdit} alt="clear edit icon" className="icon-end" />
        </div>
              <p className="edit-success">{isSubmitSuccessful?success:""}</p>
        <ButtonPill text="Submit" className="button-pill_editProfileName" isSubmit={isSubmitting} loading={<div className="loader"></div>}/>
      </form>
    </ReactModal>
  );
}

export default EditNameEmailModal;
