import React, { useState } from "react";
import { HeaderContainer } from "../../styles/LandingPage.styles";
import logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
const Header = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <HeaderContainer>
      <div className="topHeader">
        <img src={logo} alt="logo" />
        {isLoggedin ? (
          ""
        ) : (
          <nav>
            <Link to="/" className="active">
              Jobs
            </Link>
            <Link to="/">Company Review</Link>
            <Link to="/">Find Salaries</Link>
            <button>Post Job</button>
          </nav>
        )}
      </div>
      <h1>Find Your Dream Job</h1>
      <div className="search">
        <div style={{ borderRight: "1px solid #62BECB" }}>
          <FiSearch color="#62BECB" fontSize="22px" />
          <input type="text" placeholder="Front end Developer" />
        </div>
        <div style={{ marginLeft: ".5rem" }}>
          <GoLocation color="#62BECB" fontSize="22px" />
          <input type="text" placeholder="Lagos, Nigeria" />
        </div>
        <button>Search</button>
      </div>
    </HeaderContainer>
  );
};

export default Header;
