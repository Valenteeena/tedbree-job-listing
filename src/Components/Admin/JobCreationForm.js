import React, { useState } from "react";
import styles from "../../styles/LandingStyles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { createJob } from "../../redux/Jobs/action";

const JobCreationForm = (props) => {
  const dispatch = useDispatch();

  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [benefits, setBenefits] = useState("");
  const [salary, setSalary] = useState("");
  const [type, setType] = useState("");
  const [work_condition, setWork_condition] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let subValues = {
      title,
      description,
      category,
      location,
      benefits,
      salary,
      type,
      work_condition,
    };
    console.log(subValues);
    dispatch(createJob(subValues));
    props.closeFrm();
  };
  if (!props.show) {
    return null;
  }
  return (
    <section className={styles.ApplyModal}>
      <div>
        <button onClick={closeFrm}>
          <AiOutlineClose fontSize="20px" fontWeight="800" />
        </button>
        <h1>New Job</h1>
        <p>
          Kindly provide the required information to get matched with suitable
          candidates
        </p>
        <form onSubmit={handleSubmit} action="#">
          <aside>
            <label>Job Title</label> <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </aside>
          <aside>
            <label>Description</label> <br />
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </aside>
          <aside>
            <label>Location</label> <br />
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </aside>
          <aside>
            <label>What type of employement is it?</label> <br />
            <input
              type="text"
              value={type}
              onChange={(e) => setType(e.target.value)}
            />
          </aside>
          <aside>
            <label>Salary Range</label> <br />
            <input
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </aside>
          <aside>
            <label>Benefits</label> <br />
            <input
              type="text"
              value={benefits}
              onChange={(e) => setBenefits(e.target.value)}
            />
          </aside>
          <aside>
            <label>What Sector is this job categorized under?</label> <br />
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </aside>
          <aside>
            <label>Work condition</label> <br />
            <input
              type="text"
              value={work_condition}
              onChange={(e) => setWork_condition(e.target.value)}
            />
          </aside>

          <button disabled={work_condition === "" ? true : false}>
            Submit Job
          </button>
        </form>
      </div>
    </section>
  );
};

export default JobCreationForm;
