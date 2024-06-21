import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { ExampleState, exampleReducer } from "./Example";
import logger from "redux-logger";

export interface StoreState {
  exampleStore: ExampleState;
}

const appReducers = combineReducers({
  exampleStore: exampleReducer,
});

export const store = configureStore({
  reducer: appReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});
