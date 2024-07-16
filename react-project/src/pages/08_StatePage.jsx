import ClickCount from "../components/08_State"
import ObjectState from "../components/08_ObjectState"
import ArrayState from "../components/08_ArrayState"
import BooleanState from "../components/08_BooleanState"
import InputState from "../components/08_InputState"
import BackButton from "../components/common/BackButton"

export default function StatePage() {
    return (
        <>
            <h1>클릭</h1>
            <ClickCount />
            <hr />
            <h1>객체상태 변경하기</h1>
            <ObjectState />
            <hr />
            <ArrayState />
            <hr />
            <BooleanState />
            <hr />
            <InputState />
            <hr />
            <BackButton />
        </>
    )
}