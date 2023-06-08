import "../styles/homepage.css";
import "../styles/homepagenav.css";
import Profile from "./Profile";
import { useSelector } from "react-redux";

import React from "react";
import HomepageNav from "./HomepageNav";
import EditNameEmailModal from "./EditNameEmail";
import EditPasswordModal from "./EditPassword";
import Categories from "./Categories";
import Footer from "./Footer";
function Homepage() {
  const { displayProfile } = useSelector((state) => state.profile);
  
  return (
    <div className="homepage-container">
      <HomepageNav address="Add Address" />
      {displayProfile && <Profile />}
      <EditNameEmailModal />
      <EditPasswordModal />
      <Categories />
      <Footer />
    </div>
  );
}

export default Homepage;
