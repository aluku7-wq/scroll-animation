import styles from "../styles/Home.module.css";
import { useState, useRef, useEffect } from "react";
import ContentOne from "../components/ContentOne";
import ContentTwo from "../components/ContentTwo";

export default function Home() {
  const [StateOne, setStateOne] = useState(false);
  const [StateTwo, setStateTwo] = useState(false);

  const sectionone = useRef();
  const sectiontwo = useRef();

  const options = {
    root: null,
    threshhold: 0.5,
  };

  useEffect(() => {
    const sections = [sectionone.current, sectiontwo.current];

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (
          entry.target === sectionone.current &&
          entry.isIntersecting === true
        ) {
          setStateOne(true);
        } else {
          setStateOne(false);
        }
        if (
          entry.target === sectiontwo.current &&
          entry.isIntersecting === true
        ) {
          setStateTwo(true);
          console.log("section2");
        } else {
          setStateTwo(false);
        }
      });
    }, options);
    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.sectionone} ref={sectionone}>
        <ContentOne />
      </div>
      <div className={styles.sectiontwo} ref={sectiontwo}>
        <br />

        <br />
        {!StateTwo ? <ContentTwo /> : <p></p>}
      </div>
    </div>
  );
}
