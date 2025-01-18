import React from "react";
import top_banner from "../image/top_banner.png";
import middleX from "../image/middleX.PNG";
import middleY from "../image/middleY.PNG";

import press from "../image/press.PNG";

import style from "./about.module.css";
import styles from "./About2.module.css";

import { Avatar } from "@mui/material";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { Footer } from "../components/Footer/Footer";

const About = () => {
  return (
    <>
      <div>
        <div className={style.first_div}>
          <img src={top_banner} className={style.img} alt="Responsive image" />
          <h1 className={style.main_h1}>
            We make healthcare
            <br />
            Understandable, Accessible and Affordable.
          </h1>
        </div>
        {/*  */}

        <div className={style.second_div}>
          <h2>About Tata 1mg</h2>
          <h3>India’s leading digital consumer healthcare platform</h3>

          <div className={style.grid}>
            <div>
              <img
                src="https://www.1mg.com/images/page-specific/about-us/medicine-icon.png"
                alt=""
              />
              <h3>E-Pharmacy</h3>
              <p>
                Order medicines and health products online and get it delivered
                at home from licensed pharmacies
              </p>
            </div>

            <div>
              <img
                src="https://www.1mg.com/images/page-specific/about-us/ask-a-doctor-icon.png"
                alt=""
              />
              <h3>Online Consultations</h3>
              <p>Consult qualified and registered doctors on chat for free</p>
            </div>
            <div>
              <img
                src="https://www.1mg.com/images/page-specific/about-us/lab-test-icon.png"
                alt=""
              />
              <h3>Labs Tests</h3>
              <p>
                Book lab tests online for hassle-free, home sample collection
                service. Get reports online.
              </p>
            </div>

            <div>
              <img
                src="https://www.1mg.com/images/page-specific/about-us/authentic.png"
                alt=""
              />
              <h3>Authentic Information</h3>
              <p>
                Read medicine and health content written by qualified doctors
                and health professionals
              </p>
            </div>
          </div>
          <p>
            1mg.com brings to you an online platform, which can be accessed for
            all your health needs. We are trying to make healthcare a
            hassle-free experience for you. Get your allopathic, ayurvedic,
            homeopathic medicines, vitamins & nutrition supplements and other
            health-related products delivered at home. Lab tests? That too in
            the comfort of your home. Doctor consult? Yes, we got that covered
            too.
          </p>
        </div>

        <div className="leader">
          <h1>Leadership</h1>
          <div className={style.leader_every}>
            <div className={style.sub}>
              <Avatar
                alt="Remy Sharp"
                className={style.avatar}
                src="https://www.1mg.com/images/page-specific/about-us/profile-1.png"
                sx={{ width: 220, height: 220 }}
              />
              <h1>Prashant Tandon</h1>
              <p>CEO & Co-Founder</p>
              <div className="icon">
                <AiFillLinkedin className={style.icn} />
                <BsTwitter className={style.icn} />
              </div>
            </div>

            <div className={style.sub}>
              <Avatar
                alt="Remy Sharp"
                className={style.avatar}
                src="https://www.1mg.com/images/page-specific/about-us/profile-2.png"
                sx={{ width: 220, height: 220 }}
              />
              <h1>Gaurav Agarwal</h1>
              <p>CTO & Co-Founder</p>
              <div className="icon">
                <AiFillLinkedin className={style.icn} />
                <BsTwitter className={style.icn} />
              </div>
            </div>

            <div className={style.sub}>
              <Avatar
                alt="Remy Sharp"
                className={style.avatar}
                src="https://www.1mg.com/images/page-specific/about-us/profile-3.png"
                sx={{ width: 220, height: 220 }}
              />
              <h1>Tanmay Saksena</h1>
              <p>COO</p>
              <div className="icon">
                <AiFillLinkedin className={style.icn} />
                <BsTwitter className={style.icn} />
              </div>
            </div>
          </div>
        </div>

        {/* //Middle X and Y" */}

        <div className={style.middle}>
          <img src={middleX} alt="" className={style.midd} />
          <img src={middleY} alt="" className={style.midd} />
        </div>

        {/* //We are certified "ISO/IEC 27001:2013" */}

        <div className={styles.container}>
          <div className={styles.container_box}>
            <div className={styles.container1}>
              <div className={styles.img1}>
                <img src="https://static.legitscript.com/seals/729605.png" />
              </div>
              <div className={styles.text1}>
                <b>LegitScript certified</b>
                <p>
                  LegitScript is a verification and monitoring service for
                  online pharmacies and Tata 1mg is the first Indian healthcare
                  website to earn LegitScript certification.
                </p>
              </div>
            </div>
            <div className={styles.container2}>
              <div className={styles.img2}>
                <img src="https://res.cloudinary.com/du8msdgbj/image/upload/v1580717209/URS_ebgmxc.png" />
              </div>
              <div className={styles.text2}>
                <b>We are certified "ISO/IEC 27001:2013"</b>
                <p>
                  ISO/IEC 27001:2013 is a certification which lays out
                  implementation and management guidelines to safeguard digital
                  and paper information. This certification ensures that an
                  organization has implemented the required steps to protect all
                  sensitive information against unauthorized access. Tata 1mg
                  has been accredited with this certification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* //Video wala sections" */}

        <div className={style.first_di}>
          <img
            src="https://www.1mg.com/images/page-specific/about-us/video-background.png"
            className={style.im}
            alt="Responsive image"
          />
          <h1 className={style.main_h}>
            How we bring you closer to better health
            <br />
          </h1>
          <p className={style.main_h5}>
            Over the past three years, we've worked to build a healthcare
            platform that not only delivers medicine – but a platform that
            guides customers to the right and affordable care. Today, Tata 1mg
            is present in 1000+ cities– And we’re just getting started.
          </p>
        </div>

        {/* //Work Culuture */}

        <div className={styles.market}>
          <div className={styles.market_box}>
            <div className={styles.left_box}>
              <img src="https://www.1mg.com/images/page-specific/about-us/workwithus.png"></img>
            </div>
            <div className={styles.right_box}>
              <div className={styles.right_box_top}>
                <h5>Our work and culture</h5>
                <p>
                  At Tata 1mg we strongly believe that a great culture is an
                  important ingredient for a startup’s success. Our culture
                  promotes radical candor, fast paced iterations, collaboration
                  and a flat hierarchy. Listed below are our core values that
                  enshrine our culture.
                </p>
                <h4>Be the CEO - own outcomes</h4>
                <p>
                  At one Tata 1mg we believe that every individual has the power
                  to drive impact and change. We encourage our team members to
                  take ownership and charge not paying heed to organizational
                  trappings. As a result individuals (and not just leaders) have
                  the potential to drive big impact on our business and
                  customers.
                </p>
                <h4>Team and not individual</h4>
                <p>
                  We believe in the power of the team. For us a superstar team
                  is much more important than a superstar individual.
                </p>
                <h4>Accountability with empathy</h4>
                <p>
                  We believe that everyone can shine in an environment that’s
                  right for them and we strive to help our team members discover
                  that environment. Our communication philosophy is that of
                  radical candor - Challenge Directly but Care Personally.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* //Press Coverage // */}
        <div className={style.press}>
          <img src={press} alt="" className={style.banner_bottom} />
        </div>

        {/* //Google Play Store // */}
        <div className={style.playstore}>
          <img
            src="https://www.1mg.com/images/page-specific/about-us/play-store.png"
            alt=""
            className={style.pd}
          />
          <img
            src="https://www.1mg.com/images/page-specific/about-us/app-store.png"
            alt=""
            className={style.pd}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
