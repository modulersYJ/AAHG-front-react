import { StyledLink } from "../components/common/Buttons";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  let someId = Math.random() * 100;
  someId = Math.floor(someId);
  return (
    <BlackSidebar>
      <div>이것이 사이드바</div>
      <nav>
        <StyledLink to={"/generate"}>
          <MenuDiv>메뉴1</MenuDiv>
        </StyledLink>
        <StyledLink to={"/shop"}>
          <MenuDiv>메뉴2</MenuDiv>
        </StyledLink>
        <StyledLink to={"/my-page"}>
          <MenuDiv>메뉴3</MenuDiv>
        </StyledLink>
        <StyledLink to={`/order/${someId}`}>
          <MenuDiv>메뉴4</MenuDiv>
        </StyledLink>
      </nav>
    </BlackSidebar>
  );
};

export default Sidebar;

const BlackSidebar = styled.aside`
  height: 100vh;
  width: 200px;
  background-color: #000000;
  color: white;
  display: flex;
  flex-direction: column;
  position: relative;
  /* justify-content: center; */
  /* align-items: center; */
  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuDiv = styled.div`
  /* height: 10px; */
  padding: 20px 0px;
  background-color: #40a68e;
  border: 1px solid white;
  &:hover {
    background-color: white;
  }
`;
