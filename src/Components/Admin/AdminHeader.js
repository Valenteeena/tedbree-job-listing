import React from "react";
import { Link } from "react-router-dom";
import styles from "../../styles/Admin.module.css";
import logo from "../../assets/Logo.png";
import user from "../../assets/user.png";
import { FiBell } from "react-icons/fi";

const AdminHeader = ({ detail }) => {
  return (
    <section className={styles.AdminHeader}>
      <div className={styles.topHeader}>
        <img src={logo} alt="logo" />

        <nav>
          <FiBell fontSize="25px" color="white" />
          <img
            src={detail && detail.avatar ? detail.avatar : user}
            alt="avatar"
            width="30"
          />
        </nav>
      </div>
      <h1>Jobs</h1>
    </section>
  );
};

export default AdminHeader;
