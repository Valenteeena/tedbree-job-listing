import * as types from "../types";
import axios from "axios";

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
    }
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Something Went Wrong";

    dispatch({ type: types.GET_JOBS_FAIL, payload: message });
  }
};
