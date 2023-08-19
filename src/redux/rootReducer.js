import { combineReducers } from "redux";
import userReducer from "./users/userReducer";
import workDateReducer from "./workdates/workDateReducer";

const rootReducer = combineReducers({
  users: userReducer,
  workDates: workDateReducer,
});
export default rootReducer;
