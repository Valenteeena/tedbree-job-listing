import * as types from "../types";
import axios from "axios";
import toast from "react-hot-toast";

const base = "https://api.jobboard.tedbree.com/v1/";

export const getJobs = () => async (dispatch) => {
  try {
    dispatch({ type: types.GET_JOBS });

    const response = await axios.get(`${base}jobs`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (response.data.length !== 0) {
      dispatch({
        type: types.GET_JOBS_SUCCESS,
        payload: response.data,
      });
      dispatch({
        type: types.SET_CURRENT_JOB_ID,
        payload: response.data.data[0].id,
      });
      dispatch(getSingleJobs(response.data.data[0].id));
    }
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Something Went Wrong";

    dispatch({ type: types.GET_JOBS_FAIL, payload: message });
  }
};

export const getSingleJobs = (jobId) => async (dispatch) => {
  try {
    dispatch({ type: types.GET_SINGLE_JOBS });
    dispatch({
      type: types.SET_CURRENT_JOB_ID,
      payload: jobId,
    });
    const response = await axios.get(`${base}jobs/${jobId}`, {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    if (response.data.length !== 0) {
      dispatch({
        type: types.GET_SINGLE_JOBS_SUCCESS,
        payload: response.data.data,
      });
    }
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Something Went Wrong";

    dispatch({ type: types.GET_SINGLE_JOBS_FAIL, payload: message });
  }
};

export const jobApply = (jobId, applyData) => async (dispatch) => {
  try {
    dispatch({ type: types.JOB_APPLY });

    const conf = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
    };

    const { data } = await axios.post(
      `${base}/jobs/${jobId}/apply`,
      applyData,
      conf
    );

    if (data.status === "success") {
      dispatch({ type: types.JOB_APPLY_SUCCESS, payload: data.data });

      toast.success("Application sucessfull!", {
        position: "top-right",
      });
    }
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Application failed";
    dispatch({ type: types.JOB_APPLY_FAIL, payload: message });

    toast.error(message, {
      position: "top-right",
    });
  }
};
