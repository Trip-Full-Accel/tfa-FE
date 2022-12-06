import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import postSlice from "./posts/postSlice";
import footerSlice from "./footerName/footerSlice";
export default configureStore({
  reducer: {
    counter: counterSlice,
    posts: postSlice,
    footerName: footerSlice,
  },
});
