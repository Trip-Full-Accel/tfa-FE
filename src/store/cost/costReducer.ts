import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { CostList } from "./costType";

//
export const fetchGetCost = createAsyncThunk("COST/GET", async () => {
  const response = await CustomAxios("/cost/getcost", "GET");
  return response.data;
});
export const fetchPostCost = createAsyncThunk(
  "COST/POST",
  async (payload: CostList) => {
    console.log(payload);
    await CustomAxios("/cost/create", "POST", payload);
  }
);

// cost 수정 사용 안할예정
export const fetchPutBoard = createAsyncThunk(
  "COST/PUT",
  async (payload: CostList) => {
    console.log(payload);
    await CustomAxios(`/post/update/${payload.id}`, "PUT", payload);
  }
);
// cost 삭제 사용 안할예정
export const fetchDeleteBoard = createAsyncThunk(
  "COST/DELETE",
  async (id: number) => {
    await CustomAxios(`/post/delete/${id}`, "DELETE");
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  cost: CostList[];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  cost: [],
  status: "idle",
  error: "null",
};

const costReducer = createSlice({
  name: "cost",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGetCost.pending, (state, action) => {
        state.status = "loading";
        // console.log(action);
      })
      .addCase(fetchGetCost.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cost = action.payload;
        // console.log(action.payload);
      })
      .addCase(fetchGetCost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default costReducer.reducer;
