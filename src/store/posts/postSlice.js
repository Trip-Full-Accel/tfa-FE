import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "./../../http/customAxios";
export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const response = await CustomAxios("/api/hello", "get"); //api 기능별로 만들어서 써야함
  return response.data;
});

const postSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    status: "idle",
    error: null,
  },
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
