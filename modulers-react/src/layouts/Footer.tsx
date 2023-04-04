import React from "react";
import styled from "styled-components";

const Footer = () => {
  return <GreyFooter>이것이 푸터</GreyFooter>;
};

export default Footer;

const GreyFooter = styled.footer`
  height: 70px;
  width: auto;
  background-color: #7c8081;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: xx-large;
  font-weight: bolder;
`;
