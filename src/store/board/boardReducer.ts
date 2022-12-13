import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { BoardList, boardState, BoardUpdate } from "./boardType";

// 비동기 처리로 BE의 post list에 전체글 list 요청
export const fetchGetBoard = createAsyncThunk("BOARD/GET", async () => {
  const response = await CustomAxios("/post/list", "GET");
  return response.data;
});
export const fetchPostBoard = createAsyncThunk(
  "BOARD/POST",
  async (payload: BoardList) => {
    console.log(payload);
    await CustomAxios("/post/create", "POST", payload);
  }
);
// export const fetchPutBoard = createAsyncThunk(
//   "BOARD/PUT",
//   async (payload: BoardUpdate) => {
//     await CustomAxios(`/post/update/${payload.id}`, "PUT");
//   }
// );
export const fetchDeleteBoard = createAsyncThunk(
  "BOARD/DELETE",
  async (id: number) => {
    await CustomAxios(`/post/delete/${id}`, "DELETE");
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  board: BoardList[];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  board: [],
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
      .addCase(fetchGetBoard.pending, (state, action) => {
        state.status = "loading";
        console.log(action);
      })
      .addCase(fetchGetBoard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.board = action.payload;
        console.log(action.payload);
      })
      .addCase(fetchGetBoard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default boardReducer.reducer;
