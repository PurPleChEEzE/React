import { useState } from "react";

export default function StateQuiz1() {
    const [inputValue, setInputValue] = useState("");
    const [nameResult, setNameResult] = useState(null);

    function getName() {
        const nameValue = inputValue;
        if (nameValue === "") {
            const result = "유효한 이름이 아닙니다.";
            setNameResult(result);
            console.log(nameResult);
            alert(result);
        } else {
            const result = inputValue + "님 환영합니다!";
            setNameResult(result);
            console.log(nameResult);
            alert(result);
        }
    }

    return (
        <>
            <input type="text" id="q1-name" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={getName}>제출</button>
        </>
    );
}
