import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { imgType } from "./imgType";

/** 이미지 create 리듀서 */
export const fetchPostImg = createAsyncThunk(
  "IMG/POST",
  async (payload: imgType) => {
    console.log(payload);
    const { data } = await CustomAxios("/img/create", "POST", payload);
    return data;
  }
);

/** 이미지 update 리듀서 */
export const fetchPutImg = createAsyncThunk(
  "IMG/PUT",
  async (payload: imgType) => {
    console.log(payload);
    const { data } = await CustomAxios(
      `/img/update/${payload.url}`,
      "PUT",
      payload
    );
    console.log(data);
    return data;
  }
);

/** 이미지 delete 리듀서 */
export const fetchDeleteImg = createAsyncThunk(
  "IMG/DELETE",
  async (id: number) => {
    const { data } = await CustomAxios(`/img/delete/${id}`, "DELETE");
    return data;
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  img: string;
  status: Status;
  error: Error;
}
const initialState: initialType = {
  img: "",
  status: "idle",
  error: "null",
};

const boardReducer = createSlice({
  name: "img",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPostImg.pending, (state, action) => {
        state.status = "loading";
        // console.log(action);
      })
      .addCase(fetchPostImg.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.img = action.payload;
        // console.log(action.payload);
      })
      .addCase(fetchPostImg.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default boardReducer.reducer;
