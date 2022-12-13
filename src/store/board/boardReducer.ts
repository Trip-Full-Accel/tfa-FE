import { createSlice } from "@reduxjs/toolkit";
import { boardState } from "./boardType";

const initialState: boardState = {
  board: [
    {
      title: "title1",
      // content: "content1",
      // writer: "writer1",
      // regdate: "regdate1",
      like: 100,
      // views: "30",
    },
    {
      title: "title2",
      // content: "content2",
      // writer: "writer2",
      // regdate: "regdate2",
      like: 200,
      // views: "30",
    },
    {
      title: "title3",
      // content: "content3",
      // writer: "writer3",
      // regdate: "regdate3",
      like: 300,
      // views: "30",
    },
    {
      title: "title4",
      // content: "content4",
      // writer: "writer4",
      // regdate: "regdate4",
      like: 400,
      // views: "30",
    },
    {
      title: "title5",
      // content: "content5",
      // writer: "writer5",
      // regdate: "regdate5",
      like: 500,
      // views: "30",
    },
    {
      title: "title6",
      // content: "content6",
      // writer: "writer6",
      // regdate: "regdate6",
      like: 600,
      // views: "30",
    },
  ],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {},
});

export const {} = boardSlice.actions;

export default boardSlice.reducer;
