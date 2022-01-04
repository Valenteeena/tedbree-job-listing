import React from "react";
import styles from "../../styles/LandingStyles.module.css";
import logo from "../../assets/FindJobs.png";
import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

const AdminFooter = () => {
  return (
    <section className={styles.aFooterStyle}>
      <div>
        <img src={logo} alt="logo" />
      </div>
      <div>
        <p>
          &copy; 2021 <span>FindJobs</span>
        </p>{" "}
      </div>
      <div>
        <p>Terms and Condition</p>
      </div>
      <div>
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

export default AdminFooter;
