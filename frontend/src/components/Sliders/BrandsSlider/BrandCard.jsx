import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  /* border: 1px solid black; */
  border-radius: 5px;

  height: 210px;

  padding: 0px 0px;
  background-color: white;
  width: 170px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    /* border: 1px solid red; */
    justify-content: center;
    box-sizing: border-box;
    padding: 20px 0px;
    color: #212121;
    /* border: 1px solid black; */
    span {
      /* height: 120px;
      width: 120px; */
      /* border: 1px solid black; */
      img {
        width: 100px;
      }
      margin-bottom: 10px;
    }

    p {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
`;

const BrandCard = ({ imgUrl, title, link }) => {
  return (
    <Wrapper>
      <Link to={link ? link : "#"}>
        <span>
          <img src={imgUrl} alt="imagename" />
        </span>
        <p>{title}</p>
      </Link>
    </Wrapper>
  );
};

export default BrandCard;
