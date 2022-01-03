import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { jobApplyReducer, jobReducer } from "./Jobs/reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  jobApplyReducer: jobApplyReducer,
});
export default persistReducer(persistConfig, rootReducer);
