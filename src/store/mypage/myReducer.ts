import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { myType } from "./myType";

/**나의정보 */
export const fetchMyInfo = createAsyncThunk(
  "MYINFO/GET",
  async (userId: myType) => {
    const { data } = await CustomAxios(`/users/${userId.userId}`, "GET");
    console.log(data);
    return data;
  }
);

/** 나의 게시글 */
export const fetchMyBoard = createAsyncThunk(
  "MYBOARD/GET",
  async (userId: myType) => {
    const { data } = await CustomAxios(`/posts/${userId.userId}`, "GET");
    return data;
  }
);

// /** 나의여행 */ cousreId
export const fetchMyTrip = createAsyncThunk(
  "MYTRIP/GET",
  async (userId: myType) => {
    const { data } = await CustomAxios(`/courses/${userId.userId}`, "GET");
    return data;
  }
);

/** 나의비용 */
export const fetchMyCost = createAsyncThunk(
  "MYCOST/GET",
  async (userId: myType) => {
    const { data } = await CustomAxios(`/costs/${userId.userId}`, "GET");
    return data;
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  myInfo: [];
  myBoard: [];
  myTrip: [];
  myCost: [];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  myInfo: [],
  myBoard: [],
  myTrip: [],
  myCost: [],
  status: "idle",
  error: "null",
};

const myReducer = createSlice({
  name: "maps",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchMyInfo.fulfilled, (state, action) => {
        state.myInfo = action.payload;
      })
      .addCase(fetchMyBoard.fulfilled, (state, action) => {
        state.myBoard = action.payload;
      })
      .addCase(fetchMyTrip.fulfilled, (state, action) => {
        state.myTrip = action.payload;
      })
      .addCase(fetchMyCost.fulfilled, (state, action) => {
        state.myCost = action.payload;
      });
  },
});
export default myReducer.reducer;