import React from "react";
import styles from "./payment.module.css"
import Paytm from "../../assets/payment/paytm.webp"
import Airtel from "../../assets/payment/airtel.webp"
import Mobikwik from "../../assets/payment/mobikwik.webp"
import Freecharge from "../../assets/payment/freecharge.webp";
import Pay from "../../assets/payment/pay.webp"
import Phonepay from "../../assets/payment/phonepay.webp"
export const Wallet = ()=>{
   return (
       <div className={styles.wallet}>
           <div>
               <div className={styles.wallet1}>
                   <img src={Paytm}/>
                   <p>Paytm Wallet</p>
               </div>
               <p>Assured cashback of ₹100 on minimum transaction of ₹999 or more.
                    Offer ends 24th July 2022.</p>
                <p>LINK WALLET</p>
           </div>
           <div>
               <div className={styles.wallet1}>
                   <img src={Mobikwik}/>
                   <p>Mobikwik</p>
               </div>
               <p>Pay with Mobikwik wallet and get up to ₹500 cashback on allopathy medicines.
                    Get assured cashback of ₹100. Minimum cart value for the offer is ₹800</p>
           </div>
           <div>
               <div className={styles.wallet1}>
                   <img src={Pay}/>
                   <p>Amazon Pay</p>
               </div>
               
           </div>
           <div>
               <div className={styles.wallet1}>
                   <img src={Freecharge}/>
                   <p>Freecharge PayLater | Wallet</p>
               </div>
               <p>Get up to ₹200 cashback on your transaction via Freecharge Pay Later or Wallet. 
                   Offer ends 23rd July 2022.</p>
           </div>
           <div>
               <div className={styles.wallet1}>
                   <img src={Airtel}/>
                   <p>Airtel Payments Bank</p>
               </div>
               <p>Pay with Airtel Payments Bank and get flat ₹150 cashback on a minimum transaction of ₹1000.
                    Valid till 23rd July 2022.</p>
                
           </div>
           <div>
               <div className={styles.wallet1}>
                   <img src={Phonepay}/>
                   <p>PhonePe</p>
               </div>
              
           </div>
       </div>
   )
}