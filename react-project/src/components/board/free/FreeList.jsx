import Header from "../../common/Header";
import Nav from "../../common/Nav";
import { useEffect, useState } from "react";
// import { getFreeList } from "../../../api/board/free/FreeListApi"
import { fetchFreeList } from "../../../redux/modules/board/free/FreeListSlice";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Pagination from "../common/Pagination";
import PostList from "../common/PostList";
import SearchBar from "../common/SearchBar";

export default function FreeList() {
  // useEffect(() => {
  //     const fetchList = () => {
  //         try {
  //             const getList = getFreeList();
  //             console.log(getList);
  //         } catch (err) {
  //             console.log("Axios Failed :  " + err)
  //         }
  //     }
  //     fetchList()
  // })

  const dispatch = useDispatch();
  //FreeListSlice에 있는 list, pi, row, error 상태 가져오기

  const [selectCategory, setSelectCategory] = useState("fb_title");
  const [searchText, setSearchText] = useState("");

  //쿼리스트링을 포함한 URL 정보를 불러오는 함수
  const location = useLocation();

  //DOM 랜더링될떄 최초 한번 실행할 리액트 훅
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    //쿼리스트링에 cpage가 없으면 1
    const cpage = params.get("cpage") || 1;
    const category = params.get("category") || "fb_title";
    const searchTextParam = params.get("searchText") || "";

    setSelectCategory(category);
    setSearchText(searchTextParam);

    dispatch(
      fetchFreeList({
        cpage: parseInt(cpage),
        category: selectCategory,
        searchText: searchText,
      })
    );
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchFreeList({
        cpage: 1,
        category: selectCategory,
        searchText: searchText,
      })
    );
  };
  const handlePageButton = (cpage) => {
    dispatch(
      fetchFreeList({
        cpage: cpage,
        category: selectCategory,
        searchText: searchText,
      })
    );
  };

  return (
    <>
      <Header></Header>
      <Nav></Nav>
      <section style={{ height: "70vh" }}>
        <h1>자유 게시판</h1>
        <hr />
        <SearchBar
          selectCategory={selectCategory}
          setSelectCategory={setSelectCategory}
          setSearchText={setSearchText}
          handleSearch={handleSearch}
        />
        <PostList />
        <Pagination handlePageButton={handlePageButton} />
      </section>
    </>
  );
}
