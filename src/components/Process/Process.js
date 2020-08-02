import React from "react";
import styles from "./Process.module.css";

const Process = () => {
  return (
    <>
      <h2 className={styles.processHeading}>Our Process</h2>
      <div className={styles.processSection}>
        <div className={styles.step}>
          <div className={styles.stepNumber}>1</div>
          <div className={styles.stepInfo}>
            <h3>SET PLANS!</h3>
            <p>
              Pataran believes in delivering out-of-the-box IT solutions that
              require brainstorming sessions. After getting briefed from you
              about your project, we start out with discovery sessions.
            </p>
            <p>
              During sessions, we weave a smart strategy to overcome the
              foreseen challenges and can add value to your business. Regardless
              of the nature of your project, we always strive to give it the
              creative spark to achieve success in the first attempt!
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>2</div>
          <div className={styles.stepInfo}>
            <h3>CREATIVE DESIGN!</h3>
            <p>
              At Pataran, we understand that behind every successful IT project,
              there is always a creative design. So, we do our best efforts to
              grab more eyeballs for your brand.
            </p>
            <p>
              Our web designers have the magic wand that lets them design
              something appealing every time. You probably need those chunks of
              creative pieces that will make you say “WoW”
            </p>
          </div>
        </div>
        <div className={styles.step}>
          <div className={styles.stepNumber}>3</div>
          <div className={styles.stepInfo}>
            <h3>BUILD MEANINGFUL!</h3>
            <p>
              Our creative coders start doing development part once the design
              gets finalized. Building clean codes is their everyday business.
            </p>
            <p>
              We love technology and keep ourself updated with every
              transformation in IT industry. We leverage this knowledge to
              deliver you the IT excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Process;
