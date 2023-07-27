import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import sizeReducer from "./sizeReducer";
const allReducers = combineReducers({ themeReducer, sizeReducer })
export default allReducers;