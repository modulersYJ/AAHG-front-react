import React, { useEffect, useRef, useState } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton, SubmitButton } from "../common/Buttons";
import { Link } from "react-router-dom";
import { GoodInput } from "../common/Inputs";

const Order = () => {
  // TODO 있어야 할 것 :
  // ! 주문상품정보 -
  // ! 상품명, 가게이름, 가격
  // ! 로그인 한 경우) 사용자 정보
  // ! 쿠폰 정보

  // TODO 구현 해야할것 :
  // ! react-hook-form으로 이름, 연락처, 주소, 이메일 validation

  // ^ 약관 동의 여부 state
  const [agreeCheck, setAgreeCheck] = useState<IAgreeCheck>({
    agreeOne: false,
    agreeTwo: false,
  });
  interface IAgreeCheck {
    agreeOne: boolean;
    agreeTwo: boolean;
  }

  // ^ 약관 동의 체크 이벤트핸들러
  const handleAgreeCheck = (e) => {
    setAgreeCheck((agreeCheck) => ({
      ...agreeCheck,
      [e.target.name]: e.target.checked,
    }));
  };

  // ^ 전체동의
  const handleAgreeAllCheck = (e) => {
    setAgreeCheck({
      agreeOne: e.target.checked,
      agreeTwo: e.target.checked,
    });
  };

  // ^ 결제하기 버튼 : validation 이후 넘어가야 함
  const handleConfirm = (e) => {
    // 약관 동의 둘 중 하나라도 false면
    if (!agreeCheck.agreeOne || !agreeCheck.agreeTwo) {
      alert("약관에 동의해 주세요");
      return;
    }
    console.log("약관 동의 확인");
  };

  useEffect(() => {
    console.log("AC : ", agreeCheck), [agreeCheck];
  });

  return (
    <OutletDefault>
      <h1 style={{ textAlign: "center" }}>주문하기</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <OrderSection className="product-info">
          <OrderSectionTitle
            style={{ backgroundColor: "white", margin: "10px" }}
          >
            주문 상품 정보
          </OrderSectionTitle>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src="" alt="제품 사진" style={{ width: "200px" }} />
            <div
              style={{
                backgroundColor: "blueviolet",
                color: "white",
                fontWeight: "bolder",
                width: "500px",
                height: "130px",
                margin: "10px",
              }}
            >
              <h3>상품명</h3>
              <span>어떤상품인지설명 가게이름같은거</span>
              <h4>가격</h4>
            </div>
          </div>
        </OrderSection>
        {/* 주문상품정보 끝 */}

        <OrderSection className="person-info">
          <OrderSectionTitle>주문자 정보</OrderSectionTitle>
          <GoodInput placeholder="이름" />
          <GoodInput placeholder="연락처" />
          <GoodInput placeholder="주소" />
          <GoodInput placeholder="이메일" />
        </OrderSection>

        <OrderSection className="person-info">
          <OrderSectionTitle>할인 쿠폰</OrderSectionTitle>
        </OrderSection>

        <OrderSection className="order-summary">
          <OrderSectionTitle>주문 요약</OrderSectionTitle>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>상품가격</span>
            <span>100000원</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>배송비</span>
            <span>100원</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>할인금액</span>
            <span>-10000원</span>
          </div>
          <br />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <span>결제 금액</span>
            <span>90100원</span>
          </div>
        </OrderSection>

        <OrderSection className="pay-method">
          <OrderSectionTitle>결제 수단</OrderSectionTitle>
          카드?
        </OrderSection>

        <OrderSection className="agree">
          <OrderSectionTitle>약관 동의</OrderSectionTitle>
          <label htmlFor="agreeAll">전체동의</label>
          <CheckBox
            type="checkbox"
            name={"agreeAll"}
            checked={agreeCheck.agreeOne && agreeCheck.agreeTwo}
            onChange={handleAgreeAllCheck}
          />
          <label htmlFor="agreeOne">약관1</label>
          <CheckBox
            type="checkbox"
            name={"agreeOne"}
            checked={agreeCheck.agreeOne}
            onChange={handleAgreeCheck}
          />
          <label htmlFor="agreeTwo">약관2</label>
          <CheckBox
            type="checkbox"
            name={"agreeTwo"}
            checked={agreeCheck.agreeTwo}
            onChange={handleAgreeCheck}
          />
        </OrderSection>

        <div>
          <PayButton onClick={handleConfirm}>결제하기</PayButton>
        </div>
      </div>
    </OutletDefault>
  );
};

export default Order;

const OrderSection = styled.section`
  background-color: #d0d0cb;
  width: 700px;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  font-weight: bolder;
  margin: 10px;
  padding: 10px;
`;

const OrderSectionTitle = styled.h2`
  background-color: white;
  /* margin: 10px; */
`;

const PayButton = styled.button`
  width: 700px;
  height: 50px;
  margin: 10px;
  border: none;
  border-radius: 10px;
  background-color: blue;
  color: white;
  font-weight: bolder;
  font-size: xx-large;
  transition: transform 0.5s ease;

  &:hover {
    background-color: #f1ff59;
    color: black;
    transform: scale(1.05);
    cursor: pointer;
  }
`;

const CheckBox = styled.input`
  width: 30px;
  height: 30px;
`;
