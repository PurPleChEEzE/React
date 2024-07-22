import { useState } from "react";

export default function ClickCount() {
  // 기존 자바스크립트 방식
  // 값 변경 X (리렌더링이 되지 않기 때문에)
  // let count = 0;

  // function handleClickCount() {
  //   count++;
  //   alert("클릭 되었습니다!");
  // }

  // 2. 상태 변수와 상태 변경 함수 생성     1. 초기 상태 설정
  const [count, setCount] = useState(0);

  function handleClickCount() {
    // 3. 상태 업데이트
    // 초기값 : 0
    setCount((count) => count + 1); // 1
    setCount((count) => count + 1); // 2
    setCount((count) => count + 1); // 3
    // if (count < 10) {
    //   setCount(count + 1);
    // } else {
    //   alert("더이상 클릭할 수 없습니다.");
    // }
  }

  return (
    <>
      <h2>{count}</h2>
      {/* {count < 10 && <h2>{count}</h2>}
      {count >= 10 && <h2>10</h2>} */}
      <button onClick={handleClickCount}>클릭</button>
    </>
  );
}
