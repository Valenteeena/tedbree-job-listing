import React, { useEffect, useState } from "react";
import styles from "../styles/LoginStyles.module.css";
import logo from "../assets/Logo.png";
import hero from "../assets/hero.png";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Authentication/action";
import { Link, useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authReducer = useSelector((state) => state.authReducer);
  const { loading, detail } = authReducer;

  const loginandler = (e) => {
    e.preventDefault();
    // console.log(email, password);
    dispatch(login(email, password));
  };

  useEffect(() => {
    if (detail) {
      navigate("/admin");
    }
  }, [detail, navigate]);

  return (
    <section className={styles.LoginContainer}>
      <img src={logo} alt="logo" />
      <main>
        <div>
          <h1>Find the best candidates for your organisation. </h1>
          <img src={hero} alt="hero" />
        </div>
        <div>
          <h2>Login</h2>
          <form action="#" onSubmit={loginandler}>
            <aside>
              <label>Email address</label> <br />
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </aside>
            <aside>
              <label>Password</label> <br />
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </aside>
            <button>
              {loading ? <CircularProgress size={20} /> : "Login"}
            </button>
          </form>
          <p className="pt-4 font-bolder">
            No Account?{" "}
            <Link to="/register" className="text-[#0f4a7b]  font-extrabold">
              Register here
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
};

export default Login;
