import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./board/boardReducer";
import counterReducer from "./counter/counterReducer";
import footerReducer from "./footerName/footerReducer";
import getMappingTestReducer from "./getMappingTest/getMappingTestReducer";
import tokenTest from "./kakaoTokenTest/tokenTest";
import postMappingTestReducer from "./postMappingTest/postMappingTestReducer";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    getMappingTest: getMappingTestReducer,
    postMappingTest: postMappingTestReducer,
    footerName: footerReducer,
    tokenTest: tokenTest,
    boardList: boardReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
