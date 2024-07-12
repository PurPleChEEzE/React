import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RouterPage from "./pages/02_RouterPage.jsx";
import QueryString from "./pages/03_QueryString.jsx";
import PathVariable from "./pages/04_PathVariable.jsx";

// import Home from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/RouterPage",
    element: <RouterPage />,
  },
  {
    path: "/QueryString",
    element: <QueryString />,
  },
  {
    path: "/PathVariable/:value",
    element: <PathVariable />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 라우터 적용 */}
    <RouterProvider router={router}>
      <App />
    </RouterProvider>

  </React.StrictMode>
);
