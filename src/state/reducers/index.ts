import { combineReducers } from "redux";
import searchReducer from "../reducers/SearchReducer";

const reducers = combineReducers({
  searchReducer: searchReducer
});

export default reducers;
