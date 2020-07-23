import React from "react";
import styles from "./Address.module.css";

const Address = () => {
  return (
    <div className={styles.addressSection}>
      <form className={styles.form}>
          <h2>Get Started</h2>
          <div className={styles.inputs}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className={styles.inputBox}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className={styles.inputBox}
        />
        </div>
        <textarea
          className={styles.textAreaInput}
          name="message"
          placeholder="Your Message"
        ></textarea>
        <button type="submit" className={styles.submitBtn}>
          Send Message
        </button>
      </form>
      <div className={styles.mapArea}>
        <img
          src="https://cdn.filestackcontent.com/qfzkumr0RE27pdC8tqeH"
          alt="Address of Softuvo"
        />
      </div>
    </div>
  );
};

export default Address;
