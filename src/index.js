import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import BasicRoute from "./router/BasicRoute";
import { Provider } from "mobx-react";
import { adminStores } from "./store";
import "./index.css";

ReactDOM.render(
  <Provider {...adminStores}>
    <BasicRoute />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
