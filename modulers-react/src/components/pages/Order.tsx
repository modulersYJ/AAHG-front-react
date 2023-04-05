import React, { useRef, useState } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton, SubmitButton } from "../common/Buttons";
import { Link } from "react-router-dom";
import { GoodInput } from "../common/Inputs";

const Order = () => {
  // TODO
  // ! 있어야 할 것 :
  // ! 주문상품정보 -
  // ! 상품명, 가게이름, 가격
  // !
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
          <OrderSectionTitle>약관 전체동의</OrderSectionTitle>
        </OrderSection>

        <div>
          <PayButton>결제하기</PayButton>
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
