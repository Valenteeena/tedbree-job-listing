import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../Components/Landing/Content";
import Header from "../Components/Shared/Header";
import { getJobs } from "../redux/Jobs/action";
import styles from "../styles/LandingStyles.module.css";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <main className={styles.HompageConatainer}>
      <Header />
      <Content />
    </main>
  );
};

export default Landing;
