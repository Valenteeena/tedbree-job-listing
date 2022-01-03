import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SingleJob from "./SingleJob";
import styles from "../../styles/LandingStyles.module.css";
import { GoLocation } from "react-icons/go";
import ApplyModal from "./ApplyModal";

const Content = () => {
  const jobReducer = useSelector((state) => state.jobReducer);
  const { jobs, current_job, currentId } = jobReducer;

  const [sortBy, setSortBy] = useState("latest");
  const [show, setShow] = useState(true);

  const closeFrm = (e) => {
    setShow(!show);
  };

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
              <SingleJob job={jb} currentId={currentId} />
            ))}
          </div>
          <div className={styles.jobDesc}>
            {current_job && (
              <>
                <div>
                  <h1>{current_job.title}</h1>
                  <h2 style={{ alignItems: "center", display: "flex" }}>
                    <GoLocation
                      color="#62BECB"
                      fontSize="22px"
                      style={{ marginRight: ".5rem" }}
                    />
                    {current_job.location}
                  </h2>{" "}
                  <button
                    onClick={(e) => {
                      closeFrm();
                    }}>
                    Apply Via Find Job
                  </button>
                </div>
                <article>
                  <p>{current_job.description}</p>
                  <ul>
                    <li>
                      <strong>Company:</strong> {current_job.company}
                    </li>
                    <li>
                      <strong>Job type:</strong> {current_job.type} /{" "}
                      {current_job.work_condition}
                    </li>
                    <li>
                      <strong>Salary:</strong> &#8358;{" "}
                      {" " + current_job.salary}
                    </li>
                    <li>
                      <strong>Other benefits:</strong> {current_job.benefits}
                    </li>
                  </ul>
                </article>
              </>
            )}
          </div>
        </div>
      )}
      <ApplyModal job={current_job} show={show} closeFrm={closeFrm} />
    </section>
  );
};

export default Content;
