import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AdminHeader from "../Components/Admin/AdminHeader";
import { getUser } from "../redux/Authentication/action";
import styles from "../styles/Admin.module.css";

const Admin = () => {
  const userReducer = useSelector((state) => state.userReducer);
  const { detail } = userReducer;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <main className={styles.AdminStyles}>
      <AdminHeader detail={detail} />
    </main>
  );
};

export default Admin;
