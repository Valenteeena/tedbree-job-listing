import React, { useState } from "react";
import styles from "../../styles/LandingStyles.module.css";
import { AiOutlineClose } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { jobApply } from "../../redux/Jobs/action";

const ApplyModal = (props) => {
  const dispatch = useDispatch();

  const closeFrm = (e) => {
    props.closeFrm && props.closeFrm(e);
  };

  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const [cv, setCv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let subValues = {
      first_name,
      last_name,
      email,
      location,
      phone,
      cv,
    };
    console.log(props.job.id, subValues);
    dispatch(jobApply(props.job.id, subValues));
    props.closeFrm();
  };
  const inputFileRef = React.useRef();

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
        <form onSubmit={handleSubmit} action="#">
          <aside>
            <label>First Name</label> <br />
            <input
              type="text"
              name="fname"
              value={first_name}
              onChange={(e) => setFirst_name(e.target.value)}
            />
          </aside>
          <aside>
            <label>Last Name</label> <br />
            <input
              type="text"
              name="lname"
              value={last_name}
              onChange={(e) => setLast_name(e.target.value)}
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
            <label>Location</label> <br />
            <input
              type="text"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </aside>
          <aside>
            <label>Phone Number</label> <br />
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </aside>
          <main className={styles.upload}>
            <FiUploadCloud fontSize="80px" color="#0f4a7b" />
            {cv == "" ? (
              <>
                <p>Drag and drop your CV here </p>
                <p>or </p>
              </>
            ) : (
              <p>{cv.name}</p>
            )}

            <label for="cv" onClick={() => inputFileRef.current.click()}>
              Browse files
            </label>
            <input
              type="file"
              name="cv"
              ref={inputFileRef}
              onChange={(e) => setCv(e.target.files[0])}
            />
          </main>
          <button disabled={cv === "" ? true : false}>
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
};

export default ApplyModal;
