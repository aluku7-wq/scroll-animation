import styles from "../styles/ContentTwo.module.css";
import { hero_sec_one, hero_sec_two } from "./Animations";
import { motion } from "framer-motion";

const ContentTwo = () => {
  return (
    <div className={styles.parent}>
      <motion.div
        className={styles.section_one}
        variants={hero_sec_one}
        animate="show"
      >
        <img
          src="/images/image3.jpg"
          alt="aluku"
          layout="fill"
          className={styles.hero_image}
        />
      </motion.div>
      <motion.div
        className={styles.section_two}
        variants={hero_sec_two}
        animate="show"
      >
        <h1 className={styles.hero_h1}>Being busy is a good thing.</h1>
        <h2 className={styles.hero_h2}>
          But it doesn't come without a huge serving of stress and anxiety. Not
          to mention a complete lack of spare time to get things done.
        </h2>
        <h3 className={styles.hero_h3}>
          That's where I come in. Having spent my career as a professional
          assistant, I've helped everyone from C-level enterprise execs to
          startup entrepreneurs clear their to-do lists and make more time for
          the things that matter.
        </h3>
        <button className={styles.hero_button}>book consultation</button>
        <h4 className={styles.hero_h4}>Let's talk—no commitment. </h4>
      </motion.div>
    </div>
  );
};
export default ContentTwo;
