import Header from "../../common/Header"
import Nav from "../../common/Nav"
import { useEffect } from "react"
import { getFreeList } from "../../../api/board/free/FreeListApi"

export default function FreeList() {
    useEffect(() => {
        const fetchList = () => {
            try {
                const getList = getFreeList();
                console.log(getList);
            } catch (err) {
                console.log("Axios Failed :  " + err)
            }
        }
        fetchList()
    })

    return (
        <>
            <Header></Header>
            <Nav></Nav>
            <section style={{ height: "70vh" }}>
                <h1>자유 게시판</h1>
                <hr />
                <div className="input-group mb-3" style={{ width: "100%", marginTop: 40 }}>
                    <form action="/freeBoard/list.do" method="GET">
                        <input type="hidden" name="cpage" defaultValue={1} />
                        <select
                            className="form-select"
                            id="inputGroupSelect02"
                            name="category"
                            style={{ width: 100, height: 46, flex: "0 0 auto" }}
                        >
                            <option value="fb_title" selected="">
                                제목
                            </option>
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
                        />
                        <button
                            className="btn btn-outline-secondary"
                            type="submit"
                            id="button-addon2"
                            style={{ height: 46 }}
                        >
                            검색
                        </button>
                    </form>
                    <button
                        onClick="window.location.href = '/form/enrollForm.do'"
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
                            <tr onClick="location.href='/freeBoard/detail.do?boardNo=${item.boardNo}'">
                                <td scope="row">1</td>
                                <td>제목1</td>
                                <td>내용1</td>
                                <td>2024-05-28</td>
                                <td>156</td>
                            </tr>
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

    )
}

