import React from "react";
import ReactModal from "react-modal";
import "../styles/editProfile.css";
import { useSelector, useDispatch } from "react-redux";
import { closedProfileEdit } from "../redux/slices/profileSlice";

import { ButtonPill } from "../components/Buttons";
import { useForm } from "react-hook-form";
import close from "../images/close.svg";
import padlockIcon from "../images/padlock.svg";
import * as profileConst from "../redux/constants/profile.js";
import axios from "axios";

function EditPasswordModal() {
  const { register, handleSubmit } = useForm();
  const { displayPasswordEdit } = useSelector((state) => state.profile);
  const {userId}=useSelector((state)=>state.userData)
 
  async function editSubmit(data) {
    console.log(data);
    try{
      const response=await axios.patch(`https://mealyapp-bdev.onrender.com/api/v1/user/${userId}`,data)
      console.log(response)
    }
    catch(err){
      console.warn(err.response.data)
    }
    
  
  }
  const dispatch = useDispatch();
  function closeProfileEdit() {
    dispatch(closedProfileEdit(profileConst.passwordEdit));
  }

  return (
    <ReactModal
      isOpen={displayPasswordEdit}
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
      <h2 className="editProfile_heading">Password</h2>
      <form className="editProfile_form" onSubmit={handleSubmit(editSubmit)}>
        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            placeholder="Old password"
            id="old-password"
            {...register("old-password", { required: "this is required" })}
          />
          <img src={padlockIcon} alt="padlock  icon" className="icon-start" />
        </div>

        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            id="new-password"
            placeholder="Password"
            {...register("new-password", {
              required: "this is required",
            })}
          />
          <img src={padlockIcon} alt="padlock  icon" className="icon-start" />
        </div>

        <div className="editProfile_input_container">
          <input
            type="text"
            className="editProfile_input"
            id="reEnter-password"
            placeholder="Re-enter password"
            {...register("new-password", {
              required: "this is required",
            })}
          />
          <img src={padlockIcon} alt="padlock  icon" className="icon-start" />
        </div>

        <ButtonPill text="Submit" className="button-pill_editProfileName" />
      </form>
    </ReactModal>
  );
}

export default EditPasswordModal;
