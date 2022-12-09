import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterReducer";
import footerReducer from "./footerName/footerReducer";
import getMappingTestReducer from "./getMappingTest/getMappingTestReducer";
import postMappingTestReducer from "./postMappingTest/postMappingTestReducer";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    getMappingTest: getMappingTestReducer,
    postMappingTest: postMappingTestReducer,
    footerName: footerReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
