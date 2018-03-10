import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./assets/css/style.bundle.css";

const store = createStore({});

render(<Provider store={store} />, document.getElementById("root"));
