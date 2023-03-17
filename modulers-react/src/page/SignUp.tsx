import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SignUp = ({}): JSX.Element => {
  const [userData, setUserData] = useState({});

  const handleChange = (e): void => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  // useEffect(() => console.log(userData), [userData]);///

  return (
    <>
      <h1>회원가입 페이지 입니다.</h1>
      {/* <RoundDiv> */}
      <Form method="POST" action="www.youtube.com">
        <InputDiv>
          <label htmlFor="name">이름</label>
          <InputBox onChange={handleChange} type="text" name="name" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="id"> ID</label>
          <InputBox onChange={handleChange} type="text" name="id" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="password"> 비밀번호</label>
          <InputBox onChange={handleChange} type="password" name="password" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="address"> 주소</label>
          <InputBox onChange={handleChange} type="text" name="address" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="tel">전화번호</label>
          <InputBox
            onChange={handleChange}
            type="tel"
            name="tel"
            pattern="\d{3}-\d{4}-\d{4}"
            required
          />
        </InputDiv>
        <div>
          <SubmitButton type={"submit"} value="제출" />
          <SubmitButton type={"reset"} value="초기화" />
        </div>
      </Form>
    </>
  );
};

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 5vw;
`;

const InputBox = styled.input`
  width: 300px;
  height: 30px;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const SubmitButton = styled.input`
  background-color: red;
  color: white;
  width: 100px;
  height: 50px;
  font-size: large;
  border-radius: 20px;
  border: 0px;
  margin: 10px;
  padding: 10px;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;

export default SignUp;
