import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import sizeReducer from "./reducers/sizeReducer";

const rootReducer = combineReducers({
    themeReducer,
    sizeReducer,
});

const store = createStore(rootReducer);
export default store;
