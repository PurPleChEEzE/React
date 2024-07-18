import Header from "../../common/Header";
import Nav from "../../common/Nav";
import { useEffect, useState } from "react";
import { fetchFreeList } from "../../../redux/modules/board/free/FreeListSlice";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export default function FreeList() {
    const dispatch = useDispatch();
    const { list, pi, row, error } = useSelector((state) => state.freeList);
    const [selectCategory, setSelectCategory] = useState("fb_title");
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true); // 로딩 상태 추가

    const location = useLocation();

    useEffect(() => {
        const params = new URLSearchParams(location.search);
        const cpage = params.get("cpage") || 1;
        const category = params.get("category") || "fb_title";
        const searchTextParam = params.get("searchText") || "";

        setSelectCategory(category);
        setSearchText(searchTextParam);

        setLoading(true); // 로딩 시작
        dispatch(
            fetchFreeList({
                cpage: parseInt(cpage),
                category: category, // selectCategory 대신 category 사용
                searchText: searchTextParam, // searchText 대신 searchTextParam 사용
            })
        ).finally(() => {
            setLoading(false); // 로딩 완료
        });
    }, [dispatch, location.search]);

    if (loading) {
        return <div>Loading...</div>; // 로딩 중일 때 표시할 컴포넌트
    }

    return (
        <>
            <Header />
            <Nav />
            <section style={{ height: "70vh" }}>
                <h1>자유 게시판</h1>
                <hr />
                <div
                    className="input-group mb-3"
                    style={{ width: "100%", marginTop: 40 }}
                >
                    <select
                        className="form-select"
                        id="inputGroupSelect02"
                        name="category"
                        style={{ width: 100, height: 46, flex: "0 0 auto" }}
                        value={selectCategory} // value 속성 추가
                        onChange={(e) => setSelectCategory(e.target.value)} // onChange 핸들러 추가
                    >
                        <option value="fb_title">제목</option>
                        <option value="fb_content">내용</option>
                        <option value="fb_name">작성자</option>
                    </select>

                    <input
                        type="text"
                        style={{ width: 500, flex: "0 0 auto" }}
                        className="form-control"
                        name="search-text"
                        placeholder="검색어를 입력해주세요."
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                        value={searchText} // value 속성 추가
                        onChange={(e) => setSearchText(e.target.value)} // onChange 핸들러 추가
                    />
                    <button
                        className="btn btn-outline-secondary"
                        type="submit"
                        id="button-addon2"
                        style={{ height: 46 }}
                        onClick={() => {
                            // 검색 버튼 클릭 시 URL 쿼리스트링 업데이트
                            const searchParams = new URLSearchParams();
                            searchParams.set("category", selectCategory);
                            searchParams.set("searchText", searchText);
                            window.location.search = searchParams.toString();
                        }}
                    >
                        검색
                    </button>
                    <button
                        onClick={() => (window.location.href = "/form/enrollForm.do")}
                        style={{ position: "absolute", right: "4%" }}
                    >
                        등록
                    </button>
                </div>
                <div className="table-container">
                    <table className="table table-hover" style={{ marginTop: 10 }}>
                        <thead>
                            <tr>
                                <th scope="col">번호</th>
                                <th scope="col">제목</th>
                                <th scope="col">작성자</th>
                                <th scope="col">작성일</th>
                                <th scope="col">조회수</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list && list.map((item, index) => (
                                <tr key={index}>
                                    <td scope="row">{row - index}</td>
                                    <td>{item.boardTitle}</td>
                                    <td>{item.memberName}</td>
                                    <td>{item.boardIndate}</td>
                                    <td>{item.boardViews}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <nav
                    aria-label="Page navigation example"
                    style={{ backgroundColor: "white" }}
                >
                    <ul className="pagination" style={{ justifyContent: "center" }}>
                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">«</span>
                            </a>
                        </li>
                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="/freeBoard/list.do?cpage=1">
                                1
                            </a>
                        </li>

                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="/freeBoard/list.do?cpage=1">
                                2
                            </a>
                        </li>

                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="/freeBoard/list.do?cpage=1">
                                3
                            </a>
                        </li>

                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="/freeBoard/list.do?cpage=1">
                                4
                            </a>
                        </li>

                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="/freeBoard/list.do?cpage=1">
                                5
                            </a>
                        </li>
                        <li className="page-item" style={{ marginRight: 0 }}>
                            <a className="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">»</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </section>
        </>
    );
}
