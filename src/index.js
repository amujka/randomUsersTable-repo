import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reducer from "./redux/reducer/reducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { applyMiddleware, createStore, compose } from "redux";

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
