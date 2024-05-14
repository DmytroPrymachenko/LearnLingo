import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import "./firebase/firebase.js";

import { Provider } from "react-redux";
import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/learn-lingo/">
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <App />
        <ToastContainer autoClose={1500} />
      </I18nextProvider>
    </Provider>
  </BrowserRouter>
);
// basename = "/learn-lingo/";
