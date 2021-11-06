import React from "react";
import styles from "../styles/ContentOne.module.css";
import { page_one } from "./Animations";
import { motion } from "framer-motion";

const ContentOne = () => {
  const background = {
    backgroundImage: `url('/images/image1.jpg')`,
  };
  return (
    <motion.div className={styles.parent} variants={page_one} animate="show">
      <div className={styles.top_bar}>
        <div className={styles.logo}>
          <div className={styles.icon}></div>
          <h1 className={styles.logo_h1}>SimpleDesk</h1>
        </div>
      </div>

      <div style={background} className={styles.hero}>
        <div className={styles.hero_overlay}>
          <h1 className={styles.hero_h1}>
            You're busy. I'm not. Let's switch that around.
          </h1>
          <h2 className={styles.hero_h2}>Julia Thompson | Virtual Assistant</h2>
          <h3 className={styles.hero_h3}>
            Delegate your workload and 10X your productivity with a virtual
            assistant today! Get experienced, professional help with a range of
            skills to make your job—and life—10x easier.
          </h3>
          <button className={styles.hero_button}>Book consultaion</button>
          <h4 className={styles.hero_h4}>Let's talk—no commitment. </h4>
        </div>
      </div>
    </motion.div>
  );
};
export default ContentOne;
