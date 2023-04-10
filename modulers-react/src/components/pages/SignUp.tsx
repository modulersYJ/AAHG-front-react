import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { SubmitButton } from "../common/Buttons";

import { useRegisterUser } from "../../reactQuery/hooks/useMutation";
import { IRegisterData } from "../../reactQuery/api/user";

// < "IUserData" => "IRegisterFormData" >
// => reactQuery/user.ts에 정의한 IRegisterData를 상속받도록 변경
interface IRegisterFormData extends IRegisterData {
  passwordCheck: string;
}

//로직이 너무 길어져서, 리팩토링 필수!
const SignUp = ({}): JSX.Element => {
  const navigate = useNavigate();
  const mutation = useRegisterUser(); // react-query관련

  const handleRegisterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (userData.password !== userData.passwordCheck) {
      setError({ ...error, passwordCheck: true });
      setErrorMsg({
        ...errorMsg,
        passwordCheck: "비밀번호가 일치하지 않습니다.",
      });
      return;
    }
    // 전번 형식 장고에 맞게 가공한겁니다~
    const formattedPhoneNum = `+82${userData.phone_num
      .replace(/-/g, "")
      .substring(1)}`;

    try {
      // userData -> registerData(req로 보낼 가공된 데이터)
      const registerData: IRegisterFormData = {
        ...userData,
        phone_num: formattedPhoneNum, // 가공된 전번
      };

      const response = await mutation.mutateAsync(registerData);

      if (response.success) {
        alert(response.message);
        navigate("/login"); // 리다이렉트
      }
    } catch (error) {
      console.error("회원가입 중 오류 발생 : ", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };
  const [userData, setUserData] = useState<IRegisterFormData>({
    username: "",
    password: "",
    passwordCheck: "",
    nickname: "",
    email: "",
    gender: "N",
    birth_date: "",
    phone_num: "",
    svc_use_pcy_agmt: "N",
    ps_info_proc_agmt: "N",
    loc_base_svc_agmt: "N",
    mkt_info_recv_agmt: "N",
    push_agmt: "N",
    interests: "",
  });

  // 에러 객체
  const [error, setError] = useState<IError>({
    // name: false,
    username: false,
    password: false,
    passwordCheck: false,
    address: false,
    phone_num: false,
  });
  interface IError {
    // name: boolean;
    username: boolean;
    password: boolean;
    passwordCheck: boolean;
    address: boolean;
    phone_num: boolean;
  }

  // 에러메시지
  const [errorMsg, setErrorMsg] = useState<IErrorMsg>({
    // name: "",
    username: "",
    password: "",
    passwordCheck: "",
    address: "",
    phone_num: "",
  });
  interface IErrorMsg {
    // name: string;
    username: string;
    password: string;
    passwordCheck: string;
    address: string;
    phone_num: string;
  }

  /*
  handleChange 수정사항이요:
    1. handleChange 함수에서 setState를 호출할 때 이전 상태를 사용
    2. Select 요소(enum)도 처리할 수 있도록 타입 수정
  */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setUserData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <>
      <h1>회원가입 페이지 입니다.</h1>
      <Link to={"/"}>돌아가기 (임시)</Link>
      <Form onSubmit={handleRegisterSubmit}>
        <InputDiv>
          <label htmlFor="username">ID</label>
          <InputBox onChange={handleChange} type="text" name="username" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="password">비밀번호</label>
          <InputBox onChange={handleChange} type="password" name="password" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="passwordCheck">비밀번호 확인</label>
          <InputBox
            onChange={handleChange}
            type="password"
            name="passwordCheck"
          />
        </InputDiv>
        <InputDiv>
          <label htmlFor="nickname">닉네임</label>
          <InputBox onChange={handleChange} type="text" name="nickname" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="email">이메일</label>
          <InputBox onChange={handleChange} type="email" name="email" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="gender">성별</label>
          <select onChange={handleChange} name="gender">
            <option value="N">무응답</option>
            <option value="M">남자</option>
            <option value="F">여자</option>
          </select>
        </InputDiv>
        <InputDiv>
          <label htmlFor="birth_date">생년월일</label>
          <InputBox onChange={handleChange} type="date" name="birth_date" />
        </InputDiv>
        <InputDiv>
          <label htmlFor="phone_num">전화번호</label>
          <InputBox
            onChange={handleChange}
            type="tel"
            name="phone_num"
            //장고에선 string: "+821012345678"형식을 지원합니다.
            // handleRegisterSubmit 함수에 형식을 가공해 보내도록 할게요!
            pattern="\d{3}-\d{4}-\d{4}"
            required
          />
        </InputDiv>
        <div>
          <SubmitButton type={"submit"} value="제출" />
          <SubmitButton type={"reset"} value="초기화" />
          <Link to={"/login"}>
            <SubmitButton type="button" value="로그인" />
          </Link>
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

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: space-between;
`;

export default SignUp;
