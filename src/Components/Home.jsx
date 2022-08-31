import React, { useState, useEffect } from "react";
import Heading from "./Heading";

const Home = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const response = await fetch(
      `https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/`,
      {
        method: "GET",
      }
    );
    const json = await response.json();
    console.log(Object.values(json));
    setData(Object.values(json));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {data.map((element) => {
        return (
          <div>
            <Heading
              heading={element.heading}
              sub_heading={element.sub_heading}
              imageUrl={element.svg}
            />
          </div>
        );
      })}
    </>
  );
};

export default Home;
