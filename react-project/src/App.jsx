// import PrintWorld from "./components/01_PrintWorld";

import { Link } from "react-router-dom";
function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/RouterPage">02_RouterPage</Link>
        </li>
        <li>
          <Link to="/QueryString">03_QueryString</Link>
        </li>
        <li>
          <Link to="/PathVariable">04_PathVariable</Link>
        </li>
      </ul>
    </div>

  );
}

export default App;
