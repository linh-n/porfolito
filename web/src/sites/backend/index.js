import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "utils/polyfills";
import store, { history } from "modules/store";
import { availableLocales } from "locale/catalogs";
import preferredLocale from "utils/preferred-locale";

import "assets/styles/bootstrap-reboot.min.css";
import "assets/styles/bootstrap-grid.min.css";
import "assets/styles/font-awesome.min.css";
import "assets/styles/site.css";

import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

const acceptedLocales = availableLocales.join("|");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={`/:locale(${acceptedLocales})`} component={Home} exact />
        <Route path={`/:locale(${acceptedLocales})/about`} component={About} />
        <Redirect from="/" to={`/${preferredLocale}`} exact />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
