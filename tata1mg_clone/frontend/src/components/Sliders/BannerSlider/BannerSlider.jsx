import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  *:focus {
    outline: 0;
  }

  margin: auto;

  height: ${(props) => (props.height ? props.height : "auto")};
  width: ${(props) => (props.width ? props.width : "auto")};

  position: relative;
  img {
    height: ${(props) => (props.height ? props.height : "auto")};
    /* border: 1px solid red; */
    width: ${(props) => (props.width ? props.width : "auto")};
  }
  ul {
    bottom: 12px;
    position: absolute;
  }
`;

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

export const BannerSlider = ({ data, height, width, arrows }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows,
    //    nextArrow: <SampleNextArrow />,
    //   prevArrow: <SamplePrevArrow />,
  };

  return (
    <Wrapper height={height} width={width}>
      <Slider {...settings}>
        {data.map((el, i) => {
          return (
            <div key={i}>
              <Link to={el.link}>
                <img src={el.imgUrl} alt="" />
              </Link>
            </div>
          );
        })}
      </Slider>
    </Wrapper>
  );
};
