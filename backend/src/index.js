import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "react-router-redux";

import store, { history } from "./store";
import Home from "./scenes/Home";
import Albums from "./scenes/Albums";
import Photos from "./scenes/Photos";

import "./assets/style.bundle.css";
import "./assets/vendors.bundle.css";
import "./assets/webfonts.css";

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/albums" component={Albums} />
        <Route path="/photos" component={Photos} />
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root"),
);
