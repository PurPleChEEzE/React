import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFreeList } from "../../../../api/board/free/FreeListApi";

export const fetchFreeList = createAsyncThunk(
    "getFreeList",
    async (params, { rejectedWithValue }) => {
        try {
            console.log("1111")
            const response = await getFreeList(params);
            console.log("2222")

            return response
        } catch (err) {
            return rejectedWithValue(err.response.data)
        }
    }
)

const initialState = {
    list: [],
    row: 0,
    pi: {},
    loading: false,
    error: null
}

const freeListSlice = createSlice({
    name: "freeList",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            //작업완료X
            .addCase(fetchFreeList.pending, (state) => {
                state.loading = true
                state.error = null;
            })
            //작업성공
            .addCase(fetchFreeList.fulfilled, (state, action) => {
                state.list = action.payload.list;
                state.row = action.payload.row;
                state.pi = action.payload.pi;
                state.loading = false;
            })
            //작업 실패
            .addCase(fetchFreeList.rejected, (state, action) => {
                state.loading = true;
                state.error = action.payload;
            })
    }

})

export default freeListSlice.reducer