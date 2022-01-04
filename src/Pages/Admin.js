import moment from "moment";
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../Components/Admin/AdminHeader";
import JobCreationForm from "../Components/Admin/JobCreationForm";
import { getUser } from "../redux/Authentication/action";
import { getUserJobs } from "../redux/Jobs/action";
import styles from "../styles/Admin.module.css";

const Admin = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const { detail } = userReducer;
  const jobReducer = useSelector((state) => state.jobReducer);
  const { user_jobs } = jobReducer;
  const [show, setShow] = useState(false);

  const closeFrm = (e) => {
    setShow(!show);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
    dispatch(getUserJobs());
  }, [dispatch]);

  return (
    <main className={styles.AdminStyles}>
      <AdminHeader detail={detail} />
      <section className={styles.adminContent}>
        <div>
          <aside className={styles.topContent}>
            <div>
              <FiSearch color="#62BECB" fontSize="22px" />
              <input
                type="text"
                placeholder="e.g Front end Developer"
                // value={searchT}
                // onChange={(e) => setSearchT(e.target.value)}
              />
              <button>Search</button>
            </div>
            <button
              onClick={(e) => {
                closeFrm();
              }}>
              + New Job
            </button>
          </aside>
        </div>
        <table className={styles.dataTable}>
          <thead>
            <tr>
              <th>Job Title</th>
              <th>Date Modified</th>
              <th>Candidates</th>
              <th></th>
              <th>Filter</th>
            </tr>
          </thead>

          {user_jobs && user_jobs.data.length !== 0 ? (
            <tbody>
              {user_jobs.data.map((dt, index) => (
                <tr key={index}>
                  <td>{dt.title}</td>
                  <td>{moment(dt.created_at).format("d/MM/yyyy")}</td>
                  <td>{0}</td>
                  <td>
                    <button>Edit</button>
                  </td>
                  <td>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          ) : (
            <td colSpan="5">
              <h1>No records found</h1>
            </td>
          )}
        </table>
      </section>
      <JobCreationForm show={show} closeFrm={closeFrm} />
    </main>
  );
};

export default Admin;
