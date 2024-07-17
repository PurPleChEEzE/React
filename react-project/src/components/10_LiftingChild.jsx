

export default function LiftingChild({ count, setCount }) {
    return (
        <>
            <h1>LeftingChild</h1>
            <button onClick={() => setCount(count + 1)}>count 증가</button>
        </>
    )
}