import React from "react";
import styles from "./payment.module.css"
import Phonepay1 from "../../assets/payment/phonPay1.webp"
import Paytmupi from "../../assets/payment/paytmupi.webp";
import Gpay from "../../assets/payment/gpay.webp"
import Bhim from "../../assets/payment/bhim.webp";
import Button from "../Button";
export const Upipage = ()=>{
    const button = {
        bg: "#ff6f61",
        text: "VERIFY & PAY",
        width: "40%",
        br: "0px",
        color: "#ffffff",
        height: "50px",
        fontSize: "18px",
      };
    return (
        <div className={styles.upimain}>
            <p>Transfer money from your bank account using your UPI app</p>
            <div className={styles.upi}>
                 <p>We accept</p>
                 <img src={Bhim}  alt=""/>
                 <img src={Gpay} alt=""/>
                 <img src={Phonepay1} alt=""/>
                 <img src={Paytmupi} alt=""/>
            </div>
            <hr/>
            <p>Saved UPI ID</p>
            <p>Pay via new UPI ID</p>
            <input/>
            <p>The UPI ID is in the format of name/phone number@bankname</p>
            <div>
               <Button styles={button}/>
            </div>
        </div>
    )
}