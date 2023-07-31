import { createStore, combineReducers } from "redux";
import themeReducer from "./reducers/themeReducer";
import sizeReducer from "./reducers/sizeReducer";
import menuReducer from './reducers/menuReducer'
import dataReducer from "./reducers/dataReducer";
const rootReducer = combineReducers({
    themeReducer,
    sizeReducer,
    menuReducer,
    dataReducer
});

const store = createStore(rootReducer);
export default store;
