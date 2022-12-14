import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { User, userInfoUpdate } from "./userType";

//
export const fetchGetUserInfo = createAsyncThunk("USERINFO/GET", async () => {
  const response = await CustomAxios("/user/info", "GET");
  return response.data;
});
export const fetchPostUserJoin = createAsyncThunk(
  "USERJOIN/POST",
  async (payload: User) => {
    console.log(payload);
    const { data } = await CustomAxios("/user/join", "POST", payload);
    console.log(data.userId);
    return data.userId;
  }
);
export const fetchUserCheck = createAsyncThunk(
  "USERCHECK/POST",
  async (id: string) => {
    console.log(id);
    const { data } = await CustomAxios(`/user/check/${id}`, "GET", id);
    // console.log(data);
    return data;
  }
);

export const fetchPutUserInfo = createAsyncThunk(
  "USERINFOUPDATE/PUT",
  async (payload: userInfoUpdate) => {
    console.log(payload);
    await CustomAxios(`/user/update/${payload.id}`, "PUT", payload);
  }
);
export const fetchDeleteUser = createAsyncThunk(
  "USERDELETE/DELETE",
  async (id: number) => {
    await CustomAxios(`/user/delete/${id}`, "DELETE");
  }
);

// 타입에 따라서 처리 가능
type Status = "failed" | "loading" | "succeeded" | "idle";
type Error = string | undefined;
interface initialType {
  user: User[];
  userId: string;
  status: Status;
  error: Error;
}
const initialState: initialType = {
  user: [],
  userId: "",
  status: "idle",
  error: "null",
};

// interface userIdType {
//   userId: string;
//   status: Status;
//   error: Error;
// }
// const initialState2: userIdType = {
//   userId: "",
//   status: "idle",
//   error: "null",
// };

// const userIdReducer = createSlice({
//   name: "userId",
//   initialState2,
//   reducers: {},
// });

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchGetUserInfo.pending, (state, action) => {
        state.status = "loading";
        // console.log(action);
      })
      .addCase(fetchGetUserInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        // console.log(action.payload);
      })
      .addCase(fetchGetUserInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchPostUserJoin.fulfilled, (state, action) => {
        // state.user = [...state.user, action.payload];
        state.userId = action.payload;
        console.log("state.user값" + state.userId);
        localStorage.setItem("userId", state.userId);
      });
  },
});

export default userReducer.reducer;
// export const { session } = userReducer.actions;
