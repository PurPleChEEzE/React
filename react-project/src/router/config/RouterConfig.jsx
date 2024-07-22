import { createBrowserRouter } from "react-router-dom";

// jsx 파일 가져오기(import)
import App from "../../App.jsx";
import RouterPage from "../../pages/02_RouterPage.jsx";
import QueryString from "../../pages/03_QueryString.jsx";
import PathVariable from "../../pages/04_PathVariable.jsx";

import AboutPage from "../../pages/training/Ex1_AboutPage.jsx";
import AddrPage from "../../pages/training/Ex1_AddrPage.jsx";
import NamePage from "../../pages/training/Ex1_NamePage.jsx";
import JSX from "../../pages/05_JSX.jsx";

import InlinePage from "../../pages/training/Ex2_InlinePage.jsx";
import OutStyleSheetPage from "../../pages/training/Ex2_OutStyleSheetPage.jsx";
import StateQuizPage from "../../pages/training/Ex3_StateQuizPage.jsx";

import PropsPage from "../../pages/06_PropsPage.jsx";
import Rendering from "../../pages/06_RenderPage.jsx";
import EventPage from "../../pages/07_EventPage.jsx";
import StatePage from "../../pages/08_StatePage.jsx";
import FormHandlePage from "../../pages/09_FormHandlePage.jsx";
import LiftingStatePage from "../../pages/10_LiftingStatePage.jsx";
import LiftingStatePage2 from "../../pages/11_LiftingStatePage.jsx";
import AxiosPage from "../../pages/12_AxiosPage.jsx";

import FreeListPage from "../../pages/board/free/FreeListPage.jsx";

// 사용자 요청 -> react-router -> pages -> component
import { FreeRoutes } from "../board/FreeRouter.jsx";

// 경로 설정
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/freeBoard/*",
    element: <FreeRoutes></FreeRoutes>,
  },
  {
    path: "/RouterPage", // URL 경로
    element: <RouterPage />, // 해당 URL로 왔을 때 이동할 페이지
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
    path: "/Training/AboutPage",
    element: <AboutPage />,
  },
  {
    path: "/Training/AddrPage",
    element: <AddrPage />,
  },
  {
    path: "/Training/NamePage/:userName",
    element: <NamePage />,
  },
  {
    path: "/JSX",
    element: <JSX />,
  },
  {
    path: "/InlinePage",
    element: <InlinePage />,
  },
  {
    path: "/OutStyleSheetPage",
    element: <OutStyleSheetPage />,
  },
  {
    path: "/PropsPage",
    element: <PropsPage />,
  },
  {
    path: "/Rendering",
    element: <Rendering></Rendering>,
  },
  {
    path: "/Event",
    element: <EventPage></EventPage>,
  },
  {
    path: "/State",
    element: <StatePage></StatePage>,
  },
  {
    path: "/StateQuizPage",
    element: <StateQuizPage></StateQuizPage>,
  },
  {
    path: "/FormHandlePage",
    element: <FormHandlePage></FormHandlePage>,
  },
  {
    path: "/LiftingStatePage",
    element: <LiftingStatePage></LiftingStatePage>,
  },
  {
    path: "/LiftingStatePage2",
    element: <LiftingStatePage2></LiftingStatePage2>,
  },
  {
    path: "/AxiosPage",
    element: <AxiosPage></AxiosPage>,
  },
  {
    path: "/freeboard/list",
    element: <FreeListPage></FreeListPage>,
  },
]);

export default router;
