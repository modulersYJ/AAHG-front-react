import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SubmitButton } from "../common/Buttons";

const Login = () => {
  // const { register, handleSubmit } = useForm();

  const {
    register, //todo라는 이름의 onchage, onblur, onclick등 가진 객체 생성
    watch, //register를 통해 받은 모든 값을 확인 가능.
    handleSubmit, //form onsubimt에 들어가는 함수. onValid 와 onInvalid를 인자로 받음.
    setValue, //setState와 같은 함수
    formState: { errors }, //register들의 에러메시지를 자동출력한다.
    setError, //errors에 별도의 에러메시지를 추가할 수 있게 해준다. 이렇게 안쓰고 register에 직접 객체 추가해도 됨.
  } = useForm({
    defaultValues: {
      //default값들을 여기서 지정 가능.
      email: "@naver.com",
      password: "",
    },
  });

  const onValid = (data, e) => {
    console.log("data", data);
    console.log("e.type : ", e.type);
    console.log("e : ", e);
    // TODO 여기 axios 넣어야 함
  };

  const onInvalid = (errors, e) => {
    console.log(errors, "e : ", e);
  };

  const watchAllValues = watch(); // 이렇게 인자 안넣으면 모든 Field의 Value를 다 들고 있게 된다. (ref로 작동함)

  useEffect(() => console.log("WAV : ", watchAllValues), [watchAllValues]); // dependency array에 watch 리턴값이 들어있기 때문에, 이 값이 바뀔 때마다 console.log가 작동함.
  // watchAllValues는 ref. ref는 setState와 리렌더링이 없는 state라고 생각하면 된다.
  // register 메서드는 ref와 onChange를 해당 컴포넌트에 집어넣는다.
  // 그래서 watch()는 ref값을 계속 바꿀 때도 리렌더링이 일어나지 않게 되어 리액트 앱이 가벼워짐.
  // 거기에 onChange값이 있기 때문에 당연히 입력을 받을 때 마다 출력하기도 가능함.
  // TODO 만약 바뀔 때마다 화면에 출력하고 싶으면 state를 사용하는 것이 맞다.

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>로그인 페이지임</h1>
      <GoodForm onSubmit={handleSubmit(onValid, onInvalid)}>
        <label htmlFor="email">Email</label>
        <GoodInput
          // type="email"
          {...register("email", {
            required: "필수 입력값이에용",
            pattern: {
              value: /[A-Za-z0-9]@[A-Za-z].[A-Za-z]/,
              message: "패턴 맞춰줘잉",
            },
            // validate: (value, formValues) => value === "1",
          })}
        />
        {errors?.email ? (
          <>
            <span style={{ color: "red" }}>
              {`message : ${errors?.email.message} type : ${errors?.email.type}`}
            </span>
          </>
        ) : (
          <p> </p>
        )}
        <label htmlFor="비밀번호">비밀번호</label>
        <GoodInput
          type="password"
          {...register("password", {
            required: "필수 입력값이에용",
          })}
        />
        {errors?.password ? (
          <>
            <span style={{ color: "red" }}>
              {`message : ${errors?.password.message} type : ${errors?.password.type}`}
            </span>
          </>
        ) : (
          <p> </p>
        )}
        <div>
          <SubmitButton type="submit" value="로그인" />
          <SubmitButton type="submit" value="찾기" />
          <Link to="/sign-up">
            <SubmitButton type="submit" value="회원가입" />
          </Link>
        </div>
      </GoodForm>
    </div>
  );
};

const GoodForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
`;

const GoodInput = styled.input`
  height: 30px;
  border-radius: 10px;
  margin: 10px 0px;
`;

export default Login;
