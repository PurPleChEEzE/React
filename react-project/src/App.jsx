// import PrintWorld from "./components/01_PrintWorld";
// import { Link } from "react-router-dom";
import Header from "./components/common/Header";
import Nav from "./components/common/Nav";

function App() {
  // 자바스크립트 코드

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <section>
        <h2>홈</h2>
        <p>님 안녕하세요! 홈페이지에 오신 것을 환영합니다.</p>
      </section>
    </>
    // // HTML 코드
    // <div>
    //   <ul>
    //     <li>
    //       <Link to="/" className="no-underline">
    //         Home
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/RouterPage" className="no-underline">
    //         02_RouterPage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/QueryString?name=김재섭&age=19" className="no-underline">
    //         03_QueryString
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/PathVariable/김재섭" className="no-underline">
    //         04_PathVariable
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/JSX" className="no-underline">
    //         05_JSX
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/PropsPage" className="no-underline">
    //         06_Props
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/Rendering" className="no-underline">
    //         06_Rendering
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/Event" className="no-underline">
    //         07_Event
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/State" className="no-underline">
    //         08_State
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/FormHandlePage" className="no-underline">
    //         09_FormHandlePage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/LiftingStatePage" className="no-underline">
    //         10_LiftingStatePage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/LiftingStatePage2" className="no-underline">
    //         11_LiftingStatePage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/AxiosPage" className="no-underline">
    //         12_AxiosPage
    //       </Link>
    //     </li>
    //   </ul>

    //   <hr />
    //   <h1>Ex1_실습 문제</h1>
    //   <ul>
    //     <li>
    //       <Link to="/Training/AboutPage" className="no-underline">
    //         Ex1_AboutPage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/Training/AddrPage?addr=안양시" className="no-underline">
    //         Ex2_AddrPage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/Training/NamePage/김재섭" className="no-underline">
    //         Ex3_NamePage
    //       </Link>
    //     </li>
    //   </ul>
    //   <hr />
    //   <h1>Ex2_실습 문제</h1>
    //   <ul>
    //     <li>
    //       <Link to="/InlinePage" className="no-underline">
    //         Ex2_InlinePage
    //       </Link>
    //     </li>
    //     <li>
    //       <Link to="/OutStyleSheetPage" className="no-underline">
    //         Ex2_OutStyleSheetPage
    //       </Link>
    //     </li>
    //   </ul>

    //   <hr />
    //   <h1>Ex3_실습 문제</h1>
    //   <ul>
    //     <li>
    //       <Link to="/StateQuizPage">Ex3_StateQuizPage</Link>
    //     </li>
    //   </ul>
    // </div>
  );
}

export default App;
