import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterReducer";
import postSlice from "./posts/postReducer";
import footerSlice from "./footerName/footerReducer";
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
