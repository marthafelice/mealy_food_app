import React from "react";
import HomepageNav from "../components/HomepageNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function Layout() {
  return (
    <>
      <HomepageNav />
      <>
        <Outlet />
      </>
      <Footer />
    </>
  );
}

export default Layout;
