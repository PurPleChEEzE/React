// 현재 URL 정보를 가져오는 router hook
import { useLocation } from "react-router-dom";

function UseQuery() {
  return new URLSearchParams(useLocation().search);
}

export default UseQuery;
