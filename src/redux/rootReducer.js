import { combineReducers } from "redux";
import authReducer from "./authentication/reducers";
import userReducer from "./userManagement/reducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  usr: userReducer,
});
