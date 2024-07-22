export default function SearchBar({
  selectCategory,
  setSelectCategory,
  setSearchText,
  handleSearch,
}) {
  return (
    <div className="input-group mb-3" style={{ width: "100%", marginTop: 40 }}>
      <select
        className="form-select"
        id="inputGroupSelect02"
        name="category"
        defaultValue={selectCategory}
        onChange={(e) => setSelectCategory(e.target.value)}
        style={{ width: 100, height: 46, flex: "0 0 auto" }}
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
        onChange={(e) => setSearchText(e.target.value)}
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleSearch}
        id="button-addon2"
        style={{ height: 46 }}
      >
        검색
      </button>
      <button onClick="" style={{ position: "absolute", right: "4%" }}>
        등록
      </button>
    </div>
  );
}
