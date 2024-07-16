import { useState } from "react";

export default function StateQuiz6() {
    const [inputValue, setInputValue] = useState("");
    const [numberResult, setNumberResult] = useState(null);



    function getWeather() {
        const numberValue = inputValue;

        if (isNaN(numberValue)) {
            setNumberResult(" 유효한 숫자로 입력하세요");
        } else if (numberValue >= 3 && numberValue <= 5) {
            setNumberResult("봄");
        } else if (numberValue >= 6 && numberValue <= 8) {
            setNumberResult("여름");
        } else if (numberValue >= 9 && numberValue <= 11) {
            setNumberResult("가을");
        } else if (numberValue == 12 || numberValue == 1 || numberValue == 2) {
            setNumberResult("겨울");
        } else {
            setNumberResult("값이 12를 넘습니다.")
        }

    }

    return (
        <>
            <input type="text" id="q4-number" placeholder="계절에 해당하는 숫자 입력" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={getWeather}>제출</button>
            {numberResult != null && <p>계절 : {numberResult}</p>}
        </>
    );
}