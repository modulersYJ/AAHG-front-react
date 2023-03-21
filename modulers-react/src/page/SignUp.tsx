import { validateRegex } from "../utils/regex";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

const SignUp = ({}): JSX.Element => {
  // 보낼 데이터 객체 state
  const [userData, setUserData] = useState<userDataType>({
    name: "",
    id: "",
    password: "",
    rePassword: "",
    address: "",
    tel: "",
  });
  // type
  interface userDataType {
    name: string;
    id: string;
    password: string;
    rePassword: string;
    address: string;
    tel: string;
  }

  // 에러 객체 state
  const [error, setError] = useState<errorType>({
    name: false,
    id: false,
    password: false,
    rePassword: false,
    address: false,
    tel: false,
  });
  // type
  interface errorType {
    name: boolean;
    id: boolean;
    password: boolean;
    rePassword: boolean;
    address: boolean;
    tel: boolean;
  }

  // 에러 메세지 state
  const [errorMessage, setErrorMessage] = useState<errorMessageType>({
    name: "",
    id: "",
    password: "",
    rePassword: "",
    address: "",
    tel: "",
  });
  // type
  interface errorMessageType {
    name: string;
    id: string;
    password: string;
    rePassword: string;
    address: string;
    tel: string;
  }

  // onChange 안에 들어갈 함수
  const handleChange = (e): void => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
    validateInputs(e);
  };

  // validation 함수
  const validateInputs = (e): void => {
    switch (e.target.name) {
      case "password":
        validatePassword(e.target.value);
        break;
      case "rePassword":
        validateRePassword(e.target.value);
        break;

      default:
        console.log("default");
        break;
    }
  };

  const validatePassword = (value: string): void => {
    if (value.length < 10) {
      setError({ ...error, password: true });
      setErrorMessage({
        ...errorMessage,
        password: "10글자 이상으로 입력해주세요",
      });
    } else {
      setError({ ...error, password: false });
      setErrorMessage({
        ...errorMessage,
        password: "",
      });
      // ! 정규식 다 있는지 확인
      if (validateRegex(value)) {
        setError({ ...error, password: true });
        setErrorMessage({
          ...errorMessage,
          password: "대소문자, 숫자, 특수문자를 확인하세요",
        });
      } else {
        setError({ ...error, password: false });
        setErrorMessage({
          ...errorMessage,
          password: "",
        });
      }
    }
  };

  const validateRePassword = (value: string): void => {
    if (value != userData?.password) {
      setError({ ...error, rePassword: true });
      setErrorMessage({ ...errorMessage, rePassword: "비밀번호 확인해주세요" });
    }
  };

  // useEffect로 입력마다 출력
  useEffect(() => {
    console.log("userData : ", userData);
  }, [userData]);

  return (
    <>
      <h1>회원가입 페이지 입니다.</h1>
      <Wrapper>
        <Form method="POST" action="www.youtube.com">
          <InputDiv>
            <InputLabel htmlFor="name">이름</InputLabel>
            <InputSection>
              <InputBox onChange={handleChange} type="text" name="name" />
              {error?.name ? (
                <ErrorMessage>{errorMessage?.name}</ErrorMessage>
              ) : null}
            </InputSection>
          </InputDiv>
          <InputDiv>
            <InputLabel htmlFor="id"> ID</InputLabel>
            <InputSection>
              <InputBox onChange={handleChange} type="text" name="id" />
              {error?.id ? (
                <ErrorMessage>{errorMessage?.id}</ErrorMessage>
              ) : null}
            </InputSection>
          </InputDiv>
          <InputDiv>
            <InputLabel htmlFor="password"> 비밀번호</InputLabel>
            <InputSection>
              <InputBox
                onChange={handleChange}
                type="password"
                name="password"
              />
              {error?.password ? (
                <ErrorMessage>{errorMessage?.password}</ErrorMessage>
              ) : (
                <span>
                  대소문자, 숫자, 특수문자를 모두 사용하여 10글자 이상으로
                  작성해주세요
                </span>
              )}
            </InputSection>
          </InputDiv>
          <InputDiv>
            <InputLabel htmlFor="rePassword"> 비밀번호 재입력</InputLabel>
            <InputSection>
              <InputBox
                onChange={handleChange}
                type="rePassword"
                name="rePassword"
              />
              {error?.rePassword ? (
                <ErrorMessage>{errorMessage?.rePassword}</ErrorMessage>
              ) : null}
            </InputSection>
          </InputDiv>
          <InputDiv>
            <InputLabel htmlFor="address"> 주소</InputLabel>
            <InputSection>
              <InputBox onChange={handleChange} type="text" name="address" />
              {error?.address ? (
                <ErrorMessage>{errorMessage?.address}</ErrorMessage>
              ) : null}
            </InputSection>
          </InputDiv>
          <InputDiv>
            <InputLabel htmlFor="tel">전화번호</InputLabel>
            <InputBox
              onChange={handleChange}
              type="tel"
              name="tel"
              pattern="\d{3}-\d{4}-\d{4}"
              required
            />
            {error?.tel ? (
              <ErrorMessage>{errorMessage?.tel}</ErrorMessage>
            ) : null}
          </InputDiv>
          <div>
            <SubmitButton type={"submit"} value="제출" />
            <SubmitButton type={"reset"} value="초기화" />
          </div>
        </Form>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  justify-content: center;
  /* align-items: center; */
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 50vw;
  height: 70%;
  padding: 20px;
  background-color: rgba(233, 131, 131, 0.1);
  border-radius: 5vw;
`;

const InputLabel = styled.label`
  width: 100px;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputBox = styled.input`
  width: 300px;
  height: 30px;
  border: 0px solid;
  box-shadow: 1px 1px 10px dimgrey;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
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
  /* width: 90%; */
  justify-content: space-between;
  margin: 20px;
`;

export default SignUp;
