import { handleActions } from "redux-actions";
import * as ACTIONS from "./fetch.actions";
import Model from "./fetch.model";

export default handleActions(
  {
    [ACTIONS.getPlanetsSucceded]: (state, action) => {
      console.log("action Succeded", action);
      return {
        ...state,
        data: action.payload
      };
    },
    [ACTIONS.getPlanetsFailed]: (state, action) => {
      console.log("action Failed", action);
      return {
        ...state,
        data: {}
      };
    }
  },
  Model
);
