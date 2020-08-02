import React from "react";
import styles from "./Information.module.css";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <main className={styles.infoSection}>
      <h2>Pataran - Success through digital innovation</h2>
      <div className={styles.sectionOne}>
        <p>
          Pataran brings you the best in IT services – be it IT consulting, web
          design &amp; development, digital marketing or web &amp; application
          development. We craft creative designs that catch eyes and bring you
          the high returns on investments. Don’t get surprised after seeing us
          behind the success of top-notch brands in the globe. Our cutting-edge
          web development precisely fits with the ever-evolving demands of your
          business, assuring your success over your competitors. Giving your
          brand the online exposure is on our priority list, so let’s take your
          business on the ride to digital success!
        </p>
        <img
          src="https://www.softuvo.com/wp-content/uploads/2015/10/Softuvo-Solutions-Success-Through-Digital-Innovation-Home-page-image.jpeg"
          alt="fist bump"
        />
      </div>
      <h2>Our Services</h2>
      <div className={styles.sectionTwo}>
        <div className={styles.knowMoreSection}>
          <h3>IT CONSULTING</h3>
          <p>What if we say we have an advice that could cut your business overheads & boost productivity? Harness the power of IT with our expert IT consultation!</p>
          <Link to="/">Read More</Link>
        </div>
        <div className={styles.knowMoreSection}>
          <h3>WEB AND APP DEVELOPMENT</h3>
          <p>Want to target mobile customers? Or want to develop a web app platform to smooth out the business process? Our mobile & web app development could fill your needs!</p>
          <Link to="/">Read More</Link>
        </div>
        <div className={styles.knowMoreSection}>
          <h3>DIGITAL MARKETING</h3>
          <p>Have you lost your online rankings due to the recent Google algorithm changes? No worries, Softuvo can help you regain the rankings in a short time.</p>
          <Link to="/">Read More</Link>
        </div>
      </div>
    </main>
  );
};

export default Information;
