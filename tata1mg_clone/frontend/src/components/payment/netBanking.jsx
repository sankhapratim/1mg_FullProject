import React from "react";
import styles from "./payment.module.css"
import Hdfc from "../../assets/payment/hdfc.webp"
import ICICI from "../../assets/payment/Icici.webp"
import Axis from "../../assets/payment/Axis.webp";
import Kotak from "../../assets/payment/kotak.webp";
import SBI from "../../assets/payment/Sbi.webp"
export const NetBanking = ()=>{
    return (
        <div className={styles.bankingmain}>
            <div className={styles.banking1}>
                <div>
                <img src={Hdfc} alt="" />
                <p>HDFC</p>
                </div>
                <div>
                <img src={ICICI} alt="" />
                <p>ICICI</p>
                </div>
            </div>
            <div className={styles.banking1}>
                <div>
                <img src={Axis} alt="" />
                <p>AXIS</p>
                </div>
                <div>
                <img src={Kotak} alt="" />
                <p>KOTAK</p>
                </div>
            </div>
            <div className={styles.banking1}>
                <div>
                <img src={SBI} alt="" />
                <p>SBI</p>
                </div>
            </div>
            
        </div>
    )
}