import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import { AuthPage } from "./pages/auth";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
);
