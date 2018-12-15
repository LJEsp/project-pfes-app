import { combineReducers } from "redux";

import authReducer from "./authReducer";
import appReducer from "./appReducer";
import adminReducer from "./adminReducer";

export default combineReducers({
  auth: authReducer,
  app: appReducer,
  admin: adminReducer
});
