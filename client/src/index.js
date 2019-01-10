import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware } from "redux";
import { reducers } from "./reducers/index";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const loggerMiddleware = createLogger();

const store = createStore(
  reducers,
  applyMiddleware(thunkMiddleware, loggerMiddleware)
);

console.log("start#####")
console.log(process.env)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
