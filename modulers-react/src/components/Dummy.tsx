import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { OutletDefault } from "./common/Outlet";

const Dummy = ({}): JSX.Element => {
  return (
    <OutletDefault>
      <TungDiv>
        <h1>텅~</h1>
        <h2>뭔가비즈니스로직이들어갈곳임</h2>
      </TungDiv>
    </OutletDefault>
  );
};

const TungDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: orange;
`;

export default Dummy;
