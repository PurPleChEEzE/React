import { useState } from "react";

export default function StateQuiz2() {
    const [inputValue, setInputValue] = useState("");
    const [guguResult, setGuguResult] = useState(null);

    function getNumber() {
        const numberValue = parseInt(inputValue);

        if (isNaN(numberValue)) {
            setGuguResult("나이를 유효한 숫자로 입력하세요");
        } else {
            let count = 0;
            for (let i = 1; i <= 9; i++) {
                count += numberValue * i;
            }
            setGuguResult(count);
        }
    }



    return (
        <>
            <p>입력해 구구단 합을 구할 숫자를 입력</p>
            <input
                type="text" placeholder="숫자 입력" id="input-gugudan"
                onChange={(e) => setInputValue(e.target.value)}
            />
            <button onClick={getNumber}>제출</button>
            {guguResult !== null && (
                <div id="input-gugudan">
                    <p>결과 : {guguResult}</p>
                </div>
            )}
        </>
    );
}
