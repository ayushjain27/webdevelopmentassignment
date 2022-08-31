import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Product from "./Product";
import Bid from "./Bid";

const Home = () => {
  const [heading, setHeading] = useState([]);
  const [product, setProduct] = useState([]);
  const [bid, setBid] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    console.log(Object.values(json));
    console.log(json.bids);
    setHeading(Object.values(json));
    setProduct(Object.values(json));
    setBid(json.bids);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {heading.slice(1, 2).map((element, index) => {
        return (
          <div>
            <Heading
              key={index}
              heading={element.heading}
              sub_heading={element.sub_heading}
              imageUrl={element.svg}
            />
          </div>
        );
      })}
      {product.slice(2, 3).map((element, index) => {
        return (
          <div>
            <Product
              key={index}
              product_title={element.product_title}
              product_pipeline={element.product_pipeline}
              main_product_svg={element.main_product_svg}
              online_price={element.online_price}
              quantity={element.quantity}
              status_icon={element.status_icon}
              online_price_icon={element.online_price_icon}
              time_remaining={element.time_remaining}
              bid_placed={element.bid_placed}
            />
          </div>
        );
      })}
      <div className="container-fluid d-flex flex-wrap justify-content-around">
          {bid.map((element) => {
            return (
                <Bid
                  shop_name={element.shop_name}
                  shop_address={element.shop_address}
                  shop_image={element.shop_image}
                  offer_price={element.offer_price}
                  express_delivery={element.express_delivery}
                  return_option={element.return_option}
                  check_icon={element.check_icon}
                  cross_icon={element.cross_icon}
                  express_delivery_icon={element.express_delivery_icon}
                  return_option_icon={element.return_option_icon}
                  extra_offer_icon={element.extra_offer_icon}
                  product_name={element.product_name}
                  alternate_product_details={element.alternate_product_details.product_name}
                  alternate_product_details_online_price_icon={element.alternate_product_details.online_price_icon}
                  alternate_product_details_online_price={element.alternate_product_details.online_price}
                  alternate_product_details_offer_price={element.alternate_product_details.offer_price}
                />
            );
          })}
      </div>
    </>
  );
};

export default Home;
