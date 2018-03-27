import "rxjs/add/operator/filter";
import "rxjs/add/operator/map";
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route, Redirect } from "react-router-dom";

import "utils/polyfills";
import { initIfNavigateDirectlyToViewingPhoto } from "utils/url";
import store, { history } from "modules/store";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

initIfNavigateDirectlyToViewingPhoto();

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/:locale/gallery" component={Home} />
        <Route path="/:locale/about" component={About} />
        <Route path="/:locale/contact" component={About} />
        <Route path="/:locale/blog" component={Blog} />
        <Redirect from="/" to="/en/gallery" />
        <Route component={NotFound} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
