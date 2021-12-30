import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Content from "../Components/Landing/Content";
import Header from "../Components/Shared/Header";
import { getJobs } from "../redux/Jobs/action";
import { HompageConatainer } from "../styles/LandingPage.styles";

const Landing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <HompageConatainer>
      <Header />
      <Content />
    </HompageConatainer>
  );
};

export default Landing;
