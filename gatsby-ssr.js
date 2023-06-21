import React from "react";
import "./src/styles/global.css";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./src/redux/todoSlice.js";

const store = configureStore({
  reducer: {
    todo: counterReducer,
  },
});

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>{element}</Provider>
);
