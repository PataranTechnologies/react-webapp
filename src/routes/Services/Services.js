import React, { useState } from "react";
import styles from "./Services.module.css";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import ComputerIcon from "@material-ui/icons/Computer";
import SmartphoneIcon from "@material-ui/icons/Smartphone";
import TabletAndroidIcon from "@material-ui/icons/TabletAndroid";
import CreateIcon from "@material-ui/icons/Create";
import GroupWorkIcon from "@material-ui/icons/GroupWork";

const Services = () => {
  const [services] = useState([
    {
      heading: "IT Consulting",
      desc:
        "Reduce business overheads, remove bottlenecks in business today, Softuvo’s one advice to put you on the success track today!",
      logo: <SettingsIcon fontSize="large" />,
    },
    {
      heading: "Mobile App Development!",
      desc:
        "Gain the attention of steadily growing number of mobile users with the UI &amp; UX focused mobile application development today!",
      logo: <SmartphoneIcon fontSize="large" />,
    },
    {
      heading: "Web Design!",
      desc:
        "Attract &amp; sell more with our engaging designs. Let our creative designs spell the magic on your customer heart!",
      logo: <CreateIcon fontSize="large" />,
    },
    {
      heading: "Web App Development!",
      desc:
        "Smooth your business process by picking up the right technological platform. Web applications with superfluous features await you!",
      logo: <TabletAndroidIcon fontSize="large" />,
    },
    {
      heading: "Web Development!",
      desc:
        " Clean codes thrill us and this is all we have to offer! Let us empower your website with the most demanding functionalities in your niche!",
      logo: <ComputerIcon fontSize="large" />,
    },
    {
      heading: "Digital Marketing!",
      desc:
        " Why pick a snail’s speed when we can offer you the web rankings at a cheetah’s pace? Ride our roller coaster to gain a top ranking on Google!",
      logo: <GroupWorkIcon fontSize="large" />,
    },
  ]);
  return (
    <div className={styles.servicesSection}>
      <div className={styles.introToServices}>
        <h1 className={styles.introTextOne}>You Choose Softuvo Solutions!</h1>
        <h2 className={styles.introTextTwo}>
          Your Online Success Will Choose You!
        </h2>
      </div>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => {
          return (
            <div className={styles.serviceContainer} key={service + index}>
              <div className={styles.serviceLogo}>{service.logo}</div>
              <div className={styles.serviceInfo}>
                <h3 className={styles.serviceHeading}>{service.heading}</h3>
                <p className={styles.serviceDesc}>{service.desc}</p>
                <Link to="/" className={styles.readMoreBtn}>
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
        <div className={styles.servicesParentContainer}>
          <div className={styles.servicesParentHeading}>
            Unfold <span style={{color: "var(--primary-green-color)"}}>Our Exemplary</span> IT Services!
          </div>
          <div className={styles.filler}></div>
          <p className={styles.servicesParentBody}>
            When it comes to leveraging IT to put an end to business woes, you
            would find Softuvo Solutions at the top of the pinnacle. Browse
            through the services that we offer!
          </p>
        </div>
        <div className={styles.servicesMainImage}>
          <img
            src="https://www.softuvo.com/wp-content/uploads/2015/12/01-HomePage-B3.v1.png"
            alt="Services Offered"
          />
        </div>
      </div>
      <div className={styles.moreInfoSection}>
        <div className={styles.moreInfoHeading}>Why Choose <span style={{color: "var(--primary-green-color)", fontWeight: "500"}}>Softuvo</span> As Your IT Partner?</div>
        <div className={styles.moreInfoBody}>
          <h3>Well Thought-Out Design!</h3>
          <p>
            With a sharp focus on perfect UI &amp; UX, we design passionately to
            create masterpieces!
          </p>

          <h3>We Listen To Client Needs!</h3>
          <p>
            We listen well to client needs and are responsive with fast
            turnaround time!
          </p>

          <h3>Loaded With Relevant Experience!</h3>
          <p>
            We are fully loaded with experience that can make a difference in
            your website design!
          </p>

          <h3>One-Stop IT Solution!</h3>
          <p>
            With comprehensive IT solutions, Softuvo is your one-stop for all IT
            needs!
          </p>

          <h3>We Are Accountable!</h3>
          <p>
            We never let you stay in darkness and are accountable to sharing
            your project progress periodically!
          </p>

          <h3>We Have The Right Tools!</h3>
          <p>
            We have access to technology, IT infrastructure and skilled
            professionals to achieve great results!
          </p>
        </div>
      </div>
      <div className={styles.partnershipSection}>
            <div>Lets explore the possibility of a partnership</div>
            <Link to="/contact">Get in Touch</Link>
        </div>
    </div>
  );
};

export default Services;
