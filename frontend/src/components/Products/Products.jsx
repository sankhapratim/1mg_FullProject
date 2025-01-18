import React from "react";
import { useState, useEffect } from "react";
import prodstyles from "./products.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loader.css";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchdata,
  sortproducts,
  fetchfilterbrand,
  fetchfilterdiscount,
  AddToCart,
} from "../../Redux/action";
import { Footer } from "../../components/Footer/Footer";
const Products = () => {
  const navigate = useNavigate();
  let username = useSelector((state) => state.username);

  //get all products
  let products = useSelector((state) => state.productsData);
  let allproducts = useSelector((state) => state.allproducts);
  // console.log(products);

  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchdata());
  }, []);

  //filter by brand
  let obj1 = {};
  allproducts.map((el) => {
    if (obj1[el.brand] === undefined) {
      obj1[el.brand] = 1;
    } else {
      obj1[el.brand] += 1;
    }
  });
  let brands = Object.keys(obj1);
  let numbrands = Object.values(obj1);

  const filterbybrand = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      dispatch(fetchfilterbrand(e.target.value));
    } else {
      dispatch(fetchdata());
    }
  };

  //filter by discount
  let obj2 = {};
  allproducts.map((el) => {
    let num = parseInt(el.discount);
    if (num >= 10) {
      if (obj2["10% and above"] === undefined) {
        obj2["10% and above"] = 1;
      } else {
        obj2["10% and above"] += 1;
      }
    }
    if (num >= 20) {
      if (obj2["20% and above"] === undefined) {
        obj2["20% and above"] = 1;
      } else {
        obj2["20% and above"] += 1;
      }
    }
    if (num >= 30) {
      if (obj2["30% and above"] === undefined) {
        obj2["30% and above"] = 1;
      } else {
        obj2["30% and above"] += 1;
      }
    }
  });
  let discount = Object.keys(obj2);
  let numdiscount = Object.values(obj2);

  const filterbydiscount = (e) => {
    console.log(e.target.value, e.target.checked);
    if (e.target.checked) {
      dispatch(fetchfilterdiscount(e.target.value));
    } else {
      dispatch(fetchdata());
    }
  };

  //sorting products
  const handleSort = (e) => {
    dispatch(sortproducts(e.target.value));
    // dispatch(fetchdata);
  };

  //pagination
  const [page, setpage] = React.useState(1);
  let prodarr = products;
  // const paginate = () => {
  prodarr = products.slice((page - 1) * 8, 8 * (page - 1) + 8);
  // };

  let last = Math.ceil(products.length / 8);
  let pageno = [];
  for (let i = 1; i <= last; i++) {
    pageno.push(i);
  }

  const decrpage = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  const incrpage = () => {
    if (page < last) {
      setpage(page + 1);
    }
  };

  return (
    <>
      {/* LOADER */}
      {products.length === 0 ? (
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
          {/* PRODUCT PAGE */}
          <div className={prodstyles.prodpagediv}>
            {/* FILTERS */}
            <div className={prodstyles.filterdiv}>
              <div
                style={{
                  padding: "15px",
                  borderBottom: "1px solid silver",
                  fontWeight: "bold",
                  fontSize: "14px",
                }}
              >
                FILTER
              </div>

              {/* FILTER BY BRANDS */}
              <div
                style={{ padding: "15px", borderBottom: "1px solid silver" }}
              >
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  BRANDS
                </div>
                {brands.map((el, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          value={el}
                          onChange={filterbybrand}
                          style={{ width: "15px", height: "15px" }}
                        />
                        <p style={{ paddingLeft: "10px" }}>{el}</p>
                      </div>
                      <p>{numbrands[i]}</p>
                    </div>
                  );
                })}
              </div>

              {/* FILTER BY DISCOUNTS */}
              <div style={{ padding: "15px" }}>
                <div
                  style={{
                    fontWeight: "bold",
                    fontSize: "14px",
                  }}
                >
                  DISCOUNTS
                </div>
                {discount.map((el, i) => {
                  return (
                    <div
                      key={i}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        fontSize: "12px",
                        paddingTop: "10px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <input
                          type="checkbox"
                          value={parseInt(el)}
                          onChange={filterbydiscount}
                          style={{ width: "15px", height: "15px" }}
                        />
                        <p style={{ paddingLeft: "10px" }}>{el}</p>
                      </div>
                      <p>{numdiscount[i]}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* PRODUCTS */}
            <div className={prodstyles.mainprodcontainer}>
              <div className={prodstyles.prodtopdiv}>
                <div style={{ fontSize: "24px", lineHeight: "34px" }}>
                  All Products
                </div>

                {/* SORTING PRODUCTS */}
                <div className={prodstyles.prodsortdiv}>
                  <p>Sort By &nbsp;</p>
                  <div>
                    <select
                      onChange={handleSort}
                      className={prodstyles.sortselect}
                    >
                      <option value="rel">Relevance</option>
                      <option value="plth">Price: Low to High</option>
                      <option value="phtl">Price: High to Low</option>
                      <option value="rlth">Rating: Low to High</option>
                      <option value="rhtl">Rating: High to Low</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* MAPPING PRODUCTS */}
              <div className={prodstyles.prodContainer}>
                {prodarr.map((el, i) => {
                  return (
                    <div key={i} className={prodstyles.prodBox}>
                      <img
                        src={el.imageUrl}
                        alt={el.productName}
                        onClick={() => {
                          navigate(`/products/${el._id}`);
                        }}
                      />
                      <p
                        className={prodstyles.prodName}
                        onClick={() => {
                          navigate(`/products/${el._id}`);
                        }}
                      >
                        {el.productName}
                      </p>
                      <p className={prodstyles.prodDesc}>{el.shortDesc}</p>

                      <div className={prodstyles.ratingDiv}>
                        <div>{el.ratings}&nbsp;★</div>
                        <p>{el.numberOfRatings}</p>
                      </div>

                      <div className={prodstyles.ratingDiv}>
                        <p
                          style={{
                            textDecorationLine: "line-through",
                            textDecorationStyle: "solid",
                          }}
                        >
                          MRP&nbsp;{el.strikedPrice}
                        </p>
                        <p id={prodstyles.discount}>{el.discount}% OFF</p>
                      </div>

                      <div className={prodstyles.priceDiv}>
                        <p>₹{el.price}</p>
                        <button
                          onClick={() => {
                            dispatch(
                              AddToCart({
                                username: username,
                                _id: el._id,
                              })
                            );
                          }}
                        >
                          ADD
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* PAGINATION */}
              <div
                style={{
                  backgroundColor: "white",
                  boxShadow: "rgba(0, 0, 0, 0.07) 0px 0px 7px 0px",
                }}
              >
                <div className={prodstyles.pagination}>
                  <div onClick={decrpage} className={prodstyles.othernum}>
                    Previous
                  </div>
                  {pageno.map((el) => {
                    return (
                      <div>
                        {el == page ? (
                          <div className={prodstyles.numcolor}>{el}</div>
                        ) : (
                          <div
                            onClick={() => setpage(el)}
                            className={prodstyles.othernum}
                          >
                            {el}
                          </div>
                        )}
                      </div>
                    );
                  })}
                  <div onClick={incrpage} className={prodstyles.othernum}>
                    Next
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Products;
