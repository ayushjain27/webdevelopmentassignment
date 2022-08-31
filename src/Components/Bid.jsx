import React from 'react';
import styles from './Bid.module.css'

const Bid = (props) => {
    let {
        product_title,
        product_pipeline,
        main_product_svg,
        online_price,
        quantity,
        status_icon,
        online_price_icon,
        time_remaining,
        bid_placed,
      } = props;
  return (
    <>
    <div className="d-flex flex-wrap justify-content-around my-3">
         <div className={`${styles.box} my-2`}>
              <span className={styles.span}></span>
              <p className={styles.text}>Ayush</p>
            </div>
         <div className={`${styles.box} my-2`}>
              <span className={styles.span}></span>
              <p className={styles.text}>Ayush</p>
            </div>
         <div className={`${styles.box} my-2`}>
              <span className={styles.span}></span>
              <p className={styles.text}>Ayush</p>
            </div>
    </div>
    </>
  )
}

export default Bid
