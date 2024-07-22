import BackButton from "../components/common/BackButton";

import { useParams } from "react-router-dom";

function PathVariable() {
  const { value } = useParams();

  return (
    <div>
      <p>경로 파라미터 : {value} </p>
      <BackButton />
    </div>
  );
}

export default PathVariable;
