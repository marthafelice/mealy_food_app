import React from "react";
import ReactModal from "react-modal";
import { useContext } from "react";

import { homepageContext } from "../App";


function EditProfileModal() {
  const profileContext = useContext(homepageContext);
  const {
    displayEditModal,
    setDisplayEditModal,
    // displayPasswordModal,
    // setDisplayPasswordModal,
  } = profileContext;
  return (
    <ReactModal
      isOpen={displayEditModal}
      onRequestClose={displayEditModal}
      contentLabel="editprofilemodal"
    >

      <p>MY EDIT MODAL</p>
      <button onClick={()=>setDisplayEditModal(false)}>CLOSE  MODAL</button>
    </ReactModal>
  );
}

export default EditProfileModal;
