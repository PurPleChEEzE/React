import { useDispatch } from "react-redux"
import { increment } from "../redux/modules/counter"

export default function LiftingChild() {
    // const count = useSelector(state => state.counter.count);
    const dispatch = useDispatch();
    return (
        <>
            <h1>LiftingChild</h1>
            <button onClick={() => dispatch(increment())}>카운트 증가 </button>
        </>
    );

}