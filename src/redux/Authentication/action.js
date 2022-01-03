import * as types from "../types";
import axios from "axios";
import toast from "react-hot-toast";

const base = "https://api.jobboard.tedbree.com/v1/";

export const login = (email, password) => async (dispatch, getState) => {
  try {
    dispatch({ type: types.LOGIN });

    const conf = {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    };

    const { data } = await axios.post(
      `${base}login`,
      { email, password },
      conf
    );

    //   if (data.status === "success") {
    dispatch({ type: types.LOGIN_SUCCESS, payload: data });

    const msg = data.message || "Login Successfull!";
    localStorage.setItem("token", JSON.stringify(data.token));
    toast.success(msg, {
      position: "top-right",
    });
    //   }
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Network Error";
    dispatch({ type: types.LOGIN_FAIL, payload: message });

    toast.error(message, {
      position: "top-right",
    });
  }
};

export const register =
  (name, email, password) => async (dispatch, getState) => {
    try {
      dispatch({ type: types.REGISTER });
      const conf = {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      };

      const { data } = await axios.post(
        `${base}register`,
        { name, email, password },
        conf
      );

      //   if (data.status === "success") {
      dispatch({ type: types.REGISTER_SUCCESS, payload: data.data });

      const msg = data.message;
      toast.success(msg, {
        position: "top-right",
      });
      //   }
    } catch (error) {
      const message = error.response
        ? error.response.data.message
        : "Network Error";
      dispatch({ type: types.REGISTER_FAIL, payload: message });

      toast.error(message, {
        position: "top-right",
      });
    }
  };

export const getUser = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  try {
    dispatch({ type: types.USER_DETAILS });

    const response = await axios.get(`${base}/user`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (response.data) {
      dispatch({
        type: types.USER_DETAILS_SUCCESS,
        payload: response.data,
      });
    }
  } catch (error) {
    const message = error.response
      ? error.response.data.message
      : "Something Went Wrong";

    dispatch({ type: types.USER_DETAILS_FAIL, payload: message });
  }
};
