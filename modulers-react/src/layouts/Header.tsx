import { StyledLink } from "../components/common/Buttons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import logo from "/imgs/storeImgDummies/AAHG_LOGO.png";
interface IHeaderProps {
  sidebarOpen: boolean;
  handleOpenClick: () => void;
}

const Header = ({ sidebarOpen, handleOpenClick }: IHeaderProps) => {
  return (
    <BlackHeader>
      <SidebarHeader>
        <button onClick={handleOpenClick}>(열기/닫기)</button>
      </SidebarHeader>
      <HeaderCenter>
        <h1 style={{ display: "flex", alignItems: "center" }}>
          <img src={"/imgs/AAHG_LOGO.png"} alt="로고" width={"50px"} />
          AAHG
        </h1>
        <span>- Already At your Home Goods</span>
      </HeaderCenter>
      <HeaderRight>
        <StyledLink to={"/"} style={{ margin: 0, padding: 0 }}>
          <h6>Home</h6>
        </StyledLink>
      </HeaderRight>
    </BlackHeader>
  );
};

export default Header;

const BlackHeader = styled.header`
  height: 70px;
  width: auto;
  /* padding: 10px 20px; */
  background-color: #000000;
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: xx-large;
  font-weight: bolder;
`;

const SidebarHeader = styled.div`
  width: 200px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #030f2d;
`;

const HeaderRight = styled.div`
  width: 200px;
  height: 100%;
  background-color: #040c14;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const HeaderCenter = styled.div`
  width: 500px;
  height: 100%;
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: medium;
`;
