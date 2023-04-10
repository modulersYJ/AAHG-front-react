import React from "react";
import styled from "styled-components";

import { OutletDefault } from "../common/Outlet";

import MySwiper from "./StoreDetailSubs/Heads/MySwiper";
import images from "./StoreDetailSubs/Heads/images";
import StoreBasicInfo from "./StoreDetailSubs/Heads/StoreBasicInfo";
import StoreSecContent from "./StoreDetailSubs/Contents";

const dummyData = {
  name: "미래 공방",
  rating: 4.5,
  reviewCount: 102,
  ownerComment: "상상력을 최고의 작품으로 만들어드려요!",
  address: "서울시 강남구 역삼동",
};
export default function StoreDetail(): JSX.Element {
  return (
    <OutletDefault>
      <Container>
        <HeaderSection>
          <MySwiper images={images} />
          <StoreBasicInfo store={dummyData} />
        </HeaderSection>
        <StoreSecContent />
      </Container>
    </OutletDefault>
  );
}

const Container = styled.div`
  max-width: 1000px;
  width: 80vw;
  /* min-width: 800px; */
  margin: 120px auto 0px auto;

  @media (max-width: 800px) {
    margin: 10px;
  }
`;

const HeaderSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 50px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;
