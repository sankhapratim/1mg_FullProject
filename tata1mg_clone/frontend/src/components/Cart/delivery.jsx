import React from "react"
import { useNavigate } from "react-router-dom"
import styles from "./cart.module.css"
export const Delivery = ()=>{
    const navigate= useNavigate()
    return (
        <div className={styles.mainchoose}>
             <div className={styles.choose}>
                 <p>Choose delivery option(s)</p>
                
                 <div className={styles.between}>
                     <p>Choose a delivery speed</p>
                     <p className={styles.between1}>
                         <img width="30px" src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"/>
                         <p>Between 02 - 04 Agust</p>
                     </p>
                 </div>
             </div>
             <div className={styles.rightchoose}>
                 <p>Select Address</p>
                 <div className={styles.choosedata}>
                 <div className={styles.addressdata1}>
                    <div>
                       <img width="30px" src="https://image.shutterstock.com/image-vector/screen-record-button-isolated-on-600w-1457333453.jpg"/>
                       <p>Home</p>
                    </div>
                     <p>nagesh kumawat</p>
                     <p>1234567890</p>
                     <p>Address</p>
                     <p>Ratlam Madhya pradesh-457339</p>
                 </div>
               
                <div onClick={()=>navigate("/summary")}>
                    CONTINUE
                </div>
             
             </div>
             </div>
        </div>
    )
}