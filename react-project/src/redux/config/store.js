import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../modules/counter";
import FreeListSlice from "../modules/board/free/FreeListSlice";

export default configureStore({
  reducer: {
    counter222: counterReducer,
    freeList: FreeListSlice,
  },
});
