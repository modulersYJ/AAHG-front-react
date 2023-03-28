import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import styled from "styled-components";
import Footer from "./layouts/Footer";

const Root = () => {
  return (
    <RootPage>
      <Header />
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Sidebar />
        <Outlet />
      </div>
      <Footer />
    </RootPage>
  );
};

const RootPage = styled.div`
  /* height: 100vh; */
  /* display: flex; */
`;

export default Root;
