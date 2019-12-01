import { handleActions } from "redux-actions";
import * as ACTIONS from "./home.actions";
import Model from "./home.model";

export default handleActions(
  {
    [ACTIONS.setIsLoggedIn]: (state, action) => {
      return {
        ...state,
        isLoggedIn: action.payload
      };
    }
  },
  Model
);
