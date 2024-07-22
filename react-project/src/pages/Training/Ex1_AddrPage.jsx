// URL : /Training/AddrPage?addr=안양시
// <p> 입력된 주소 : [쿼리스트링에 입력한 주소] </p>
// 뒤로가기 O
import BackButton from "../../components/common/BackButton";
import UseQuery from "../../components/common/UseQuery";

function AddrPage() {
  const query = UseQuery();
  const addr = query.get("addr");

  return (
    <>
      <p>입력된 주소 : {addr}</p>
      <BackButton></BackButton>
    </>
  );
}

export default AddrPage;
