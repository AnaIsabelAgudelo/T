import React from "react";
import ReactDOM from "react-dom/client";
import { ToritosApp } from "./ToritosApp";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ToritosApp />
    </BrowserRouter>
  </React.StrictMode>
);
