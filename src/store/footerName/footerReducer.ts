import { createSlice } from "@reduxjs/toolkit";
import { FooterState } from "./footerType";

const initialState: FooterState = {
  foot: [
    "GunHo-Kwak",
    "SungMin-Lim",
    "HyeMin-Won",
    "GwangDeok-Park",
    "CheolRyeon-Park",
    "SungHo-Kim",
  ],
};

const footerSlice = createSlice({
  name: "footerName",
  initialState,
  reducers: {},
});

export default footerSlice.reducer;
