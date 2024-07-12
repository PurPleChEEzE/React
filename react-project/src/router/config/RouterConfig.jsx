import { createBrowserRouter } from "react-router-dom";

import App from "../../App.jsx";
import RouterPage from "../..//pages/02_RouterPage.jsx";
import QueryString from "../../pages/03_QueryString.jsx";
import PathVariable from "../../pages/04_PathVariable.jsx";
import AboutPage from "../../pages/Training/Ex1_AboutPage.jsx";
import AddrPage from "../../pages/Training/Ex2_AddrPage.jsx";
import NamePage from "../../pages/Training/Ex3_NamePage.jsx";


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
    {
        path: "/Training/Ex1_AboutPage",
        element: <AboutPage />,
    },
    {
        path: "/Training/Ex2_AddrPage",
        element: <AddrPage />,
    },
    {
        path: "/Training/Ex3_NamePage/:value",
        element: <NamePage />,
    },
]);

export default router;