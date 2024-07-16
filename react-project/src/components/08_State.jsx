import { useState } from "react";

export default function ClickCount() {
    const [count, SetCount] = useState(0);
    // let count = 0;
    function handleClickCount() {
        // count++;
        SetCount(count + 1);
        alert("클릭되었습니다.");
    }
    return (
        <>
            <h2>{count}</h2>
            <button onClick={handleClickCount}>클릭</button>
        </>
    )
}
