export default function LiftingChild({ count, setCount }) {
  return (
    <>
      <h1>LiftingChild</h1>
      <button onClick={() => setCount(count + 1)}>카운트 증가</button>
    </>
  );
}
