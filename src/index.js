import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore } from "redux";
import { reducers } from "./reducers/index";
import { Provider } from "react-redux";
var users = {
  id: "es-ES"
};

const initial_state = {
  users: users
};

const store = createStore(reducers, initial_state);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
