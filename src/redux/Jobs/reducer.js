import * as types from "../types";

export const jobReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.GET_JOBS:
      return { ...state, loading: true };
    case types.GET_JOBS_SUCCESS:
      return { loading: false, jobs: action.payload };
    case types.GET_JOBS_FAIL:
      return { loading: false, error: action.payload };
    case types.GET_SINGLE_JOBS:
      return { ...state, loading: true };
    case types.GET_SINGLE_JOBS_SUCCESS:
      return { ...state, loading: false, current_job: action.payload };
    case types.GET_SINGLE_JOBS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case types.SET_CURRENT_JOB_ID:
      return { ...state, currentId: action.payload };
    case types.GET_USER_JOBS:
      return { ...state, loading: true };
    case types.GET_USER_JOBS_SUCCESS:
      return { ...state, loading: false, user_jobs: action.payload };
    case types.GET_USER_JOBS_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const jobApplyReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case types.JOB_APPLY:
      return { ...state, loading: true };
    case types.JOB_APPLY_SUCCESS:
      return { ...state, loading: false, applied: action.payload };
    case types.JOB_APPLY_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
