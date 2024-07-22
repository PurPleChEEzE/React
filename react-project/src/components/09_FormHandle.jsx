import { useState } from "react";

export default function FormHandle() {
  // name, setName
  const [name, setName] = useState("");
  // email, setEmail
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault(); // 새로고침 방지

    const params = new URLSearchParams({
      name,
      email,
    }).toString();

    // fetch(URL, header)
    try {
      const response = await fetch(
        //  "http://localhost:8080/api/test?"+{params}
        `http://localhost:8080/api/test?${params}`,
        {
          method: "GET",
        }
      );

      if (response.ok && response.status === 200) {
        console.log("제출 성공");
      } else {
        console.log("제출 실패");
      }

      console.log(response);
    } catch (error) {
      console.log("에러 발생");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="이름을 입력해주세요."
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="이메일을 입력해주세요."
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">제출</button>
      </form>
    </>
  );
}
