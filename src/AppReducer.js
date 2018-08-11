import { combineReducers } from "redux";

const noopReducer = (state = {}, action) => {
  return state;
};

const AppReducer = combineReducers({ noopReducer });

export default AppReducer;
