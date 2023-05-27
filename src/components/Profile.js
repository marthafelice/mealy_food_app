import React from "react";
import "../styles/profile.css";
import ReactDOM from "react-dom";
import Card from "../images/card.svg";
import Logout from "../images/logout.svg";
import { AiOutlineRight } from "react-icons/ai";
import { useContext } from "react";
import { homepageContext } from "../App";
function Profile() {
  const profileContext = useContext(homepageContext);
  const { setDisplayEditModal, setDisplayPasswordModal,setDisplayProfile } = profileContext;
  const handleClick = () => {
    setDisplayEditModal(true);
    setDisplayProfile(false);
  };
  return ReactDOM.createPortal(
    <section className="profile">
      <h2>Hello, Mariam!</h2>
      <hr className="d"></hr>
      <div className="profile-content">
        <div className="profile-title-container">
          <div className="profile-title-container_section">
            <p className="profile-title">Name</p>
            <p className="profile-title_text profile-title_name">Mariam</p>
            <p className="profile-title">Email</p>
            <p className="profile-title_text">Marmtee@gmail.com</p>
          </div>
          <p className="edit" onClick={handleClick}>
            Edit
          </p>
        </div>
        <hr className="name-email-hr"></hr>
        <div className="profile-title-container">
          <div className="profile-title-container_section">
            <p className="profile-title">Password</p>
            <p className="profile-title_password">........</p>
          </div>
          <p className="edit" onClick={() => (setDisplayPasswordModal(true))}>
            Edit
          </p>
        </div>
        <hr></hr>

        <p className="profile-title">Payment method</p>
        <div className="profile-title-container profile-title_text">
          <div className="profile-title_payment-text">
            <img src={Card} alt="debit card icon" className="card-icon" />{" "}
            <p>Add a new card</p>
          </div>

          <AiOutlineRight />
        </div>
        <hr></hr>

        <div className="profile-title-container profile-title_text">
          <div className="profile-title_payment-text">
            <img src={Card} alt="debit card icon" className="card-icon" />{" "}
            <p>Wallet</p>
          </div>

          <AiOutlineRight />
        </div>
        <hr></hr>

        <div className="profile-title-container profile-title_text">
          <div className="profile-logout">
            <img src={Logout} alt="logout icon" className="logout-icon" />{" "}
            <p>Logout</p>
          </div>

          <AiOutlineRight />
        </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}

export default Profile;
