import { createSlice } from "@reduxjs/toolkit";

const footerSlice = createSlice({
  name: "footerName",
  initialState: {
    value: [
      "GunHo-Kwak",
      "SungMin-Lim",
      "HyeMin-Won",
      "GwangDeok-Park",
      "CheolRyeon-Park",
      "SungHo-Kim",
    ],
  },
  reducers: {},
});

export default footerSlice.reducer;
