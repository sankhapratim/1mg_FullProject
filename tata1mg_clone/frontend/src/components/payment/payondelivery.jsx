import React from "react";
import styles from "./payment.module.css"
import paydelivery from "../../assets/payment/paydelivery.webp"
export  const PayOnDelivery=()=>{

    return (
        <div className={styles.payondelivery}>
             <img src={paydelivery} alt=""/>
             <p>CASH ON DELIVERY</p>
        </div>
    )
}