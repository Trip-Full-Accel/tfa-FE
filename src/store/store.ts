import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import postSlice from "./posts/postSlice";
import footerSlice from "./footerName/footerSlice";
export const store = configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice,
    footerName: footerSlice,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
