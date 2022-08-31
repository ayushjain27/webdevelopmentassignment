import React from "react";
import styles from "./Product.module.css";

const Product = (props) => {
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
      <div className={`${styles.container} container-fluid my-3`}>
        <div className="row">
          <div className="col-md-7 d-flex my-3">
            <div className="row">
              <div className="col-md-3">
                <img className={styles.img} src={main_product_svg} alt="" />
              </div>
              <div className="col-md-9">
                <div className="container">
                  <h4 className="fs-4">{product_title}</h4>
                  <h4 className={styles.pipeline}>{product_pipeline}</h4>
                  <div className="flex flex-row">
                    <img src={online_price_icon} alt="" />
                    <span className={`${styles.price} fs-3 mx-2`}>
                      {online_price}
                    </span>
                  </div>
                  <h5 className="my-2">Qty: {quantity}</h5>
                  <h3 className={`${styles.details} my-3`}>All Details</h3>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1">
            <hr className={styles.hr} />
          </div>
          <div className="col-md-4 my-3 d-flex flex-column justify-content-between">
            <div>
              <h1>
                Status <img src={status_icon} alt="" />
              </h1>
            </div>
            <div className="my-3 mb-auto">
              <h3>Time Remaining</h3>
              <h3 className={styles.text}>{time_remaining} minutes</h3>
            </div>
            <div className="d-flex my-3">
              <h2>BIDS PLACED</h2>
              {/* <hr /> */}
              <h2 className="mx-3">0{bid_placed}</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
