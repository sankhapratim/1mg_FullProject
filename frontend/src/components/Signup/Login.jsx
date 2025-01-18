
import{Mainbox,Slider1,ParentSlider,Slider2,LoginButton} from "./Login1"

import React, { Component } from "react";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import{LoginInput} from "./LoginInput"
import{LoginOTP} from "./LoginOtp"
export const Login = () => {

  const state=useSelector((state)=>state)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Mainbox  >
        <Slider1>
        <Slider {...settings}>
          <div>
          <img  
                    src="https://www.1mg.com/images/login-signup/Home-Delivery-of-Medicines.png"
                    alt=""
                  />
                  <h3 >Medicines, Home Delivered</h3>
                  <p>
                    Order any medicine or health product and we’ll deliver it
                    for free. Enjoy discounts on everything.
                  </p>
          </div>
          <div>
          <img
                    src="https://www.1mg.com/images/login-signup/Health-Related-Queries.png"
                    alt=""
                  />
                  <h3>Health Related Queries?</h3>
                  <p>
                    Consult our certified doctors from anywhere, anytime, and
                    for free. We guarantee your privacy.
                  </p>
          </div>
          <div>
          <img
                    src="https://www.1mg.com/images/login-signup/Know-Your-Medicines.png"
                    alt=""
                  />
                  <h3>Know Your Medicines</h3>
                  <p>
                    View medicine information like usage, side effects and
                    cheaper substitutes before you take them.
                  </p>
          </div>
          <div>
          <img
                    src="https://www.1mg.com/images/login-signup/Lab-Tests-at-Home.png"
                    alt=""
                  />
                  <h3>Lab Tests at Home</h3>
                  <p>
                    Book any test from any lab. We'll collect the sample and
                    send the reports. Save up to 80% every time.
                  </p>
          </div>
          <div>
          <img
                    src="https://www.1mg.com/images/login-signup/Your-Go-To-Health-App.png"
                    alt=""
                  />
                  <h3>Make Healthcare Simpler</h3>
                  <p>
                    Get medicine information, order medicines, book lab tests
                    and consult doctors online from the comfort of your home.
                  </p>
          </div>
        </Slider>
      </Slider1>
      <>
      {
        (state.otp=="")?
        <Slider2>
        <LoginInput/>
       </Slider2>:
       <Slider2>
        <LoginOTP/>
       </Slider2>
      }
      </>

    </Mainbox>



  )
}


