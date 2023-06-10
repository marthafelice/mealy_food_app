import React from "react";
import Image from "../images/activation.svg";
import ButtonLarge from "./Buttons";
import ReactModal from "react-modal";
import { displayedAuthModal, closedAuthModal } from "../redux/slices/authSlice";
import { useDispatch, useSelector } from "react-redux";
import close from "../images/close.svg"

function Activation() {
  const dispatch = useDispatch();

  const { displayActivationModal } = useSelector((state) => state.auth);
  function closeActivationModal() {
    dispatch(closedAuthModal("activation"));
  }
  function openLoginModal(){
    dispatch(displayedAuthModal('login'))
  }
  return (
    <ReactModal
      isOpen={displayActivationModal}
      contentLabel="activationpmodal"
      overlayClassName="overlay"
      className="activation-container auth-padding auth-width"
      onRequestClose={closeActivationModal}
    >
      <img src={close}alt="close icon" className="close-icon" onClick={closeActivationModal}/>
      <img src={Image} alt="activation" className="activation-img" />
      <h2 className="activation-title auth-title">Activation Code</h2>
      <p className="activation-email-notify">
        An email was sent to *****@gmail.com with an active code
      </p>
      <div className="activation-code-box-container">
        <div className="code-box">
          <p>*</p>
        </div>
        <div className="code-box">
          <p>*</p>
        </div>
        <div className="code-box">
          <p>*</p>
        </div>
        <div className="code-box">
          <p>*</p>
        </div>
      </div>
      <p className="receive-code">
        Did not receive code? <span>Resend Code</span>
      </p>

      <ButtonLarge text="VERIFY AND PROCEED" onclick={openLoginModal} classname="verify-proceed-btn"/>
    </ReactModal>
  );
}

export default Activation;
