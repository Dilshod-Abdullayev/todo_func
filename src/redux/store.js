import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import sizeReducer from "./reducers/sizeReducer";
import menuReducer from './reducers/menuReducer'
const rootReducer = combineReducers({
    themeReducer,
    sizeReducer,
    menuReducer
});

const store = createStore(rootReducer);
export default store;
