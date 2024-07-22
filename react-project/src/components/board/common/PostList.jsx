import { useSelector } from "react-redux";

export default function PostList() {
  const { list, row } = useSelector((state) => state.freeList);

  return (
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
          {list.map((item, index) => (
            <tr onClick="" key={index}>
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
  );
}
