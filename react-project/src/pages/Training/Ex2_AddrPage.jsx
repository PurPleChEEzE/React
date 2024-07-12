// p태그 입력된 주소 : 쿼리스트링에 입력한 주소
// 뒤로가기 o
// url : /Training/Addrpage
import BackButton from "../../components/common/BackButton";
import useQuery from "../../components/common/useQuery";



function AddrPage() {
    const query = useQuery();
    //쿼리스트링의 key가 age인 값을 가져오겠다
    const getAddr = query.get("addr");
    return (
        <div>
            <p>
                주소값 :{getAddr}
            </p>
            <BackButton />
        </div>
    );
}


export default AddrPage;