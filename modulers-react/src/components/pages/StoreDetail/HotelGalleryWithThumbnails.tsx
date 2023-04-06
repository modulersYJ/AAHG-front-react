import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

function MySwiper() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [imageWidth, setImageWidth] = useState(490);
  const [imageHeight, setImageHeight] = useState(348);

  const images = [
    {
      src: "https://via.placeholder.com/490x348/FF5733/FFFFFF?text=Image+1",
      alt: "Image 1",
      width: 490,
      height: 348,
    },
    {
      src: "https://via.placeholder.com/490x348/C70039/FFFFFF?text=Image+2",
      alt: "Image 2",
      width: 490,
      height: 348,
    },
    {
      src: "https://via.placeholder.com/490x348/900C3F/FFFFFF?text=Image+3",
      alt: "Image 3",
      width: 490,
      height: 348,
    },
    {
      src: "https://via.placeholder.com/490x348/581845/FFFFFF?text=Image+4",
      alt: "Image 4",
      width: 490,
      height: 348,
    },
    {
      src: "https://via.placeholder.com/490x348/FFC300/FFFFFF?text=Image+5",
      alt: "Image 5",
      width: 490,
      height: 348,
    },
  ];

  const handleSlideChange = (swiper) => {
    setCurrentSlideIndex(swiper.activeIndex);
  };

  const handleImageClick = (index) => {
    setImageWidth(images[index].width);
    setImageHeight(images[index].height);
    setCurrentSlideIndex(index);
  };

  return (
    <div style={{ maxWidth: "490px" }}>
      <div>
        <img
          src={images[currentSlideIndex].src}
          alt={images[currentSlideIndex].alt}
          style={{
            maxWidth: "100%",
            maxHeight: "348px",
            width: imageWidth,
            height: imageHeight,
            objectFit: "contain",
          }}
        />
      </div>
      <Swiper
        onSlideChange={handleSlideChange}
        slidesPerView={4}
        spaceBetween={10}
        style={{ width: "490px", height: "auto" }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.src}
              alt={image.alt}
              style={{ width: "100%", height: "100%" }}
              onClick={() => handleImageClick(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MySwiper;
