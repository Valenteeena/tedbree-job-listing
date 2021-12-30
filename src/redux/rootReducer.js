import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { jobReducer } from "./Jobs/reducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: [""],
};

const rootReducer = combineReducers({
  jobReducer: jobReducer,
});
export default persistReducer(persistConfig, rootReducer);
