import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/">홈</a></li>
                    <li><a href="#">소개</a></li>
                    <li><a href="#">포트폴리오</a></li>
                    <li className="menu-item">
                        <a href="#">게시판</a>
                        <div className="submenu">
                            <a href="#l">뉴스 게시판</a>
                            {/* <a href="/freeBoard/list.do?cpage=1&category=fb_title&search-text=">자유 게시판</a> */}
                            <Link to="/freeBoard/list">자유게시판</Link>
                        </div>
                    </li>
                    <li><a href="#">연락하기</a></li>
                </ul>
            </nav>
        </>
    )
}

