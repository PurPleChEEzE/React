export default function Event() {
  function handleClick() {
    alert("클릭되었습니다!");
  }

  return <button onClick={handleClick}>클릭</button>;
}

// 1. 이벤트 리스너
// HTML요소.AddEventListerner('click', function() {
//    실행할 동작 정의
// })

// 이벤트를 등록, 삭제등의 작업을 수행

// 2. 이벤트 핸들러
// <button onclick="func()">버튼</button>

// function func() {
//    실행할 동작 정의
// }
// 이벤트가 발생했을 때 실행할 동작(함수)
