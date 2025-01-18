import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TataLabs from "../../../assets/Images/homepage/tatalabs.webp";
import { AiFillStar } from "react-icons/ai";
const Wrapper = styled.div`
  border: 1px solid #eee;
  border-radius: 5px;
  height: 154px;
  width: 265px;

  background-color: #ffffff;

  box-sizing: border-box;
  padding: ${(props) => (props.padding ? props.padding : "0")};

  &:hover {
    /* box-shadow: var(--boxContainerShadow); */
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  }
  a {
    display: flex;
    flex-direction: column;

    height: 100%;
    text-decoration: none;

    h4 {
      font-size: 14px;
      line-height: 20px;
      color: #212121;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p {
      font-size: 12px;
      line-height: 17px;
      margin-top: 6px;
      color: #757575;
    }

    .ratingCon {
      height: 50px;
      /* border: 1px solid black; */
      display: flex;
      align-items: center;
      gap: 10px;
      /* flex-direction: column; */
      margin: 10px 0;
      .tataLabsCon {
        width: 32%;
        border: 1px solid var(--border);
        /* margin-right: 10px; */
        img {
          height: 50px;
          transform: scale(1.2);
        }
      }

      .ratingBadge {
        width: 34px;
        height: 18px;
        color: #ffffff;
        background-color: #1aaa2a;
        font-size: 10px;
        line-height: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .iso {
        font-size: 10px;
        line-height: 14px;
        color: #212121;
      }
    }

    .pricingCon {
      display: flex;
      gap: 10px;
      /* border: 1px solid black; */
      align-items: flex-end;

      .price {
        color: #212121;
        font-size: 16px;
        line-height: 22px;
      }
      .strikeOf {
        color: #757575;
        font-size: 12px;
        line-height: 17px;
        text-decoration: line-through;
      }

      .discount {
        border: 1px dashed #1aab2a;
        height: 22px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #1aaa2a;
        width: 45px;
        box-sizing: border-box;
        padding: 3px;
        background-color: #f3fbf4;
        font-size: 10px;
      }
    }
  }
`;

const BrandCard = ({
  imgUrl,
  title,
  desc,
  link,
  rating,
  price,
  cardHeight,
  strikeOfPrice,
  discount,
  cardWidth,
  cardPadding,
}) => {
  return (
    <Wrapper height={cardHeight} width={cardWidth} padding={cardPadding}>
      <Link to={link ? link : "#"}>
        <h4>{title}</h4>
        <p>{desc}</p>
        <div className="ratingCon">
          <span className="tataLabsCon">
            <img src={TataLabs} alt="tatalabs" />
          </span>
          <span className="ratingBadge">
            {rating} <AiFillStar />
          </span>
          <span className="iso">ISO</span>
        </div>
        <div className="pricingCon">
          <span className="price">{price}</span>
          <span className="strikeOf">{strikeOfPrice}</span>
          <span className="discount">{discount}</span>
        </div>
      </Link>
    </Wrapper>
  );
};

export default BrandCard;
