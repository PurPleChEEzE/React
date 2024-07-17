import { useState } from "react";
import LiftingChild from "../components/10_LiftingChild";
import StateChild from "../components/10_StateChild";


export default function LiftingStatePage() {
    const [count, setCount] = useState(0);
    return (
        <>
            <LiftingChild count={count} setCount={setCount}></LiftingChild>
            <StateChild count={count}></StateChild>
        </>
    )
}