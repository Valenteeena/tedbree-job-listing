import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SingleJob from "./SingleJob";
import styles from "../../styles/LandingStyles.module.css";

const Content = () => {
  const jobReducer = useSelector((state) => state.jobReducer);
  const { jobs } = jobReducer;

  const [sortBy, setSortBy] = useState("latest");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <section className={styles.ContentStyle}>
      <div className={styles.topContent}>
        {jobs && (
          <h2>Showing {jobs.length !== 0 ? jobs.meta.total : 0} results</h2>
        )}
        <h3 style={{ display: "flex", alignItems: "center" }}>
          Sort by:{" "}
          <FormControl variant="standard" style={{ paddingLeft: ".5rem" }}>
            <Select
              id="demo-simple-select"
              value={sortBy}
              onChange={handleChange}>
              <MenuItem value={"latest"}>Latest</MenuItem>
              <MenuItem value={"oldest"}>Oldest</MenuItem>
            </Select>
          </FormControl>
        </h3>
      </div>
      {jobs && jobs.data.length !== 0 && (
        <div className={styles.jobContent}>
          <div className={styles.jobList}>
            {jobs.data.map((jb) => (
              <SingleJob job={jb} />
            ))}
          </div>
          <div className={styles.jobDesc}>
            <h1 className="text-3xl font-bold underline text-red-600">
              Hello world!
            </h1>
          </div>
        </div>
      )}
    </section>
  );
};

export default Content;
