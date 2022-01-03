import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { authReducer, regReducer, userReducer } from "./Authentication/reducer";
import { jobApplyReducer, jobReducer } from "./Jobs/reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  jobReducer: jobReducer,
  jobApplyReducer: jobApplyReducer,
  authReducer: authReducer,
  regReducer: regReducer,
  userReducer: userReducer,
});
export default persistReducer(persistConfig, rootReducer);
