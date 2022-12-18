import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { BoardList, BoardSearch } from "./boardType";

/** 전체글 list 요청 리듀서 */
export const fetchGetBoard = createAsyncThunk("BOARD/GET", async () => {
  const response = await CustomAxios("/post/list", "GET");
  return response.data;
});

/** 글 search 요청 리듀서 */
export const fetchGetSearch = createAsyncThunk(
  "BOARDSEARCH/GET",
  async (keyword: string) => {
    console.log(keyword);
    const { data } = await CustomAxios(
      `/posts/search/${keyword}`,
      "GET",
      keyword
    );
    // console.log(data);
    return data;
  }
);

/** 글 create 리듀서 */
export const fetchPostBoard = createAsyncThunk(
  "BOARD/POST",
  async (payload: BoardList) => {
    console.log(payload);
    await CustomAxios("/post/create", "POST", payload);
  }
);

/** 글 update 리듀서 */
export const fetchPutBoard = createAsyncThunk(
  "BOARD/PUT",
  async (payload: BoardList) => {
    console.log(payload);
    await CustomAxios(`/post/update/${payload.id}`, "PUT", payload);
  }
);

/** 글 delete 리듀서 */
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
  findedbaord: BoardList[];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  board: [],
  findedbaord: [],
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
        // console.log(action);
      })
      .addCase(fetchGetBoard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.board = action.payload;
        // console.log(action.payload);
      })
      .addCase(fetchGetBoard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchGetSearch.fulfilled, (state, action) => {
        state.findedbaord = action.payload;
      });
  },
});

export default boardReducer.reducer;
