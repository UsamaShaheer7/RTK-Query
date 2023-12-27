import React from "react";
import ReactDOM from "react-dom";

import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { api } from "./store/slice"; // Import your RTK Query API

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = document.getElementById("root") || document.createElement("div");

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
