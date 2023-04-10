import React, { useState } from "react";

import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade } from "swiper";
import "swiper/swiper-bundle.css";
import { Image } from "./images";
import styled from "styled-components";

const MySwiper = ({ images }: { images: Image[] }): JSX.Element => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(490);
  const [imageHeight, setImageHeight] = useState(348);

  const handleSlideChange = (swiper: SwiperType) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const handleImageClick = (index: number) => {
    setImageWidth(images[index].width);
    setCurrentSlideIndex(index);
  };

  return (
    <div style={{ maxWidth: "490px" }}>
      <div style={{ width: "490px", height: "348px", position: "relative" }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            style={{
              maxWidth: "100%",
              maxHeight: "348px",
              width: imageWidth,
              objectFit: "contain",
              position: "absolute",
              top: 0,
              left: 0,
              opacity: index === currentSlideIndex ? 1 : 0,
              transition: "opacity 0.5s",
            }}
          />
        ))}
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={4}
        spaceBetween={10}
        style={{ width: "490px", height: "auto", marginTop: "-80px" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <ImageWrapper
              src={image.src}
              alt={image.alt}
              isActive={index === currentSlideIndex}
              onClick={() => handleImageClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ImageWrapper = styled.img<{ isActive: boolean }>`
  cursor: pointer;
  width: 100%;
  height: 100%;
  border: ${({ isActive }) => (isActive ? "4px solid #aaa" : "none")};
  box-sizing: border-box;
`;

export default MySwiper;
