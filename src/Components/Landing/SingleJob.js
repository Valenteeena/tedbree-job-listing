import React from "react";
import { GoLocation } from "react-icons/go";
import styles from "../../styles/LandingStyles.module.css";

const SingleJob = ({ job }) => {
  return (
    <section className={styles.SingleJobDiv} key={job.id}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "0",
        }}>
        <h1> {job.title}</h1>
        <h1> &#8358; {job.salary}</h1>
      </div>
      <h2 style={{ alignItems: "center", display: "flex" }}>
        <GoLocation
          color="#62BECB"
          fontSize="16px"
          style={{ marginRight: ".3rem" }}
        />
        {job.location}
      </h2>
      <p>{job.description}</p>
      <button>See More</button>
    </section>
  );
};

export default SingleJob;
