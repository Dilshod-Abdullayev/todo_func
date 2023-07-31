import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import sizeReducer from "./sizeReducer";
import menuReducer from "./menuReducer"
const allReducers = combineReducers({ themeReducer, sizeReducer,menuReducer })
export default allReducers;