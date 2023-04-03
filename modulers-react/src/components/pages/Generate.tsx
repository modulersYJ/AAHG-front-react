import React, { useRef } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton, SubmitButton } from "../common/Buttons";

const Generate = () => {
  const videoRef = useRef();
  return (
    <OutletDefault>
      <h1 style={{ textAlign: "center" }}>OBJ 만들기</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <StyledVideoOutlet>
          <video ref={videoRef} src="" title="비디오임"></video>
        </StyledVideoOutlet>
        <StyledButtonsOutlet>
          <label
            htmlFor="file"
            style={{
              margin: "10px",
              width: "100px",
              height: "50px",
              borderRadius: "20px",
              backgroundColor: "blue",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              type="file"
              id="file"
              accept="image/*"
              style={{ display: "none" }}
            />
            업로드
          </label>
          <RoundButton>매칭</RoundButton>
        </StyledButtonsOutlet>
      </div>
    </OutletDefault>
  );
};

export default Generate;

const StyledVideoOutlet = styled.div`
  width: 600px;
  height: 400px;
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
