import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import Footer from "./Footer";

const Root = () => {
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(true);
  const handleOpenClick = () => {
    setSidebarOpen((prev) => !prev);
  };
  return (
    <RootPage>
      <Header sidebarOpen={sidebarOpen} handleOpenClick={handleOpenClick} />
      <div style={{ display: "flex", flexDirection: "row" }}>
        {sidebarOpen ? <Sidebar /> : <></>}
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
