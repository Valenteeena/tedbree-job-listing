import React, { useState } from "react";
import styles from "../../styles/LandingStyles.module.css";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { useDispatch } from "react-redux";
import { searchJobs } from "../../redux/Jobs/action";

const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [searchT, setSearchT] = useState("");
  const dispatch = useDispatch();

  const searchResult = (e) => {
    e.preventDefault();
    dispatch(searchJobs(searchT));
  };
  return (
    <section className={styles.HeaderContainer}>
      <div className={styles.topHeader}>
        <img src={logo} alt="logo" />
        {isLoggedin ? (
          ""
        ) : (
          <nav>
            <Link to="/" className={styles.active}>
              Jobs
            </Link>
            <Link to="/">Company Review</Link>
            <Link to="/">Find Salaries</Link>
            <button>
              <Link to="/login">Post Job</Link>
            </button>
          </nav>
        )}
      </div>
      <h1>Find Your Dream Job</h1>
      <div className={styles.search}>
        <div style={{ borderRight: "1px solid #62BECB" }}>
          <FiSearch color="#62BECB" fontSize="22px" />
          <input
            type="text"
            placeholder="e.g Front end Developer"
            value={searchT}
            onChange={(e) => setSearchT(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: ".5rem" }}>
          <GoLocation color="#62BECB" fontSize="22px" />
          <input type="text" placeholder="Lagos, Nigeria" />
        </div>
        <button onClick={searchResult}>Search</button>
      </div>
    </section>
  );
};

export default Header;
