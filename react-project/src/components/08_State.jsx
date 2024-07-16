import { useState } from "react";

export default function ClickCount() {
    const [count, SetCount] = useState(0);
    // let count = 0;
    function handleClickCount() {
        // count++;
        SetCount(count => count + 1);
        SetCount(count => count + 1);
        SetCount(count => count + 1);
        // if (count < 10) {
        //     SetCount(count + 1);
        //     alert("클릭되었습니다.");
        // } else {
        //     alert("클릭횟수가 10회이므로 더이상 클릭할 수 없습니다.");
        // }
    }
    return (
        <>
            <h2>{count}</h2>
            {/* {count < 10 && <h2>{count}</h2>}
            {count >= 10 && <h2>10+</h2>} */}
            <button onClick={handleClickCount}>클릭</button>
        </>
    )
}
