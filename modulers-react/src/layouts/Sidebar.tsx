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
      <nav>
        <MenuDiv onClick={handleParentClick} id="generate">
          만들기
        </MenuDiv>
        {selectedMenus.generate === true ? (
          <ChildMenuList>
            <StyledLink to={`/generate`}>
              <ChildMenu>만들기</ChildMenu>
            </StyledLink>
            {/* <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴2</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴3</div>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <div>자식메뉴4</div>
            </StyledLink> */}
          </ChildMenuList>
        ) : (
          <></>
        )}
        <MenuDiv onClick={handleParentClick} id="shop">
          업체 보기
        </MenuDiv>
        {selectedMenus.shop === true ? (
          <ChildMenuList>
            <StyledLink to={`/match`}>
              <ChildMenu>매칭</ChildMenu>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <ChildMenu>주문</ChildMenu>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <ChildMenu>주문2</ChildMenu>
            </StyledLink>
            <StyledLink to={`/order/${someId}`}>
              <ChildMenu>주문3</ChildMenu>
            </StyledLink>
          </ChildMenuList>
        ) : (
          <></>
        )}
        {/*<MenuDiv onClick={handleParentClick} id="myPage">
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
        <MenuDiv onClick={handleParentClick} id="order">
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
        )} */}
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
  align-items: center;
  position: relative;
  nav {
    width: 100%;
  }
  /* justify-content: center; */
  /* align-items: center; */
  @media (max-width: 800px) {
    display: none;
  }
`;

const MenuDiv = styled.div`
  /* height: 10px; */
  padding: 10px;
  background-color: #12372e;
  border: 1px solid white;
  &:hover {
    background-color: #ee7373;
  }
`;

const ChildMenuList = styled.div``;

const ChildMenu = styled.div`
  &:not(:hover) {
    /* &:hover 속성 */
    /* 예를 들어, 배경색을 변경하고 싶다면 다음과 같이 작성할 수 있습니다: */
    background-color: #3b2828;
  }

  /* &:hover 상태에 대한 스타일을 적용 */
  &:hover {
    background-color: #f2f2f2;
  }

  color: white;
  border: 1px solid black;
  padding: 5px 10px;
`;
