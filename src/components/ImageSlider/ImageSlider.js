import React from "react";
import "./styles.css";
import { Carousel } from "react-responsive-carousel";

const ImageSlider = ({ images }) => {


  return (
    <div className="imageSlider-container">
      <Carousel
        className="carousel"
        axis="horizontal"
        dynamicHeight={true}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        centerMode={true}
       centerSlidePercentage={110}
      >
        {images.map((image, index) => (
          <div className="imageSlider__images" key={index}>
            <img src={image} alt="details slider" className=""/>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageSlider;
