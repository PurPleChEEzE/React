import { useState } from "react";

export default function StateQuiz6() {
  const [q5Number, setQ5Number] = useState(); // 사용자 입력
  const [q5Msg, setQ5Msg] = useState();

  function season() {
    const number = parseInt(q5Number);
    if ([3, 4, 5].includes(number)) {
      setQ5Msg("봄");
    } else if ([6, 7, 8].includes(number)) {
      setQ5Msg("여름");
    } else if ([9, 10, 11].includes(number)) {
      setQ5Msg("가을");
    } else if ([12, 1, 2].includes(number)) {
      setQ5Msg("겨울");
    } else {
      setQ5Msg("해당하는 계정이 없습니다.");
    }
  }

  return (
    <>
      <hr />
      <input
        type="text"
        id="q6-num"
        onChange={(e) => setQ5Number(e.target.value)}
      />
      <button onClick={season}>확인</button>
      <div id="q6-result">{q5Msg}</div>
    </>
  );
}
