import React from "react";
import styled from "styled-components";

const Header = () => {
  return <GreenHeader>이것이 헤더</GreenHeader>;
};

export default Header;

const GreenHeader = styled.header`
  height: 70px;
  width: auto;
  background-color: #033240;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  font-weight: bolder;
`;
