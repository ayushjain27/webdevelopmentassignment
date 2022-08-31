import React from "react";

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
      <div className="container">
        <div className="row">
          <div className="col-md-6 d-flex">
            <div >
                <img src={main_product_svg} alt="" />
            </div>
            <div>
                <h3>{product_title}</h3>
                <p>{product_pipeline}</p>
                <h4>{online_price}</h4>
                <h5>{quantity}</h5>
            </div>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </>
  );
};

export default Product;
