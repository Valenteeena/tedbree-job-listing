import React from "react";
import styles from "../../styles/LandingStyles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiUploadCloud } from "react-icons/fi";
const ApplyModal = (props) => {
  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
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
        <h1>{props.job && props.job.title}</h1>
        <h2 style={{ alignItems: "center", display: "flex" }}>
          <GoLocation
            color="#62BECB"
            fontSize="20px"
            style={{ marginRight: ".3rem" }}
          />
          {props.job && props.job.location}
        </h2>
        <form>
          <aside>
            <label>First Name</label> <br />
            <input type="text" name="fname" />
          </aside>
          <aside>
            <label>Last Name</label> <br />
            <input type="text" name="lname" />
          </aside>
          <aside>
            <label>Email address</label> <br />
            <input type="email" name="email" />
          </aside>
          <aside>
            <label>Location</label> <br />
            <input type="text" name="location" />
          </aside>
          <aside>
            <label>Phone Number</label> <br />
            <input type="text" name="phone" />
          </aside>
          <main className={styles.upload}>
            <FiUploadCloud fontSize="80px" color="#0f4a7b" />
            <p>Drag and drop your CV here </p>
            <p>or </p>
            <label>Browse files</label>
            <input type="file" name="cv" />
          </main>
          <button>Submit Application</button>
        </form>
      </div>
    </section>
  );
};

export default ApplyModal;
