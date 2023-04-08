import React from "react";
import styled from "styled-components";
import REVIEWS from "./reviewsDummy.json";

type Review = {
  nickname: string;
  date: string;
  rating: number;
  comment: string;
  imgUrl?: string;
};

const Reviews = (): JSX.Element => {
  const reviews: Review[] = REVIEWS;
  return (
    <Container>
      {reviews.map((review, index) => (
        <ReviewItem key={index}>
          <LeftSection>
            <Nickname>{review.nickname}</Nickname>
            <Rating>{`${review.rating.toFixed(1)} / 5`}</Rating>
            <Comment>{review.comment}</Comment>
            <Date>{review.date}</Date>
          </LeftSection>
          {review.imgUrl && <Photo src={review.imgUrl} alt="Review photo" />}
        </ReviewItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const ReviewItem = styled.div`
  display: flex;
  margin-bottom: 20px;
  gap: 30px;
`;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  flex: 8;
`;

const Nickname = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Rating = styled.div`
  font-size: 14px;
  color: #f8d64e;
  margin-bottom: 5px;
`;

const Comment = styled.div`
  font-size: 14px;
  margin-bottom: 5px;
`;

const Date = styled.div`
  font-size: 14px;
  color: #666;
  margin-top: 5px;
`;

const Photo = styled.img`
  align-self: flex-end;
  width: 150px;
  max-width: 150px;
  max-height: 150px;
  margin-top: 10px;
`;

export default Reviews;
