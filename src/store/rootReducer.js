import { combineReducers } from "redux";
import home from "./modules/Home/home.reducer";
import fetch from "./modules/Fetch/fetch.reducers";
import ajax from "./modules/Ajax/ajax.reducers";

const rootReducer = combineReducers({ home, fetch, ajax });

export default rootReducer;
