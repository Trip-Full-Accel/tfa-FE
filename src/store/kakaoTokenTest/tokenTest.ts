import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";

let params = new URL(document.location.toString()).searchParams;
let code = params.get("code"); // 인가코드 받는 부분
let grant_type = "authorization_code";
let client_id = "82e8a356b706e9f7b99ef65f77a5fd43";
let uri = "http://localhost:3000/kakao/";

export const fetchToken = createAsyncThunk(
  "kakaoTokenTest/tokenTest",
  async () => {
    const send = await CustomAxios(
      `https://kauth.kakao.com/oauth/token`,
      "POST",
      `grant_type=${grant_type}
      &client_id=${client_id}
      &redirect_uri=${uri}
      &code=${code}`
    ); //api 기능별로 만들어서 써야함
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
      .addCase(fetchToken.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = state.posts.concat(action.payload);
      })
      .addCase(fetchToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
