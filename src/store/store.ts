import { configureStore } from "@reduxjs/toolkit";
import boardReducer from "./board/boardReducer";
import costReducer from "./cost/costReducer";
import counterReducer from "./counter/counterReducer";
import footerReducer from "./footerName/footerReducer";
import getMappingTestReducer from "./getMappingTest/getMappingTestReducer";
import imgReducer from "./image/imgReducer";
import tokenTest from "./kakaoTokenTest/tokenTest";
import mapReducer from "./map/mapReducer";
import postMappingTestReducer from "./postMappingTest/postMappingTestReducer";
import reduxTestReducer from "./reduxTest/reduxTestReducer";
import userReducer from "./user/userReducer";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    getMappingTest: getMappingTestReducer,
    postMappingTest: postMappingTestReducer,
    footerName: footerReducer,
    tokenTest: tokenTest,
    board: boardReducer,
    user: userReducer,
    cost: costReducer,
    map: mapReducer,
    test: reduxTestReducer,
    img: imgReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
