import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getFreeList } from "../../../../api/board/free/FreeListApi";

export const fetchFreeList = createAsyncThunk(
  "getFreeList",
  async (params, { rejectedWithValue }) => {
    try {
      const response = await getFreeList(params);
      return response;
    } catch (err) {
      return rejectedWithValue(err.response.data);
    }
  }
);

const initialState = {
  list: [],
  row: 0,
  pi: {},
  loading: false,
  error: null,
};

const freeListSlice = createSlice({
  name: "freeList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFreeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFreeList.fulfilled, (state, action) => {
        state.list = action.payload.list;
        state.row = action.payload.row;
        state.pi = action.payload.pi;
        state.loading = false;
      })
      .addCase(fetchFreeList.rejected, (state, action) => {
        state.loading = true;
        state.error = action.payload;
      });
  },
});

export default freeListSlice.reducer;
