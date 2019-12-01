import { createAction } from "redux-actions";
import * as TYPES from "./ajax.types";

export const getPlanetsAjaxEpic = createAction(TYPES.GET_PLANETS_AJAX_EPIC);
export const getPlanetsAjaxSucceded = createAction(
  TYPES.GET_PLANETS_AJAX_SUCCEDED
);
export const getPlanetsAjaxFailed = createAction(TYPES.GET_PLANETS_AJAX_FAILED);
export const getPlanetsAjaxReading = createAction(
  TYPES.GET_PLANETS_AJAX_READING
);
export const getPlanetsAjaxCancel = createAction(TYPES.GET_PLANETS_AJAX_CANCEL);
