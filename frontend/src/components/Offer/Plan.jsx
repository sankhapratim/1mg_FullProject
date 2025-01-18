import React from "react";
import style from "./Plan.module.css"

const Plan = () => {
  return (
    <div>
      <div id={style.navbar}></div>
      {/* <img id="four" src={require("C:/Users/PARIMAL/OneDrive/Desktop/shocking-grade-9442/frontend/src/images/14.png")} alt="" /> */}

      <img id={style.six} src={require("../images/16.png")} alt="" />
      <img id={style.seven} src={require("../images/17.png")} alt="" />
      <img id={style.eight} src={require("../images/18.png")} alt="" />
      <img id={style.nine} src={require("../images/19.png")} alt="" />
      <img id={style.ten} src={require("../images/20.png")} alt="" />
      <img id={style.eleven} src={require("../images/21.png")} alt="" />
      {/* {/* <!-- <img id="twelve" src="images/12.png" alt=""> --> */}
      <div id={style.footer}></div>
    </div>
  );
};

export default Plan;
