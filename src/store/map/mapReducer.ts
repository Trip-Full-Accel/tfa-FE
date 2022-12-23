import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxiosMap } from "http/customAxiosForMap";
import { CustomAxios } from "../../http/customAxios";
import { MapList, TourList } from "./mapType";

/**추천여행지 불러오는 리듀서 */
export const fetchGetTourList = createAsyncThunk("TOUR/GET", async () => {
  const response = await CustomAxios("/tour/list", "GET");
  // console.log(response.data);
  return response.data;
});

/** 맵 create 리듀서 */
export const fetchPostMap = createAsyncThunk(
  "MAP/POST",
  async (payload: MapList) => {
    console.log(payload);
    const { data } = await CustomAxiosMap("/course/create", "POST", payload);
    // console.log(data);
    return data;
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  maps: MapList[];
  tourList: TourList[];
  selectedTourList: TourList[];
  status: Status;
  error: Error;
}
const initialState: initialType = {
  maps: [],
  tourList: [],
  selectedTourList: [],
  status: "idle",
  error: "null",
};

const mapReducer = createSlice({
  name: "maps",
  initialState,
  reducers: {
    // 관광지 리스트 데이터 리덕스에 저장하는 메서드
    mapTest: (state, action) => {
      const { payload } = action;
      console.log(payload);
      state.selectedTourList = [...state.selectedTourList, payload];
    },
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
      })
      .addCase(fetchGetTourList.fulfilled, (state, action) => {
        state.tourList = action.payload;
      });
  },
});
export const { mapTest } = mapReducer.actions;
export default mapReducer.reducer;
