import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
export const fetchPost = createAsyncThunk(
  "postMappingTest/postMappingTestReducer",
  async () => {
    const send = await CustomAxios("/", "POST", {
      userid: "park",
      userpw: "1234",
    }); //api 기능별로 만들어서 써야함
    console.log(send);
    return send.data;
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

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPost.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPost.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPost.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
