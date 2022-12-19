import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxiosMap } from "http/customAxiosForMap";
import { CustomAxios } from "../../http/customAxios";
import { MapList } from "./mapType";

/** 맵 create 리듀서 */
export const fetchPostMap = createAsyncThunk(
  "MAP/POST",
  async (payload: MapList) => {
    console.log(payload);
    const { data } = await CustomAxiosMap("/course/make", "POST", payload);
    return data;
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  maps: MapList[];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  maps: [],
  status: "idle",
  error: "null",
};

const mapReducer = createSlice({
  name: "maps",
  initialState,
  reducers: {
    // omit existing reducers here
  },
  extraReducers(builder) {
    builder
      .addCase(fetchPostMap.pending, (state, action) => {
        state.status = "loading";
        // console.log(action);
      })
      .addCase(fetchPostMap.fulfilled, (state, action) => {
        state.status = "succeeded";

        // 건호님이 보내주는 반환데이터 저장후에 maps 페이지 에서 꺼내서 써야함
        state.maps = action.payload;
        // console.log(action.payload);
      })
      .addCase(fetchPostMap.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default mapReducer.reducer;
