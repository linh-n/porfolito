import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { combineEpics, createEpicMiddleware } from "redux-observable";

import { uiReducer, uiEpic } from "./ui";
import { searchReducer } from "./search";

export const history = createHistory();
const router = routerMiddleware(history);
const rootEpic = combineEpics(uiEpic);
const epicMiddleware = createEpicMiddleware(rootEpic);
const middleWares = [router, epicMiddleware];

const rootReducer = combineReducers({
  router: routerReducer,
  ui: uiReducer,
  search: searchReducer,
});
export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
