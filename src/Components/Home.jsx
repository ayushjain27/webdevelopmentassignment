import React, { useState , useEffect} from 'react';

const Home = () => {
    const [data, setData] = useState([]);
    const getData = async () => {
        const response = await fetch(`https://backend-ohlocal-development.umnsbhcb5nb6a.ap-south-1.cs.amazonlightsail.com/api/test_web_assignment/`, {
          method: "GET",
        });
        const json = await response.json();
        console.log(Object.values(json));
        setData(Object.values(json));
      };
    
      useEffect(() => {
        getData();
      }, []);

  return (
    <>
    <h1>Project</h1>
        {data.map((element) => {
              return (
                <div>
                  <h2>{[element.heading]}</h2>
                  <img src={element.svg} alt="" />
                </div>
              );
        })}
    </>
  )
}

export default Home
