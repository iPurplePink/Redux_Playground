import { createAction } from "redux-actions";
import * as TYPES from "./fetch.types";

export const getPlanetsEpic = createAction(TYPES.GET_PLANETS_EPIC);
export const getPlanetsSucceded = createAction(TYPES.GET_PLANETS_SUCCEDED);
export const getPlanetsFailed = createAction(TYPES.GET_PLANETS_FAILED);
export const getPlanetsReading = createAction(TYPES.GET_PLANETS_READING);
export const getPlanetsCancel = createAction(TYPES.GET_PLANETS_CANCEL);
