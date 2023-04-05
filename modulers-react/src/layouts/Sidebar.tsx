import {
  RoundButton,
  StyledLink,
  SubmitButton,
} from "../components/common/Buttons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = () => {
  // ^ 걍 order/id 할 때 쓸 id값 랜덤으로 만든 것임..
  let someId = Math.random() * 100;
  someId = Math.floor(someId);

  // state
  const [selectedMenus, setSelectedMenus] = useState<ISelectedMenus>({
    generate: false,
    shop: false,
    myPage: false,
    order: false,
  });
  interface ISelectedMenus {
    generate: boolean;
    shop: boolean;
    myPage: boolean;
    order: boolean;
  }

  const handleParentClick = (e) => {
    const isOpen = selectedMenus[e.target.id];
    setSelectedMenus({ ...selectedMenus, [e.target.id]: !isOpen });
  };

  return (
    <BlackSidebar>
      <div>이것이 사이드바</div>
      <nav>
        <MenuDiv
          onClick={handleParentClick}
          name="generate"
          id="generate"
          level={1}
        >
          만들기
        </MenuDiv>
        {selectedMenus.generate === true ? (
          <ChildMenuList>
            <StyledLink to={`/generate`}>
              <div>만들기</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴2</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴3</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴4</div>
            </StyledLink>
          </ChildMenuList>
        ) : (
          <></>
        )}
        <MenuDiv onClick={handleParentClick} name="shop" id="shop" level={1}>
          업체 보기
        </MenuDiv>
        {selectedMenus.shop === true ? (
          <ChildMenuList>
            <StyledLink to={`/match`}>
              <div>매칭</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴2</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴3</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴4</div>
            </StyledLink>
          </ChildMenuList>
        ) : (
          <></>
        )}
        <MenuDiv
          onClick={handleParentClick}
          name="myPage"
          id="myPage"
          level={1}
        >
          메뉴3
        </MenuDiv>
        {selectedMenus.myPage === true ? (
          <ChildMenuList>
            <StyledLink to={`/my-page`}>
              <div>자식메뉴1</div>
            </StyledLink>
            <StyledLink to={`/my-page`}>
              <div>자식메뉴2</div>
            </StyledLink>
            <StyledLink to={`/my-page`}>
              <div>자식메뉴3</div>
            </StyledLink>
            <StyledLink to={`/my-page`}>
              <div>자식메뉴4</div>
            </StyledLink>
          </ChildMenuList>
        ) : (
          <></>
        )}
        <MenuDiv onClick={handleParentClick} name="order" id="order" level={1}>
          메뉴4
        </MenuDiv>
        {selectedMenus.order === true ? (
          <ChildMenuList>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴1</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴2</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴3</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴4</div>
            </StyledLink>
          </ChildMenuList>
        ) : (
          <></>
        )}
      </nav>
      <RoundButton>
        {/* <SubmitButton>로그아웃</SubmitButton> */}
        <StyledLink to={"login"}>로그아웃</StyledLink>
      </RoundButton>
    </BlackSidebar>
  );
};

export default Sidebar;

const BlackSidebar = styled.aside`
  min-height: 100vh;
  height: auto;
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

const ChildMenuList = styled.div`
  /* &:hover {
    background-color: white;
  } */
  div {
    color: white;
  }
`;
