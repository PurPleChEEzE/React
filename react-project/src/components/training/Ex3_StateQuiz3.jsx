import { useState } from "react";

export default function StateQuiz3() {
    const [inputValue, setInputValue] = useState("");
    const [nameResult, setNameResult] = useState(null);

    const [inputValue2, setInputValue2] = useState("");
    const [ageResult, setAgeResult] = useState(null);

    const [resultColor, setResultColor] = useState("black");

    function getValue() {
        const nameValue = inputValue;
        if (nameValue === "") {
            const result = "유효한 이름이 아닙니다.";
            setAgeResult(result);
        } else {
            console.log(nameResult);
            setNameResult(nameValue);
            const ageValue = inputValue2;
            if (isNaN(ageValue)) {
                setAgeResult("나이를 유효한 숫자로 입력하세요");
                setResultColor("red");
            } else if (ageValue < 18) {
                setAgeResult(nameValue + "님 안녕하세요! 미성년자 분이시군요! ");
                setResultColor("black");
            } else if (ageValue >= 18) {
                setAgeResult(nameValue + "님 안녕하세요! 성인 분이시군요! ");
                setResultColor("black");
            }
        }
    }

    return (
        <>
            <input type="text" id="q3-name" placeholder="이름 입력" onChange={(e) => setInputValue(e.target.value)} />
            <input type="text" id="q3-age" placeholder="나이 입력" onChange={(e) => setInputValue2(e.target.value)} />
            <button onClick={getValue}>제출</button>
            {ageResult != null && <div style={{ color: resultColor }}><p>{ageResult}</p></div>}
        </>
    );
}
