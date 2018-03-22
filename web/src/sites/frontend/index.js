import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "utils/polyfills";
import store, { history } from "modules/store";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/:locale" component={Home} exact />
        <Route path="/:locale/about" component={About} />
        <Redirect from="/" to="/en" exact />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
