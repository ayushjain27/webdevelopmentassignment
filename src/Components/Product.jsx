import React from "react";
import styles from './Product.module.css'

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
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9 d-flex">
                <img className={styles.img} src={main_product_svg} alt="" />
            <div>
                <h4>{product_title}</h4>
                <h4>{product_pipeline}</h4>
               <img src={online_price_icon} alt="" />
                <h4>{online_price}</h4>
                <h5>{quantity}</h5>
            </div>
          </div>
          <div className="col-md-3">
            <div>
                <h1>Status <img src={status_icon} alt="" /></h1>
            </div>
            <div>
                <h4>{time_remaining}</h4>
            </div>
            <div>
                <h4>{bid_placed}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
