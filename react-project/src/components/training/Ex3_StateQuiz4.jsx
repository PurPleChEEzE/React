import { useState } from "react";

export default function StateQuiz4() {
    const [inputValue, setInputValue] = useState("");
    const [numberResult, setNumberResult] = useState(null);
    const [resultColor, setResultColor] = useState("blue");

    function getNumber() {
        const numberValue = inputValue;

        if (isNaN(numberValue)) {
            setNumberResult("유효한 숫자로 입력하세요");
            setResultColor("blue");
        } else if (numberValue % 2 === 1) {
            setNumberResult("입력한 숫자는 홀수입니다");
            setResultColor("red");
        } else if (numberValue % 2 === 0) {
            setNumberResult("입력한 숫자는 짝수입니다.");
            setResultColor("blue");
        }

    }

    return (
        <>
            <input type="text" id="q4-number" placeholder="숫자 입력" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={getNumber}>제출</button>
            {numberResult != null && <div style={{ color: resultColor }}>출력 : {numberResult}</div>}
        </>
    );
}
