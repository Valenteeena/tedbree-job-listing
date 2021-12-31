import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ContentStyle } from "../../styles/LandingPage.styles";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SingleJob from "./SingleJob";

const Content = () => {
  const jobReducer = useSelector((state) => state.jobReducer);
  const { jobs } = jobReducer;

  const [sortBy, setSortBy] = useState("latest");

  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  return (
    <ContentStyle>
      <div className="topContent">
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
        <div className="jobContent">
          <div className="jobList">
            {jobs.data.map((jb) => (
              <SingleJob job={jb} />
            ))}
          </div>
          <div className="jobDesc"></div>
        </div>
      )}
    </ContentStyle>
  );
};

export default Content;
