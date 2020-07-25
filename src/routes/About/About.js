import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import ComputerIcon from "@material-ui/icons/Computer";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import BarChartIcon from "@material-ui/icons/BarChart";

const About = () => {
  const [features, setFeatures] = useState([
    {
      heading: "We Create Positive Experiences!",
      body:
        "No over-promises rather we create awesome experiences and drive results for your business. We have a great insight to corporate branding and you will experience the impact by having more business than what you are having currently.",
      show: false,
    },
    {
      heading: "We Listen Well & Follow Strictly!",
      body:
        "Be it a simple website design with minimal features or a complex web application development, we listen to client needs. At every point of development, we would keep you in loop to inform you about the updates.",
      show: false,
    },
    {
      heading: "We Operate On Time And On Budget!",
      body:
        "Softuvo charges highly competitive pricing and deliver projects on time and budget of clients. Our prime concern is to deliver you the satisfaction through our IT expertise. We respect deadlines and stick to the ones!",
      show: false,
    },
    {
      heading: "We Offer Broad IT Expertise Under One-Roof!",
      body:
        "We have left no industry untouched with our IT expertise, be it e-commerce or healthcare industry. We are everywhere and could help you out with any kind of IT services under one-roof. Regardless of your niche, we are here to deliver the IT excellence!",
      show: false,
    },
  ]);

  const featureExpandHandler = (index) => {
    console.log(features);

    const resetFeatures = features.map((feature) => {
      return { ...feature, show: false };
    });

    const updatedFeatures = resetFeatures.map((feature, i) => {
      if (i === index) {
        return { ...feature, show: true };
      }
      return feature;
    });
    setFeatures(updatedFeatures);

    setTimeout(() => {
      const resetFeatures = features.map((feature) => {
        return { ...feature, show: false };
      });
      setFeatures(resetFeatures);
    }, 10000);
  };

  return (
    <>
      <div className={styles.aboutContainer}>
        <div className={styles.heroContainer}>
          <h1>About Softuvo - IT Giant</h1>
          <p>Softuvo - The Other Name of Success!</p>
        </div>
        <div className={styles.welcomeMessage}>
          <div className={styles.welcomeImage}>
            <img
              src="https://www.softuvo.com/wp-content/uploads/2015/12/Welcome-to-Softuvo-About-us.jpeg"
              alt="Welcome to Softuvo"
            />
          </div>
          <div className={styles.welcomeText}>
            <h3>
              Welcome to{" "}
              <span style={{ color: "var(--primary-green-color)" }}>
                Softuvo
              </span>
            </h3>
            <div></div>
            <p>
              We are Softuvo Solutions, your launchpad to the online success. We
              weave technology that can take your business to success levels.
              Technology runs through our nerves and we are a great fit for
              businesses demanding cutting-edge technology solutions. When you
              find yourself locked up in increasing business overheads, our
              expert IT consultation could set you free, saving millions of
              dollars.
            </p>{" "}
            <p>
              We are born out to show the world the power of information
              technology through our expertise in contemporary web development,
              design, web applications &amp; mobile apps – anything under the
              Sun in the world of IT. Wondering how would you win the SEO
              marathon with a snail’s speed? Let us be your cheetah, trust us
              once in the digital race and we would surpass your competitors’
              Google rankings in a flash. Let’s meet at the top!
            </p>
          </div>
        </div>
        <div className={styles.postWelcomeSection}>
          <h2>
            Multi-Talented Team of{" "}
            <span style={{ color: "var(--primary-green-color)" }}>
              IT Professionals
            </span>{" "}
            That Does Magic With Codes!
          </h2>
          <div></div>
          <p>
            Softuvo not just fills up the numbers in our staff, but with the
            right talent, exclusively filtered to help you succeed in the online
            world. Our team of skilled developers, designers and social media
            specialists have a strong passion for what they do. We love them
            seeing putting sweat to accomplish your business goals and so would
            you after seeing the amazing results on your table. Wait no more in
            hiring our army of professionals who can win the online battle with
            clean codes!
          </p>
        </div>
        <div className={styles.specialBackgroundSection}>
          <h2>
            Privileged To{" "}
            <span style={{ color: "var(--primary-green-color)" }}>
              Work With Diverse
            </span>{" "}
            Clients!
          </h2>
          <div></div>
          <p>
            At Softuvo, we have clients across the continents, contributing to
            our rich portfolio. From the day of our evolution, we have never
            looked back and achieving soaring heights everyday in the web world
            with our creative work!
          </p>
        </div>
        <div className={styles.statsSection}>
          <div className={styles.features}>
            <h2>
              Why choose{" "}
              <span style={{ color: "var(--primary-green-color)" }}>
                Softuvo
              </span>{" "}
              as your IT partner?
            </h2>
            {features.map((feature, index) => {
              return (
                <div
                  className={
                    features[index].show
                      ? `${styles.feature} ${styles.expand}`
                      : styles.feature
                  }
                  key={feature + index}
                >
                  <div className={styles.featureHeading} style={features[index].show ? {color: 'var(--primary-green-color)'} : {color: '#828282'}}>
                    <span onClick={featureExpandHandler.bind(null, index)}>
                      {features[index].show ? <RemoveIcon/> : <AddIcon />}
                    </span>
                    {feature.heading}
                  </div>
                  <div
                    className={
                      features[index].show
                        ? `${styles.featureBody} ${styles.show}`
                        : styles.featureBody
                    }
                  >
                    {feature.body}
                  </div>
                </div>
              );
            })}
          </div>
          <div className={styles.stats}>
            <h2>
              Our{" "}
              <span style={{ color: "var(--primary-green-color)" }}>Core</span>{" "}
              Skills
            </h2>
            <div className={styles.statBox}>
              <PersonOutlineIcon style={{ color: "#050527", fontSize: 'big', transform: 'scale(1.4)' }} />
              <div className={styles.statsBar}>
              <div className={styles.statsInfo}>
                      <div>IT Consultancy</div>
                      <div>100%</div>
                  </div>
                <div className={styles.progress}></div>
              </div>
            </div>
            <div className={styles.statBox}>
              <ComputerIcon style={{ color: "#050527", fontSize: 'big', transform: 'scale(1.4)' }} />
              <div className={styles.statsBar}>
                  <div className={styles.statsInfo}>
                      <div>Web Design &amp; Development</div>
                      <div>95%</div>
                  </div>
                <div className={styles.progress}></div>
              </div>
            </div>
            <div className={styles.statBox}>
              <SmartphoneIcon style={{ color: "#050527", fontSize: 'big', transform: 'scale(1.4)' }} />
              <div className={styles.statsBar}>
              <div className={styles.statsInfo}>
                      <div>Mobile App Design &amp; Development</div>
                      <div>92%</div>
                  </div>
                <div className={styles.progress}></div>
              </div>
            </div>
            <div className={styles.statBox}>
              <BarChartIcon style={{ color: "#050527", fontSize: 'big', transform: 'scale(1.4)' }} />
              <div className={styles.statsBar}>
              <div className={styles.statsInfo}>
                      <div>Digital Marketing</div>
                      <div>100%</div>
                  </div>
                <div className={styles.progress}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.partnershipSection}>
            <div>Lets explore the possibility of a partnership</div>
            <Link to="/services">Get in Touch</Link>
        </div>
      </div>
    </>
  );
};

export default About;
