import { useState } from "react";

export default function StateQuiz5() {
    const [inputValue, setInputValue] = useState("");
    const [numberResult, setNumberResult] = useState(null);



    function getNumber() {
        const numberValue = inputValue;

        if (isNaN(numberValue)) {
            setNumberResult(" 유효한 숫자로 입력하세요");
        } else if (numberValue >= 12 || numberValue == 0) {
            setNumberResult("값이 너무 크거나 작습니다.");
        } else {
            setNumberResult(numberValue)
        }

    }

    return (
        <>
            <input type="text" id="q4-number" placeholder="숫자 입력" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={getNumber}>제출</button>
            {numberResult != null && <p>출력 : {numberResult}</p>}
        </>
    );
}