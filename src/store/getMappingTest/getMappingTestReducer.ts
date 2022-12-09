import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
export const fetchGet = createAsyncThunk(
  "getMappingTest/getMappingTestReducer",
  async () => {
    const response = await CustomAxios("/api/hello", "GET"); //api 기능별로 만들어서 써야함
    return response.data;
  }
);
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  posts: string[];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  posts: [],
  status: "idle",
  error: "null",
};

const getReducer = createSlice({
  name: "get",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchGet.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchGet.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchGet.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default getReducer.reducer;
