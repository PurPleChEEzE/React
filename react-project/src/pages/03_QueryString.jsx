import BackButton from "../components/common/BackButton";

// 현재 URL 정보를 가져오는 router hook
import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function QueryString() {
  // 자바스크립트 코드
  const query = useQuery();

  // 쿼리스트링의 key가 age인 값을 가져오겠다.
  const getAge = query.get("age");
  const getName = query.get("name");

  return (
    // HTML 코드 작성
    <div>
      <p>
        쿼리스트링의 값 : {getAge}, {getName}
      </p>
      <BackButton />
    </div>
  );
}

export default QueryString;
