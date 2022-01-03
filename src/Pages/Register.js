import React, { useState } from "react";
import styles from "../styles/LoginStyles.module.css";
import logo from "../assets/Logo.png";
import hero from "../assets/hero.png";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { register } from "../redux/Authentication/action";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const regHandler = (e) => {
    e.preventDefault();
    console.log(email, password, name);
    dispatch(register(name, email, password));
  };
  return (
    <section className={styles.LoginContainer}>
      <img src={logo} alt="logo" />
      <main>
        <div>
          <h1>Find the best candidates for your organisation. </h1>
          <img src={hero} alt="hero" />
        </div>
        <div>
          <h2>Register</h2>
          <form action="#" onSubmit={regHandler}>
            <aside>
              <label>Business Name</label> <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </aside>
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
            <button>Register</button>
          </form>
          <p className="pt-4 font-bolder">
            Already have an Account?{" "}
            <Link to="/login" className="text-[#0f4a7b]  font-extrabold">
              Login here
            </Link>
          </p>
        </div>
      </main>
    </section>
  );
}

export default Register;
