import React from "react";
import styles from "./Heading.module.css";

const Heading = (props) => {
  let { imageUrl, sub_heading, heading } = props;

  return (
    <>
      <div
        className={`${styles.container} d-flex flex-wrap justify-content-center align-items-center m-auto my-3 p-4`}
      >
        <img className={styles.image} src={imageUrl} alt="" />
        <div className="d-flex flex-column my-3">
          <h1 className="text-center">{heading}</h1>
          <p className="text-center">{sub_heading}</p>
        </div>
      </div>
    </>
  );
};

export default Heading;
