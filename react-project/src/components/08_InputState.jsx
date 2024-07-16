import { useState } from "react";

export default function InputState() {
    const [inputValue, setInputValue] = useState("");
    const [addResult, setAddResult] = useState(null);

    function add() {
        // console.log(typeof inputValue);
        const numberValue = parseInt(inputValue);

        if (isNaN(numberValue)) {
            setAddResult("유효한 숫자가 아닙니다.");
        } else {
            setAddResult(numberValue + 10);
        }

    }



    return (
        <>
            <input type="text" onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={add}>더하기 10</button>
            {addResult != null && <p>결과 : {addResult}</p>}
        </>

    )
}