import "../styles/homepage.css";
import "../styles/homepagenav.css";

import { useSelector } from "react-redux";

import React from "react";

import EditNameEmailModal from "./EditNameEmail";
import EditPasswordModal from "./EditPassword";
import Categories from "./Categories";

function Homepage() {


  return (
    <div className="homepage-container">
      <Categories />
    </div>
  );
}

export default Homepage;
