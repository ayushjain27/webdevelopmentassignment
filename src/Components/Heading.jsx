import React from "react";
import styles from "./Heading.module.css";

const Heading = (props) => {
  let { imageUrl, sub_heading, heading } = props;

  return (
    <>
      <div
        className={`${styles.container} d-flex justify-content-center align-items-center m-auto`}
      >
        <img className={styles.image} src={imageUrl} alt="" />
        <div className="d-flex flex-column">
          <h1>{heading}</h1>
          <p className="text-center">{sub_heading}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
