import React from "react";
import styles from "./Contact.module.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const Contact = () => {
  return (
    <div className={styles.contactSection}>
      <div className={styles.contactHeader}>
        <h1>Contact The Technology Giant To Write Your Success Story Today!</h1>
        <h2>One More Leap Towards Softuvo To Get Done That’s Still Undone!</h2>
      </div>
      <div className={styles.contactFormSection}>
        <div className={styles.contactForm}>
          <h2>We Would Be Glad To Hearing From You!</h2>
          <div className={styles.bigFiller}></div>
          <p>
            No matter what’s the time on your clock, we are always accessible.
            Having a project idea in your mind? Reach us any time to discuss
            about your website/app development needs!
          </p>
          <h3>
            Fill Out The Form Below To Get A No Obligation Quotation For Your
            Project!
          </h3>
          <form className={styles.form}>
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
          Submit Now
        </button>
      </form>

        </div>
        <div className={styles.addressInfo}>
          <h2>Connect with us!</h2>
          <div className={styles.filler}></div>
          <div className={styles.socialLinks}>
            <FacebookIcon fontSize="large" />
            <InstagramIcon fontSize="large" />
            <TwitterIcon fontSize="large" />
            <PinterestIcon fontSize="large" />
            <LinkedInIcon fontSize="large" />
          </div>
          <h2>Address <span style={{color: "#060625"}}>Info</span></h2>
          <div className={styles.filler}></div>
          <h4>Mohali Office</h4>
          <p>E-261, Industrial Area,</p>
          <p>Phase – 8B,Mohali</p>
          <p>
            <strong>Mohali:</strong> 01724670301
          </p>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:info@softuvo.com">info@softuvo.com</a>
          </p>
        </div>
      </div>
      <div className={styles.mapArea}>
        <img
          src="https://cdn.filestackcontent.com/qfzkumr0RE27pdC8tqeH"
          alt="Address of Softuvo"
        />
      </div>
    </div>
  );
};

export default Contact;
