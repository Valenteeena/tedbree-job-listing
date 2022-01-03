import React from "react";
import styles from "../../styles/LandingStyles.module.css";
import logo from "../../assets/FindJobs.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <section className={styles.FooterStyle}>
      <div>
        <img src={logo} alt="logo" />
        <p>
          &copy; 2021 <span>FindJobs</span>
        </p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Calender</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Calender</li>
          <li>Terms and Condition</li>
        </ul>
      </div>
      <div>
        <h3>Social Media</h3>
        <aside>
          <div className={styles.icon}>
            <FiInstagram />
          </div>
          <div className={styles.icon}>
            <FiFacebook />
          </div>
          <div className={styles.icon}>
            <FiTwitter />
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Footer;
