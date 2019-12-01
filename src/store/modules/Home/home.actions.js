import { createAction } from "redux-actions";
import * as TYPES from "./home.types";

export const setIsLoggedIn = createAction(TYPES.SET_IS_LOGGED_IN);
