import { configureStore } from "@reduxjs/toolkit";
import FreeListSlice from "../modules/board/free/FreeListSlice";
import counterReducer from "../modules/counter";

export default configureStore({
    reducer: {
        counter: counterReducer,
        freeList: FreeListSlice,
    }
})