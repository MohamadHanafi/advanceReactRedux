import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Root from "./Root";

import "./index.css";
import App from "./App";

ReactDOM.render(
  <Root>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<App />}></Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Root>,
  document.getElementById("root")
);
