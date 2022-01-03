import * as types from "../types";

export const authReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, loading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, loading: false, detail: action.payload };
    case types.LOGIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.LOGOUT:
      return {};
    default:
      return state;
  }
};

export const regReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.REGISTER:
      return { ...state, loading: true };
    case types.REGISTER_SUCCESS:
      return { loading: false, regDetail: action.payload };
    case types.REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.USER_DETAILS:
      return { ...state, loading: true };
    case types.USER_DETAILS_SUCCESS:
      return { ...state, loading: false, detail: action.payload };
    case types.USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
