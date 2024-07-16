import { useState } from "react";


export default function BooleanState() {

    //버튼 클릭햇을떄 텍스트 숨기고
    //다시 클릭하면 텍스트를 보여줌 
    const [isClick, setIsClick] = useState(true);
    return (
        <>
            <button onClick={() => setIsClick(!isClick)}> {isClick ? "Hide" : "Show"}</button>
            {isClick && <p>안녕하세요</p>}
        </>
    )
}