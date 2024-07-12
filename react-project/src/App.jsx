// import PrintWorld from "./components/01_PrintWorld";
import { Link } from "react-router-dom";
import "./styles/App.css";


function App() {
  return (
    <div>
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
    </div>

  );
}

export default App;
