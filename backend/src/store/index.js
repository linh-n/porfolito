import createHistory from "history/createBrowserHistory";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { routerReducer, routerMiddleware } from "react-router-redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createHistory();
const middleWares = [routerMiddleware(history)];

const rootReducer = combineReducers({
  router: routerReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWares)));
