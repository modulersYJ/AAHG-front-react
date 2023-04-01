import { StyledLink } from "../components/common/Buttons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

interface IHeaderProps {
  sidebarOpen: boolean;
  handleOpenClick: () => void;
}

const Header = ({ sidebarOpen, handleOpenClick }: IHeaderProps) => {
  return (
    <GreenHeader>
      <SidebarHeader>
        <button onClick={handleOpenClick}>햄버거</button>
      </SidebarHeader>
      <h2>이것이 헤더</h2>
      <HeaderRight>
        <StyledLink to={"/"} style={{ margin: 0, padding: 0 }}>
          <h6>홈으로</h6>
        </StyledLink>
      </HeaderRight>
    </GreenHeader>
  );
};

export default Header;

const GreenHeader = styled.header`
  height: 70px;
  width: auto;
  /* padding: 10px 20px; */
  background-color: #033240;
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
  background-color: #153652;
  display: flex;
  align-items: center;
  justify-content: center;
`;
