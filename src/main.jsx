import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./language/i18n.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <React.StrictMode>
      <I18nextProvider i18n={i18n}>
        <App />
        <ToastContainer autoClose={1500} />
      </I18nextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
