// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.jsx";
import "../src/app/index.css";
import { store } from "./app/app.store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// 2) Provider ka use karke store ka acess pure application mei de diya iske baad slice create karna hoga