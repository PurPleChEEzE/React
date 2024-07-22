import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import router from "./router/config/RouterConfig.jsx";

import store from "./redux/config/store.js";
import { Provider } from "react-redux";

// 라우터를 사용하기 위해서 필요한 함수들 import
import { RouterProvider } from "react-router-dom";
import "./styles/App.css";

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
