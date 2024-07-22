// URL : /Training/NamePage/김재섭
// <p> 입력된 이름 : [경로파라미터로 가져온 이름] </p>
// 뒤로가기 버튼 O
import BackButton from "../../components/common/BackButton";
import { useParams } from "react-router-dom";

function NamePage() {
  const { userName } = useParams();

  return (
    <>
      <p>입력된 이름 : {userName}</p>
      <BackButton></BackButton>
    </>
  );
}

export default NamePage;
