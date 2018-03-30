import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { addLocaleData } from "react-intl";

import { initIfNavigateDirectlyToViewingPhoto } from "utils/url";
import store, { history } from "modules/store";
import { setMessages, setAvailableLocales } from "modules/ui/reducer";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

import { availableLocales, localesData, messages } from "./i18n";

addLocaleData(localesData);
store.dispatch(setAvailableLocales(availableLocales));
store.dispatch(setMessages(messages));
initIfNavigateDirectlyToViewingPhoto(availableLocales);

const acceptedLocales = availableLocales.join("|");

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path={`/:locale(${acceptedLocales})/gallery`} component={Home} />
        <Route path={`/:locale(${acceptedLocales})/about`} component={About} />
        <Route path={`/:locale(${acceptedLocales})/contact`} component={About} />
        <Route path={`/:locale(${acceptedLocales})/blog`} component={Blog} />
        <Redirect from="/" to="/en/gallery" />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
