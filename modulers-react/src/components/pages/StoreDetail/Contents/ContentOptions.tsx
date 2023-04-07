import React from "react";
import styled from "styled-components";

type Review = {
  nickname: string;
  date: string;
  rating: number;
  comment: string;
  photo?: string;
};

type Props = {
  reviews: Review[];
};

const Reviews: React.FC<Props> = ({ reviews }) => {
  return (
    <Container>
      {reviews.map((review, index) => (
        <ReviewItem key={index}>
          <Nickname>{review.nickname}</Nickname>
          <Date>{review.date}</Date>
          <Rating>{`${review.rating.toFixed(1)} / 5`}</Rating>
          <Comment>{review.comment}</Comment>
          {review.photo && <Photo src={review.photo} alt="Review photo" />}
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
  flex-direction: column;
  margin-bottom: 20px;
`;

const Nickname = styled.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 10px;
`;

const Date = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 5px;
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

const Photo = styled.img`
  align-self: flex-end;
  width: 100px;
  margin-top: 10px;
`;

export default Reviews;