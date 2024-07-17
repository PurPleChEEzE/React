import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import router from "./router/config/RouterConfig.jsx";
// import RouterPage from "./pages/02_RouterPage.jsx";
// import QueryString from "./pages/03_QueryString.jsx";
// import PathVariable from "./pages/04_PathVariable.jsx";

import store from "./redux/config/store.js";
import { Provider } from "react-redux";

// import Home from "./App.jsx";
import { RouterProvider } from "react-router-dom";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      {/* 라우터 적용 */}
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </Provider>
  </React.StrictMode>
);
