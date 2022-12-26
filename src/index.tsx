import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/bootmodal.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import reportWebVitals from "./reportWebVitals";
<link
  href="https://fonts.googleapis.com/css2?family=Caveat&family=Indie+Flower&family=Nanum+Pen+Script&family=Rubik+Distressed&display=swap"
  rel="stylesheet"
></link>;

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
