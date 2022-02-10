import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxPromise from "redux-promise";
import asyncMiddleware from "./middlewares/asyncMiddleware";
import stateValidatorMiddleware from "./middlewares/stateValidatorMiddleware";
import reducers from "./store";

const Root = ({ children, initialState = {} }) => {
  return (
    <Provider
      store={createStore(
        reducers,
        initialState,
        applyMiddleware(asyncMiddleware, stateValidatorMiddleware)
      )}
    >
      {children}
    </Provider>
  );
};

export default Root;
