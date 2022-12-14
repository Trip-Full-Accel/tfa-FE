import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { BoardList, BoardListReal, BoardSearch, Modi } from "./boardType";

/** 전체글 list 요청 리듀서 */
export const fetchGetBoard = createAsyncThunk("BOARD/GET", async () => {
  const response = await CustomAxios("/posts", "GET");
  console.log(response);
  return response.data;
});

/** 글 search 요청 리듀서 */
export const fetchGetSearch = createAsyncThunk(
  "BOARDSEARCH/GET",
  async (keyword: string) => {
    const { data } = await CustomAxios(
      `/posts/search/${keyword}`,
      "GET",
      keyword
    );
    console.log(data);
    return data;
  }
);

/** 상셋글 요청 리듀서 */
export const fetchGetDetail = createAsyncThunk(
  "BOARDDETAIL/GET",
  async (boardId: string) => {
    console.log("boardId = ", boardId);
    const { data } = await CustomAxios(
      `/posts/detail/${boardId}`,
      "GET",
      boardId
    );
    console.log("detail return = ", data);
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
  async (payload: Modi) => {
    console.log(payload);
    const { data } = await CustomAxios(
      `/posts/${payload.postId}`,
      "PUT",
      payload
    );
    console.log(data);
    return data;
  }
);

////////// Real 글 등록
export const fetchPostBoardRegist = createAsyncThunk(
  "BOARDREGIST/POST",
  async (payload: BoardListReal) => {
    console.log(payload);
    const { data } = await CustomAxios(`/posts`, "POST", payload);
    console.log(data);
    return data;
  }
);

/** 글 delete 리듀서 */
export const fetchDeleteBoard = createAsyncThunk(
  "BOARD/DELETE",
  async (id: number) => {
    const { data } = await CustomAxios(`/posts/${id}`, "DELETE");
    return data;
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  board: BoardList[];
  findedBoard: BoardList[];
  detailBoard: any;
  status: Status;
  regist: Status;
  error: Error;
  loadData: Status;
}
const initialState: initialType = {
  board: [],
  findedBoard: [],
  detailBoard: [],
  regist: "idle",
  status: "idle",
  error: "null",
  loadData: "idle",
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
        state.loadData = "loading";
        // console.log(action);
      })
      .addCase(fetchGetBoard.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.board = action.payload;
        console.log(state.board);
      })
      .addCase(fetchGetBoard.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchGetSearch.fulfilled, (state, action) => {
        state.findedBoard = action.payload;
      })
      .addCase(fetchGetDetail.fulfilled, (state, action) => {
        const result = action.payload;
        state.detailBoard = result;
        console.log("리덕스에 담긴 쓸값", state.detailBoard);
      })
      .addCase(fetchPostBoardRegist.fulfilled, (state, action) => {
        state.regist = "succeeded";
      });
  },
});

export default boardReducer.reducer;
