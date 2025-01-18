import React from "react";
import descstyles from "./ProductDescription.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchdes, AddToCart } from "../../Redux/action";
import "./loader.css";
import { Footer } from "../../components/Footer/Footer";

const ProductDescription = () => {
  const { id } = useParams();
  let prod = useSelector((state) => state.desData);
  let username = useSelector((state) => state.username);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchdes(id));
  }, [id, dispatch]);
  console.log(prod);

  let random = Math.floor(Math.random() * 150) + 50;
  const quantarr = Array.from({ length: 30 }, (_, index) => index + 1);

  return (
    <>
      {/* LOADER */}
      {Object.keys(prod).length === 0 ? (
        <div id="loaderdiv">
          <div className="loadingio-spinner-spinner-hwqa8bbtkw9">
            <div className="ldio-2ho1tpded2u">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className={descstyles.descTopDiv}>
            <div className={descstyles.descImgDiv}>
              <img
                src={prod.imageUrl}
                alt={prod.productName}
                className={descstyles.prodimg}
              />
            </div>

            <div className={descstyles.highlightDiv}>
              <h3>{prod.productName}</h3>
              <p className={descstyles.brand}>{prod.brand}</p>
              <div className={descstyles.ratingDiv}>
                <div>{prod.ratings}&nbsp;★</div>
                <p>{prod.numberOfRatings}</p>
              </div>
              <p>Product Highlights</p>
              <div>
                {prod.prodHighlights.split("\n").map((el, i) => {
                  return (
                    <p
                      key={i}
                      style={{ paddingBottom: "6px", fontSize: "14px" }}
                    >
                      {el}
                    </p>
                  );
                })}
              </div>
            </div>

            <div className={descstyles.addToCartDiv}>
              <div className={descstyles.randomDiv}>
                <img src="https://www.1mg.com/images/social_cue.svg" />
                <p>&nbsp; {random} people bought this recently</p>
              </div>
              <div className={descstyles.priceDiv}>
                <p style={{ fontSize: "24px" }}>₹{prod.price}</p>
                <p
                  style={{
                    textDecorationLine: "line-through",
                    textDecorationStyle: "solid",
                    color: "grey",
                  }}
                >
                  MRP&nbsp;{prod.strikedPrice}
                </p>
                <p className={descstyles.discount}>{prod.discount}% OFF</p>
              </div>
              <p style={{ fontSize: "14px", color: "grey" }}>
                Inclusive of all taxes
              </p>
              <div className={descstyles.quantDiv}>
                <p>Select quantity:&nbsp;</p>
                <select value="">
                  {quantarr.map((el, i) => {
                    return (
                      <option value={el} key={i}>
                        {el}&nbsp;units
                      </option>
                    );
                  })}
                </select>
              </div>
              <button
                className={descstyles.cartbtn}
                onClick={() => {
                  dispatch(
                    AddToCart({
                      username: username,
                      _id: prod._id,
                    })
                  );
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>

          <div className={descstyles.longDesc}>
            <h3 style={{ paddingBottom: "25px" }}>
              Information about {prod.productName}:
            </h3>
            {prod.longDesc.split("\n").map((el, i) => {
              return (
                <p key={i} style={{ paddingBottom: "6px" }}>
                  {el}
                </p>
              );
            })}
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default ProductDescription;
