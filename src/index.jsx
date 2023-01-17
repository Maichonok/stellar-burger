import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { compose, createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import { App } from "./components/App";
import rootReducer from "./services/rootReducer";
import { socketMiddleware } from "./services/middleware/socketMiddleware";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_FAILED,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SEND_ORDERS,
} from "./services/actions/wsActions";
import {
  WS_USER_CONNECTION_CLOSED,
  WS_USER_CONNECTION_FAILED,
  WS_USER_CONNECTION_START,
  WS_USER_CONNECTION_SUCCESS,
  WS_USER_GET_ORDERS,
  WS_USER_SEND_ORDERS,
} from "./services/actions/wsUserActions";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const wsUrl = "wss://norma.nomoreparties.space/orders/all";
const wsUrlUser = "wss://norma.nomoreparties.space/orders";

const wsActions = {
  wsInit: WS_CONNECTION_START,
  wsSendMessage: WS_SEND_ORDERS,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_FAILED,
  onMessage: WS_GET_ORDERS,
};

const wsUserActions = {
  wsInit: WS_USER_CONNECTION_START,
  wsSendMessage: WS_USER_SEND_ORDERS,
  onOpen: WS_USER_CONNECTION_SUCCESS,
  onClose: WS_USER_CONNECTION_CLOSED,
  onError: WS_USER_CONNECTION_FAILED,
  onMessage: WS_USER_GET_ORDERS,
};

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk),
    applyMiddleware(socketMiddleware(wsUrl, wsActions, false)),
    applyMiddleware(socketMiddleware(wsUrlUser, wsUserActions, true))
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
