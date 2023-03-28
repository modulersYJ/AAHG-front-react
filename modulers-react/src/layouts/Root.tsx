import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Footer from "./Footer";

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
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export default Root;
