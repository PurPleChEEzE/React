// import PrintWorld from "./components/01_PrintWorld";
import { Link } from "react-router-dom";
import "./styles/App.css";


function App() {
  return (
    <div>
      <h1>기본</h1>
      <ul>
        <li>
          <Link to="/" className="no-underline">Home</Link>
        </li>
        <li>
          <Link to="/RouterPage" className="no-underline">02_RouterPage</Link>
        </li>
        <li>
          <Link to="/QueryString?name=김아태&age=28" className="no-underline">03_QueryString</Link>
        </li>
        <li>
          <Link to="/PathVariable/김아태" className="no-underline">04_PathVariable</Link>
        </li>

      </ul>

      <hr />
      <h1>Ex1_실습 문제</h1>
      <ul>
        <li>
          <Link to="/AboutPage" className="no-underline">Ex1_AboutPage</Link>
        </li>
        <li>
          <Link to="/AddrPage?addr=안양" className="no-underline">Ex2_AddrPage</Link>
        </li>
        <li>
          <Link to="/NamePage/김아태" className="no-underline">Ex3_NamePage</Link>
        </li>
      </ul>
    </div>

  );
}

export default App;
