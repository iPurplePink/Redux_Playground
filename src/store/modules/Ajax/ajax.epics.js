import { ofType } from "redux-observable";
import { switchMap } from "rxjs/operators";
import * as TYPES from "./ajax.types";
import * as ACTIONS from "./ajax.actions";
import { ajax } from "rxjs/ajax";
import { map, startWith, endWith, catchError } from "rxjs/operators";

export const getPlanetsAjaxEpic = action$ => {
  console.log("action$s", action$);
  return action$.pipe(
    ofType(TYPES.GET_PLANETS_AJAX_EPIC),
    switchMap(async action => {
      ACTIONS.getPlanetsAjaxReading({ status: true });
      debugger;
      return await ajax("https://swapi.co/api/planets/").pipe(
        map(result => console.log("result", result)),
        catchError(error => console.log("error", error)),
        startWith(console.log("loading true")),
        endWith(console.log("loading false"))
      );
    })
  );
};
