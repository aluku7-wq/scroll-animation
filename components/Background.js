import React from "react";
import Image from "next/image";
import styles from "../styles/ContentOne.module.css";

const Background = () => {
  return (
    <div className={styles.hero}>
      <img
        src="/images/image1.jpg"
        alt="Picture of the author"
        layout="fill"
        className={styles.img}
      />
    </div>
  );
};

export default Background;
