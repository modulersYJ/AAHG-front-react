import React, { useRef, useState } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton, SubmitButton } from "../common/Buttons";
import { Link } from "react-router-dom";

const Match = () => {
  const matchList = [
    { name: "shop1", shopId: "1" },
    { name: "shop2", shopId: "2" },
    { name: "shop3", shopId: "3" },
  ];

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
        {matchList.map((shop) => {
          return (
            <Link
              to={`/store-detail/${shop?.shopId}`}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <StyledShopOutlet>
                <h1>{shop?.name}</h1>
              </StyledShopOutlet>
            </Link>
          );
        })}
      </div>
    </OutletDefault>
  );
};

export default Match;

const StyledShopOutlet = styled.div`
  width: 300px;
  height: 200px;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
  background-color: #868480;
`;
