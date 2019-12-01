import { combineEpics } from "redux-observable";
import * as Fetch from "./modules/Fetch/fetch.epics";
import * as Ajax from "./modules/Ajax/ajax.epics";
import "rxjs";

const rootEpics = combineEpics(Fetch.getPlanetsEpic, Ajax.getPlanetsAjaxEpic);

export default rootEpics;
