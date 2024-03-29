import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Home = ({}): JSX.Element => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <div>홈 입니다.</div>
      <Link to={"/sign-up"}>
        <Button>회원가입</Button>
      </Link>
    </div>
  );
};

const Button = styled.button`
  background-color: red;
  width: 100px;
  height: 50px;
  font-size: large;
  border-radius: 20px;
  border: 0px;
  color: white;
  margin: 10px;
  padding: 10px;
`;

export default Home;
