import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Dummy = ({}): JSX.Element => {
  return (
    <TungDiv>
      <h1>텅~</h1>
      <h2>뭔가비즈니스로직이들어갈곳임</h2>
    </TungDiv>
  );
};

const TungDiv = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

export default Dummy;
