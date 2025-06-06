import React, { useState } from "react";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import "./Slider.css";
import { Link } from "react-router-dom";
import { sliderItems } from "../../data"; // Existing data.js import

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <div className="slider-container">
      <div className="arrow left" onClick={() => handleClick("left")}>
        <IoArrowBack className="icon" />
      </div>

      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${slideIndex * 100}vw)` }}
      >
        {sliderItems.map((slide) => (
          <div className="slide" key={slide.id}>
            <div className="img-container">
              <img src={slide.img} alt={slide.title} className="img" />
            </div>
            <div className="info-container">
              <h1 className="title">{slide.title}</h1>
              <p className="desc">{slide.desc}</p>
              <Link to="/products">
                <button className="button">Shop Now</button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="arrow right" onClick={() => handleClick("right")}>
        <IoArrowForward className="icon" />
      </div>
    </div>
  );
};

export default Slider;
