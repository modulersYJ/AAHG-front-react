import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Sidebar from "./Sidebar";

const BusinessLayout = () => {
  return (
    <>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
export default BusinessLayout;
