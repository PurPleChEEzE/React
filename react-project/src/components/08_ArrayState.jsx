import { useState } from "react";

export default function ArrayState() {
  // 상태 초기 값 설정
  const [items, setItems] = useState(["item-1", "item-2", "item-3"]);

  // 상태 업데이트 (아이템 추가)
  function addItem() {
    setItems((items) => [...items, "new-item"]);
  }

  // 상태 업데이트 (특정 아이템 삭제)
  function deleteItem(index) {
    setItems((items) => items.filter((_, i) => i !== index));

    // items = ["item-1", "item-2", "item-3"]
    // i = 0, index = 1
    // return 0 !== 1     -->  true가 나오면서 새로운 배열을 반환
    // 결과 : ["item-1"]

    // i = 1, index = 1
    // return 1 !== 1     --> false가 나오면서 반환 X
    // 결과 : ["item-1"]

    // i = 2, index = 1
    // return 2 !== 1     --> true가 나오면서 새로운 배열을 반환
    // 결과 : ["item-1", "item-3"]
  }
  function updateItem(index, newItem) {
    setItems((items) => items.map((item, i) => (i === index ? newItem : item)));
    // index : 1 , newItem : "변경됨"
    // items = ["item-1", "item-2", "item-3"]

    // item : "item-1", i : 0
    // i===index -> 0===1 -> false -> return item
    // ["item-1"]

    // item : "item-2", i : 1
    // i===index -> 1===1 -> true -> return newItem
    // ["item-1", "변경됨"]

    // item : "item-3", i : 2
    // i===index -> 2===1 -> false -> return item
    // ["item-1", "변경됨", "item-3"]
  }

  return (
    <>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            {/* 화살표 함수를 사용하면 즉시 실행을 방지함 */}
            <button onClick={() => updateItem(index, "변경됨")}>변경</button>
            <button onClick={() => deleteItem(index)}>삭제</button>
          </li>
        ))}
      </ul>
      <button onClick={addItem}>Add Item</button>
    </>
  );
}
