import React, { useRef, useState } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton, SubmitButton } from "../common/Buttons";
import { Link } from "react-router-dom";

const Match = () => {
  // }

  return (
    <OutletDefault>
      <h1 style={{ textAlign: "center" }}>매칭</h1>
      <div
        style={{
          // display: "flex",
          columns: "3",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
        <StyledShopOutlet>어떤샵1</StyledShopOutlet>
      </div>
    </OutletDefault>
  );
};

export default Match;

const StyledShopOutlet = styled.div`
  width: 300px;
  height: 200px;
  margin: 10px;
  background-color: orange;
`;

const StyledButtonsOutlet = styled.div`
  width: 520px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;
