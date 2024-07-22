import { useState } from "react";

export default function ObjectState() {
  // 객체 초기값 설정
  const [user, setUser] = useState({ name: "John", age: 19 });

  // const user = { name: "John", age: 19 };

  // 객체 상태 업데이트
  function updateName() {
    // Spread 연산자
    // { name: "Jane", age: 19 }
    setUser((user) => ({ ...user, name: "Jane" }));
  }

  return (
    <div>
      <p> name : {user.name}</p>
      <p> age : {user.age}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
}
