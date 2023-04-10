// StoreBasicInfo.tsx
import React from "react";
import styled from "styled-components";

type StoreData = {
  name: string;
  rating: number;
  reviewCount: number;
  ownerComment: string;
  address: string;
};

interface StoreBasicInfoProps {
  store: StoreData;
}

const StoreBasicInfo: React.FC<StoreBasicInfoProps> = ({ store }) => {
  return (
    <InfoContainer>
      <h2>{store.name}</h2>
      <RatingInfo>
        <RatingBadge>{store.rating}</RatingBadge>
        <ReviewCount>리뷰 {store.reviewCount} 개</ReviewCount>
      </RatingInfo>
      <Address>{store.address}</Address>
      <Comment>
        <div style={{ fontWeight: "bold" }}>사장님 한마디</div>
        <div style={{ margin: "10px 0px", color: "gray" }}>
          {store.ownerComment}
        </div>
      </Comment>
    </InfoContainer>
  );
};

const Comment = styled.div`
  margin-top: 15px;
  background-color: rgb(250, 250, 250);
  padding: 10px 10px;
`;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const RatingInfo = styled.div`
  display: flex;
  /* flex-direction: row; */

  margin: 9px 0 6px 0;
  font-size: 18px;
`;

const RatingBadge = styled.div`
  display: inline-block;
  height: 18px;
  margin-right: 7px;
  padding: 0 4px;
  border-radius: 4px;
  background: rgb(255, 170, 40);
  font-size: 14px;
  line-height: 17px;
  color: #fff;
`;

const ReviewCount = styled.div`
  font-size: 15px;
  position: relative;
  top: -1px;
  color: rgba(0, 0, 0, 0.38);
`;

const Address = styled.div`
  color: gray;
  margin-bottom: 10px;
`;

export default StoreBasicInfo;
