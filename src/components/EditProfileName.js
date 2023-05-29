import React from "react";
import ReactModal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { displayedProfileEdit } from "../redux/slices/profileSlice";
import "../styles/editProfileName.css";
function EditProfileModal() {
  const { displayEdit } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  function closeProfileEdit() {
    dispatch(displayedProfileEdit());
  }

  return (
    <ReactModal
      isOpen={displayEdit}
      contentLabel="editprofilemodal"
      onRequestClose={closeProfileEdit}
     className ='e'
    >
      <p>MY EDIT MODAL</p>
      <button onClick={closeProfileEdit}>CLOSE MODAL</button>
    </ReactModal>
  );
}

export default EditProfileModal;
