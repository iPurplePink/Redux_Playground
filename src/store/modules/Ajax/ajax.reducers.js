import { handleActions } from "redux-actions";
import * as ACTIONS from "./ajax.actions";
import Model from "./ajax.model";

export default handleActions(
  {
    [ACTIONS.getPlanetsAjaxSucceded]: (state, action) => {
      console.log("action Succeded", action);
      return {
        ...state,
        data: action.payload
      };
    },
    [ACTIONS.getPlanetsAjaxFailed]: (state, action) => {
      console.log("action Failed", action);
      return {
        ...state,
        data: {}
      };
    }
  },
  Model
);
