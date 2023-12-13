import React from "react";
import ReactDOM from "react-dom/client";
import MainScreen from "./screens/MainScreen/Main.screen";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>
);
