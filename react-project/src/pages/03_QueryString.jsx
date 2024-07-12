// 현재 URL 정보를 가져오는 router hook
import { useLocation } from "react-router-dom";
import BackButton from "../components/common/BackButton";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
function QueryString() {
    const query = useQuery();
    //쿼리스트링의 key가 age인 값을 가져오겠다
    const getAge = query.get("age");
    const getName = query.get("name");
    return (
        <div>
            <p>
                쿼리스트링의 값 :{getAge} , {getName}
            </p>
            <BackButton />
        </div>
    );
}

export default QueryString;