import { createSlice } from "@reduxjs/toolkit";
import { testApi } from "../API/test";

export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 0,
    message: "",
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    getData: (state: any) => {
      state.message = testApi();
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, getData } =
  counterSlice.actions;

export default counterSlice.reducer;
