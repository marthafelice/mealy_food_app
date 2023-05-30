import React from "react";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { displayedProfileEdit } from "../redux/slices/profileSlice";
import "../styles/editProfile.css";
import { editprofileNameModal } from "../styles/allModals";
import { useForm } from "react-hook-form";

function EditProfileModal() {
  const { register, handleSubmit } = useForm();
  const { displayEdit } = useSelector((state) => state.profile);
  function editSubmit(data) {
    console.log(data);
  }
  const dispatch = useDispatch();
  function closeProfileEdit() {
    dispatch(displayedProfileEdit());
  }

  return (
    <ReactModal
      isOpen={displayEdit}
      contentLabel="editprofilemodal"
      onRequestClose={closeProfileEdit}
      style={editprofileNameModal}
    >
      <h2 className="editProfile_heading">Your Details</h2>
      <form className="editProfile_form" onSubmit={handleSubmit(editSubmit)}>
        <label htmlFor="edit-name" className="editProfile_title">Name</label>
        <input
          className="edit-input"
          placeholder="mariam"
          id="edit-name"
          {...register("edit-name", { required: "this is required" })}
        />
        <label htmlFor="edit-email">Name</label>
        <input
          className="edit-input"
          id="edit-email"
          placeholder="marmtee@gmail.com"
          {...register("edit-email", {
            required: "this is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "invalid Email Address",
            },
          })}
        />
        <button type="submit" className="edit-profile_submit">SUBMIT</button>
      </form>
      <button onClick={closeProfileEdit}>CLOSE MODAL</button>
    </ReactModal>
  );
}

export default EditProfileModal;
