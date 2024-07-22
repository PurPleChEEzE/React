import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Pagination({ handlePageButton }) {
  const { pi } = useSelector((state) => state.freeList);

  return (
    <nav
      aria-label="Page navigation example"
      style={{ backgroundColor: "white" }}
    >
      <ul className="pagination" style={{ justifyContent: "center" }}>
        {/* 삼항연산자, && 연산자 */}
        {pi.cpage > 1 ? (
          // cpage가 1보다 클 때(조건식이 true)
          <li className="page-item" style={{ marginRight: 0 }}>
            <Link
              className="page-link"
              onClick={() => handlePageButton(pi.cpage - 1)}
              // to={`/freeBoard?cpage=${
              //   pi.cpage - 1
              // }&category=${selectCategory}&searchText=${searchText}`}
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </Link>
          </li>
        ) : (
          // 그 외(조건식이 false)
          <li className="page-item" style={{ marginRight: 0 }}>
            <Link className="page-link" to="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </Link>
          </li>
        )}
        {/* map, filter */}
        {/* 
        Array.from() : 주어진 길이만큼의 배열을 생성 
        endPage:5, startPage:1  -> 4+1 -> 5페이지 만큼
        endPage:8, startPage:6  -> 8-6 -> 2+1 -> 배열의 길이는 3 (6,7,8)
      */}
        {Array.from({ length: pi.endPage - pi.startPage + 1 }).map(
          (_, index) => {
            // startPage:6, index:0 = 6
            // startPage:6, index:1 = 7
            // startPage:6, index:2 = 8
            const page = pi.startPage + index;

            return (
              <li className="page-item" style={{ marginRight: 0 }} key={page}>
                <Link
                  className="page-link"
                  onClick={() => handlePageButton(page)}
                  // to={`/freeBoard?cpage=${page}&category=${selectCategory}&searchText=${searchText}`}
                >
                  {page}
                </Link>
              </li>
            );
          }
        )}
        {/* 
        endPage : 1~5페이지 까지 있는데 3페이지를 보고있다 -> 5
        maxPage : 보고있는 페이지와 상관없이 20페이지까지 있을 때 -> 20
      */}
        {pi.cpage < pi.maxPage ? (
          // 현재 보고있는 페이지가 최대 페이지보다 적을 때(ture)
          <li className="page-item" style={{ marginRight: 0 }}>
            <Link
              className="page-link"
              onClick={() => handlePageButton(pi.cpage + 1)}
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        ) : (
          // 현재 보고있는 페이지가 최대 페이지일 때(false)
          <li className="page-item" style={{ marginRight: 0 }}>
            <Link className="page-link" to="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
