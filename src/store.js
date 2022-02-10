import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducers";
import { commentReducer } from "./reducers/commentReducers";

const reducers = combineReducers({
  comments: commentReducer,
  auth: authReducer,
});

export default reducers;
