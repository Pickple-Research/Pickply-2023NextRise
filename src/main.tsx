import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App/App.tsx";
import "./reset.css";
import "./main.css";
import "./div.global.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
