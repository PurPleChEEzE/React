import { createBrowserRouter } from "react-router-dom";

import App from "../../App.jsx";
import RouterPage from "../..//pages/02_RouterPage.jsx";
import QueryString from "../../pages/03_QueryString.jsx";
import PathVariable from "../../pages/04_PathVariable.jsx";
import Jsx from "../../pages/05_JSX.jsx";
import PropsPage from "../../pages/06_PropsPage.jsx";
import RenderPage from "../../pages/06_RenderPage.jsx"
import EventPage from "../../pages/07_EventPage.jsx";
import StatePage from "../../pages/08_StatePage.jsx";

import AboutPage from "../../pages/Training/Ex1_AboutPage.jsx";
import AddrPage from "../../pages/Training/Ex1_AddrPage.jsx";
import NamePage from "../../pages/Training/Ex1_NamePage.jsx";

import InlinePage from "../../pages/Training/Ex2_InlinePage.jsx";
import OutStyleSheetPage from "../../pages/Training/Ex2_OutStyleSheetPage.jsx";


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
        path: "/Jsx",
        element: <Jsx />,
    },
    {
        path: "/PropsPage",
        element: <PropsPage />,
    },
    {
        path: "/RenderPage",
        element: <RenderPage />,
    },
    {
        path: "/Event",
        element: <EventPage />,
    },
    {
        path: "/State",
        element: <StatePage />,
    },


    {
        path: "/Training/AboutPage",
        element: <AboutPage />,
    },
    {
        path: "/Training/AddrPage",
        element: <AddrPage />,
    },
    {
        path: "/Training/NamePage/:value",
        element: <NamePage />,
    },

    {
        path: "/Training/InlinePage",
        element: <InlinePage />,
    },
    {
        path: "/Training/OutStyleSheetPage",
        element: <OutStyleSheetPage />,
    },

]);

export default router;