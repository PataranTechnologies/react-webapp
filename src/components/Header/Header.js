import React from "react";
import { NavLink, Link } from "react-router-dom";

import InstagramIcon from "@material-ui/icons/Instagram";
import PinterestIcon from "@material-ui/icons/Pinterest";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.mainHeader}>
      <nav className={styles.mainNav}>
        <Link className={styles.logo} to="/">Pataran</Link>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink to="/about">About</NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li className={styles.navLink}>
            <NavLink to="/contact">Contact Us</NavLink>
          </li>
        </ul>
        <ul className={styles.socialLinks}>
          <li className={styles.socialLink}>
            <NavLink to="http://www.instagram.com">
              <InstagramIcon />
            </NavLink>
          </li>
          <li className={styles.socialLink}>
            <NavLink to="http://www.facebook.com">
              <PinterestIcon />
            </NavLink>
          </li>
          <li className={styles.socialLink}>
            <NavLink to="http://www.twitter.com">
              <TwitterIcon />
            </NavLink>
          </li>
          <li className={styles.socialLink}>
            <NavLink to="http://www.pinterest.com">
              <FacebookIcon />
            </NavLink>
          </li>
          <li className={styles.socialLink}>
            <NavLink to="http://www.pinterest.com">
              <LinkedInIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
