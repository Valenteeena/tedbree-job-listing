import React from "react";
import styles from "../styles/LoginStyles.module.css";
import logo from "../assets/Logo.png";
import hero from "../assets/hero.png";

const Login = () => {
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
          <form action="#">
            <aside>
              <label>Email address</label> <br />
              <input
                type="email"
                name="email"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </aside>
            <aside>
              <label>Password</label> <br />
              <input
                type="password"
                name="password"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
              />
            </aside>
            <button>Login</button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Login;
