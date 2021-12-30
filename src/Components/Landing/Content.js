import React from "react";
import { useSelector } from "react-redux";

const Content = () => {
  const jobReducer = useSelector((state) => state.jobReducer);
  const { jobs } = jobReducer;

  return <div></div>;
};

export default Content;
