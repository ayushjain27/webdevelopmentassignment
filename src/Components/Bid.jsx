import React from "react";
import styles from "./Bid.module.css";

const Bid = (props) => {
  let {
    shop_name,
    shop_address,
    shop_image,
    offer_price,
    express_delivery,
    return_option,
    check_icon,
    cross_icon,
    express_delivery_icon,
    return_option_icon,
    extra_offer_icon,
    product_name,
    alternate_product_details,
    alternate_product_details_online_price_icon,
    alternate_product_details_online_price,
    alternate_product_details_offer_price,
  } = props;
  return (
    <>
      <div className="my-2">
        <div className={`${styles.box} my-2`}>
          <span className={styles.span}></span>
          <div className="d-flex flex-column justify-content-center align-items-center p-2">
            <img className={`${styles.img} my-3`} src={shop_image} alt="" />
            <h4 className={`${styles.text} text-center text-white`}>
              {shop_name}
            </h4>
            <div
              className={`${styles.shop} text-center border border-warning border-3 rounded p-2`}
            >
              <h5 className="text-white fw-bold">{shop_address}</h5>
              <p className="fs-3 fw-bold badge bg-danger">Rs. {offer_price}</p>
            </div>
            <h4 className={`${styles.text} text-start text-white my-3`}>
              Delivery & Services
            </h4>
            <div className="d-flex justify-content-around w-100">
              <img className={styles.text} src={express_delivery_icon} alt="" />
              <div className="d-flex flex-column">
                <h5 className={`${styles.text} text-start text-white`}>
                  Express Delivery
                </h5>
                <span className={`${styles.text} text-start text-white`}>
                  ( delivery in 1 hour )
                </span>
              </div>
              {express_delivery ? (
                <img className={styles.text} src={check_icon} alt="" />
              ) : (
                <img className={styles.text} src={cross_icon} alt="" />
              )}
            </div>
            <div className="d-flex justify-content-around w-100 my-2">
              <img className={styles.text} src={return_option_icon} alt="" />
              <h5 className={`${styles.text} text-start text-white`}>
                Return Option
              </h5>
              {return_option ? (
                <img className={styles.text} src={check_icon} alt="" />
              ) : (
                <img className={styles.text} src={cross_icon} alt="" />
              )}
            </div>
            <div
              className={`${styles.text} badge bg-success me-auto mx-2 my-2`}
            >
              <h5 className="fw-bold">
                <img className="mx-2" src={extra_offer_icon} alt="" />
                Extra Offer
              </h5>
            </div>
            <div className={`${styles.text} text-white fw-bold p-2`}>
              <p>{product_name}</p>
            </div>
            <div className={`${styles.text} badge bg-warning my-1 text-dark`}>
              <h3>Buy Now</h3>
            </div>
            <h5 className={`${styles.text} text-white me-auto mx-2 my-3`}>Alternate Products</h5>
            <div className={`${styles.texts} d-flex`}>
                    <img className={`${styles.image} my-3 mx-2`} src="./Images/download.jpeg" alt="" />
              <div className="d-flex flex-column">
                <h5 className="text-white text-center">
                  {alternate_product_details}
                </h5>
                <div className="d-flex flex-wrap justify-content-center my-3">
                  <img
                    src={alternate_product_details_online_price_icon}
                    alt=""
                  />
                  <span className={`${styles.price} fs-4 mx-2 text-white`}>
                    {alternate_product_details_online_price}
                  </span>
                  <span className="fs-4 mx-2 text-white">
                    {alternate_product_details_offer_price}
                  </span>
                  <div
                    className={`${styles.text} badge bg-warning my-2 mx-1 text-dark`}
                  >
                    <h3>Order Now</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bid;
