import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

type PrinterType = "적층형" | "절삭형";
type Size = "소" | "중" | "대";
type Material = "PLA" | "ABS" | "PETG";
type Paint = "no" | "yes";

interface Option {
  printerType: PrinterType;
  size: Size;
  material: Material;
  paint: Paint;
}

const initialOption: Option = {
  printerType: "적층형",
  size: "소",
  material: "PLA",
  paint: "no",
};

const DUMMYPRICES = {
  printerType: {
    적층형: 10000,
    절삭형: 15000,
  },
  size: {
    소: 5000,
    중: 15000,
    대: 30000,
  },
  material: {
    PLA: 3000,
    ABS: 4000,
    PETG: 5000,
  },
  paint: {
    no: 0,
    yes: 5000,
  },
};

const ContentOptions = (): JSX.Element => {
  const [option, setOption] = useState<Option>(initialOption);
  const navigate = useNavigate();

  const handleOptionChange = (key: keyof Option, value: any) => {
    setOption({ ...option, [key]: value });
  };

  const onClickOrderBtn = () => {
    navigate("/order/1");
  };

  const prices = DUMMYPRICES;

  const calculateTotalPrice = () => {
    const { printerType, size, material, paint } = option;
    return (
      prices.printerType[printerType] +
      prices.size[size] +
      prices.material[material] +
      prices.paint[paint]
    );
  };

  return (
    <OptionsContainer>
      <OrderOption>
        <OptionSelector>
          <OptionLabel>프린터 종류</OptionLabel>
          {Object.keys(prices.printerType).map((type) => (
            <OptionButton
              key={type}
              isSelected={option.printerType === type}
              onClick={() => handleOptionChange("printerType", type)}
            >
              {type}
            </OptionButton>
          ))}
        </OptionSelector>

        <OptionSelector>
          <OptionLabel>크기</OptionLabel>
          {Object.keys(prices.size).map((size) => (
            <OptionButton
              key={size}
              isSelected={option.size === size}
              onClick={() => handleOptionChange("size", size)}
            >
              {size}
            </OptionButton>
          ))}
        </OptionSelector>

        <OptionSelector>
          <OptionLabel>소재</OptionLabel>
          {Object.keys(prices.material).map((material) => (
            <OptionButton
              key={material}
              isSelected={option.material === material}
              onClick={() => handleOptionChange("material", material)}
            >
              {material}
            </OptionButton>
          ))}
        </OptionSelector>

        <OptionSelector>
          <OptionLabel>도색 여부</OptionLabel>
          {Object.keys(prices.paint).map((paint) => (
            <OptionButton
              key={paint}
              isSelected={option.paint === paint}
              onClick={() => handleOptionChange("paint", paint)}
            >
              {paint === "no" ? "도색 안함" : "도색"}
            </OptionButton>
          ))}
        </OptionSelector>
      </OrderOption>
      <TotalPriceContainer>
        <TotalPriceLabel>총 가격:</TotalPriceLabel>
        <TotalPrice>{calculateTotalPrice()}원</TotalPrice>
        <OrderButton onClick={onClickOrderBtn}>주문하기</OrderButton>
      </TotalPriceContainer>
    </OptionsContainer>
  );
};

export default ContentOptions;

const OrderButton = styled.button`
  width: 150px;
  background-color: #1a4fff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 4px;

  margin-left: auto;
`;

const OptionsContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const OrderOption = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const OptionSelector = styled.div`
  display: flex;
  border: solid 1px;
  border-radius: 15px;
  border-color: lightgrey;
  padding: 20px 30px;
  align-items: center;
  margin-bottom: 1rem;
`;

const OptionLabel = styled.span`
  width: 150px;
  font-weight: bold;
  margin-right: 1rem;
`;

const OptionButton = styled.button<{ isSelected: boolean }>`
  background-color: ${(props) => (props.isSelected ? "#007bff" : "#ffffff")};
  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
  border: 1px solid #007bff;
  border-radius: 4px;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  cursor: pointer;
  width: 100px;

  &:hover {
    background-color: ${(props) => !props.isSelected && "#f0f0f0"};
  }
`;
const TotalPriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

const TotalPriceLabel = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
  margin-right: 1rem;
`;

const TotalPrice = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  color: #007bff;
`;
