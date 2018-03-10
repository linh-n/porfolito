import React from "react";
import { render } from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const store = createStore({}, applyMiddleware(thunk));

render(<Provider store={store} />, document.getElementById("root"));
