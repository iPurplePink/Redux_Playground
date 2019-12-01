import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import * as TYPES from "./fetch.types";
import * as ACTIONS from "./fetch.actions";

export const getPlanetsEpic = action$ => {
  console.log("action$", action$);
  return action$.pipe(
    ofType(TYPES.GET_PLANETS_EPIC),
    switchMap(async action => {
      ACTIONS.getPlanetsReading({ status: true });
      return await fetch("https://swapi.co/api/planets/")
        .then(result => result.json().then(ACTIONS.getPlanetsSucceded))
        .catch(ACTIONS.getPlanetsFailed);
    })
  );
};
