import React, { useState, useEffect } from "react";
import Heading from "./Heading";
import Product from "./Product";

const Home = () => {
  const [heading, setHeading] = useState([]);
  const [product, setProduct] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    console.log(Object.values(json));
    setHeading(Object.values(json));
    setProduct(Object.values(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {heading.slice(1,2).map((element, index) => {
        return (
          <div>
            <Heading key={index}
              heading={element.heading}
              sub_heading={element.sub_heading}
              imageUrl={element.svg}
              />
          </div>
            );
          })}
      {product.slice(2,3).map((element, index) => {
        return (
          <div>
            <Product key={index}
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
    </>
  );
};

export default Home;
