import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
const Wrapper = styled.div`
  /* border: 1px solid black; */
  border-radius: 5px;

  height: 368px;
  box-sizing: border-box;
  padding: 10px;
  background-color: white;
  width: 173px;

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,
      rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,
      rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
  }
  a {
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    text-decoration: none;
    /* border: 1px solid red; */
    justify-content: center;
    box-sizing: border-box;
    /* padding: 20px 15px; */
    color: #212121;
    /* text-align: left; */
    .imageCon {
      /* border: 1px solid black; */
      width: 144px;
      height: 165px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        /* width: 131px; */
        /* height: 165px;
        border: 1px solid black; */
        max-width: 100%;
        max-height: 100%;
        height: auto;
        width: auto;
      }
      /* margin-bottom: 10px; */
    }

    .gap {
      height: 37px;
    }

    .title {
      height: 44px;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      word-wrap: break-word;
      overflow: hidden;
      white-space: normal;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      margin-bottom: 3px;
    }

    .shortDesc {
      height: 17px;
      font-size: 12px;
      line-height: 17px;
      color: #757575;
      margin-bottom: 3px;
    }

    .raingContainer {
      height: 19px;
      width: 100%;
      display: flex;
      justify-content: flex-start;
      margin-bottom: 3px;

      .ratingBadge {
        width: 42px;
        height: 20px;
        color: #ffffff;
        background-color: #1aaa2a;
        font-size: 12px;
        font-weight: bold;
        line-height: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        margin-right: 5px;
      }

      .countOfRatings {
        font-size: 12px;
        line-height: 17px;
        color: #757575;
      }
    }

    .strkeOfPriceCon {
      display: flex;
      align-items: center;
      height: 22px;
      width: 100%;
      /* border: 1px solid black; */
      font-size: 12px;
      gap: 5px;
      line-height: 17px;
      margin-bottom: 3px;
      .strikePrice {
        color: #757575;
        text-decoration: line-through;
      }
      .discount {
        color: #1aaa2a;
      }
    }

    .price {
      font-size: 16px;
      line-height: 22px;
      color: #212121;
    }

    /* p {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    } */
  }
`;

const BrandCard = ({
  imageUrl,
  productName,
  shortDesc,
  numberOfRatings,
  strikedPrice,
  price,
  discount,
  ratings,
  _id,
}) => {
  return (
    <Wrapper>
      <Link to={`/products/${_id}`}>
        <span className="imageCon">
          <img src={imageUrl} alt="imagename" />
        </span>
        <span className="gap"></span>
        <span className="title">
          <p>{productName}</p>
        </span>
        <span className="shortDesc">
          <p>{shortDesc}</p>
        </span>
        {ratings ? (
          <div className="raingContainer">
            <span className="ratingBadge">
              {ratings} <AiFillStar />
            </span>
            <span className="countOfRatings">{numberOfRatings}</span>
          </div>
        ) : (
          ""
        )}
        <div className="strkeOfPriceCon">
          {strikedPrice ? (
            <p className="strikePrice">MRP {strikedPrice}</p>
          ) : (
            ""
          )}
          {discount ? <p className="discount">{discount}% off</p> : ""}
        </div>
        <p className="price">₹{price}</p>
      </Link>
    </Wrapper>
  );
};

export default BrandCard;
