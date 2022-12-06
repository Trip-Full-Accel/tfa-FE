import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/modal.css";
// import "bootstrap/dist/css/bootstrap.Min.css";
import { Provider } from "react-redux";
import store from "./store/store";
<link
  href="https://fonts.googleapis.com/css2?family=Caveat&family=Indie+Flower&family=Nanum+Pen+Script&family=Rubik+Distressed&display=swap"
  rel="stylesheet"
></link>;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
