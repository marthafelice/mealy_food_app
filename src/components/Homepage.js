import "../styles/homepage.css";
import "../styles/homepagenav.css";
import Profile from "./Profile";
import { useSelector } from "react-redux";

import React from "react";
import HomepageNav from "./HomepageNav";
import EditNameEmailModal from "./EditNameEmail";
import EditPasswordModal from "./EditPassword";
import Categories from "./Categories";
function Homepage() {
  const { displayProfile } = useSelector((state) => state.profile);
  return (
    <div className="homepage-container">
      <HomepageNav />
      {displayProfile && <Profile />}
      <EditNameEmailModal />
      <EditPasswordModal />
      <Categories />
      <p>
        HOMEPAGE CONTENT Հայերեն Shqip ‫العربية Български Català 中文简体
        Hrvatski Česky Dansk Nederlands English Eesti Filipino Suomi Français
        ქართული Deutsch Ελληνικά ‫עברית हिन्दी Magyar Indonesia Italiano as
        saying through shrinking from toil and pain. These cases are perfectly
        simple and easy to distinguish. In a free hour, when our power of choice
        is untrammelled and when nothing prevents our being able to do what we
        like best, every pleasure is to be welcomed and every pain avoided. But
        in certain circumstances and owing to the claims of duty or the
        obligations of business it will frequently occur that pleasures have to
        be repudiated and annoyances accepted. The wise man therefore always
        holds in these matters to this principle of selection: he rejects
        pleasures to secure other greater pleasures, or else he endures pains to
        avoid worse pains." help@lipsum.com Privacy Policy
      </p>
    </div>
  );
}

export default Homepage;
