import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxiosPy } from "http/customAxiosForMap";
import { BoardList } from "./boardType";

/** 전체글 list 요청 리듀서 */
export const fetchGetSuggest = createAsyncThunk("SUGGEST/GET", async () => {
  const response = await CustomAxiosPy("/recommend/image", "POST");
  console.log(response);
  return response.data;
});

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  status: Status;
  error: Error;
}
const initialState: initialType = {
  status: "idle",
  error: "null",
};

const boardReducer = createSlice({
  name: "board",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGetSuggest.pending, (state, action) => {
        state.status = "loading";
        // console.log(action);
      })
      .addCase(fetchGetSuggest.fulfilled, (state, action) => {
        state.status = "succeeded";
        // state.board = action.payload;
        console.log("일단 연결성공");
      });
  },
});

export default boardReducer.reducer;
