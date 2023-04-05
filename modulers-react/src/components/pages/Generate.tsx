import React, { useRef, useState } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton, SubmitButton } from "../common/Buttons";
import { Link } from "react-router-dom";

const Match = () => {
  const videoRef = useRef(); // 나중에 혹시 video를 리액트풀하게 조절해야 할 수 있기 때문임

  // 파일을 state로 관리하자
  const [fileState, setFileState] = useState(null);

  // state에 파일 넣기
  const handleFileInput = (e) => {
    console.log(e);
    setFileState(e.target.files[0]);
  };

  // 보내는중 state
  const [isWaiting, setIsWaiting] = useState(false);

  // 업로드 로직
  const sendFile = async () => {
    setIsWaiting(true); // response 안받으면 아직 waiting이라고~
    // TODO axios 요청 이라고 치고 3초간 setTimeout
    await setTimeout(() => {
      console.log("3초가 지났소");
      setIsWaiting(false);
      console.log("isWaiting = false");
    }, 3000);
    console.log(fileState);
    console.log("isWaiting", isWaiting);
    // TODO 어떤 조건(response 받음 등)이 충족되면 isWaiting 다시돌려놓기
    // if (3 + 3 === 6) {
    //   setIsWaiting(false);
    // }
  };

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
              onChange={handleFileInput}
            />
            업로드
          </label>

          {isWaiting ? (
            <h3>스피너</h3>
          ) : (
            <RoundButton onClick={sendFile}>만들기!</RoundButton>
          )}

          <Link to={"/match"}>
            <RoundButton>매칭</RoundButton>
          </Link>
        </StyledButtonsOutlet>
      </div>
    </OutletDefault>
  );
};

export default Match;

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
