import { TestType } from "./reduxTestType";
import { createSlice } from "@reduxjs/toolkit";

// 일반 스테이트 값 리덕스로 저장하는 테스트

interface initialType {
  test: TestType[];
}

const initialState: initialType = {
  test: [],
};
export const testSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    reduxTest: (state, action) => {
      const { payload } = action;
      state.test = [...state.test, ...payload];
    },
  },
});

export const { reduxTest } = testSlice.actions;

export default testSlice.reducer;
