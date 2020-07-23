import React from "react";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';

const Footer = () => {
  return (
      <>
    <div className={styles.mainFooter}>
      <div className={styles.sectionOne}>
        <div className={styles.about}>
          <h3>About Us</h3>
          <p>
            We are Softuvo Solutions, your launchpad to the online success. We
            weave technology that can take your business to success levels.
            Technology runs through our nerves and we are a great fit for
            businesses demanding cutting-edge technology solutions.
          </p>
        </div>
        <div className={styles.navLinks}>
          <h3>Company</h3>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.sectionTwo}>
        <h3>Contacts</h3>
        <p><LocationOnIcon style={{fontSize: 'medium', color:'#b8b7b7'}}/>&nbsp;&nbsp;E-261, Industrial Area, Phase - 8B, Mohali</p>
        <p><PhoneIcon style={{fontSize: 'medium', color:'#b8b7b7'}}/>&nbsp;&nbsp;01724670301</p>
        <p><MailIcon style={{fontSize: 'medium', color:'#b8b7b7'}}/>&nbsp;&nbsp;info@softuvo.com</p>
      </div>
    </div>
    <div className={styles.secondFooter}>
    <p>Softuvo Solutions Private Limited &copy; 2020 | <Link to="/">Softuvo.com</Link></p>
    </div>
    </>
  );
};

export default Footer;
