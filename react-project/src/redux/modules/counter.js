import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    count: 0
}

const counterReducer = createSlice({
    name: "counter",
    initialState,
    reducers: {//상태변경함수
        increment: state => {
            state.count += 1;
        }


    }
})

//리듀서 : 상태를 변경하는 함수(state, action을 매개변수로 받아 사용)
//액션 : 상태에 어떠한 변화가 필요할 떄 발생시키는 하나의 객체

export const { increment } = counterReducer.actions
export default counterReducer.reducer