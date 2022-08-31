import React from "react";
import styles from './Heading.module.css';

const Heading = (props) => {

  let { imageUrl, sub_heading, heading } = props;

  return (
    <>
        <div className={`${styles.container} d-flex justify-content-center align-items-center bg-dark text-white h-25 m-auto`}>
            <img src={imageUrl} alt="" />
            <div className="d-flex flex-column">
            <h1>{heading}</h1>
            <p>{sub_heading}</p>
            </div>
        </div>
    </>
  );
};

export default Heading;
