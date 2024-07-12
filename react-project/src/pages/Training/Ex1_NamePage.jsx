// p태그 입력된 이름 : 경로파라미터로 가져온 이름
// 뒤로가기 o
// url : /Training/Namepage

import { useParams } from "react-router-dom";
import BackButton from "../../components/common/BackButton";

function NamePage() {

    const { value } = useParams();


    return (
        <div>
            <p>경로 파라미터 : {value}</p>
            <BackButton />
        </div>
    );
}


export default NamePage;