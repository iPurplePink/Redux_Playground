import { createStore, compose, applyMiddleware } from "redux";

import { createEpicMiddleware } from "redux-observable";

import rootReducer from "./rootReducer";
import rootEpic from "./rootEpics";

const composeEnhancers =
  (process.env.NODE_ENV === "development" || process.env.NODE_ENV === "dev") &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;

const epicMiddleware = createEpicMiddleware();

// const sessionStorageState = sessionStorage.getItem("state") || undefined;

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
