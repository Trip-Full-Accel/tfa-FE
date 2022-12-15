import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { CustomAxios } from "../../http/customAxios";
import { findUserPw, User, userInfoUpdate } from "./userType";

/** 유저 정보 가져오는 리듀서*/
export const fetchGetUserInfo = createAsyncThunk("USERINFO/GET", async () => {
  const response = await CustomAxios("/user/info", "GET");
  return response.data;
});

/** 비밀번호 찾기 리듀서*/
export const fetchPostUserPwFind = createAsyncThunk(
  "FINDPW/POST",
  async (payload: findUserPw) => {
    console.log(payload.email, payload.nickName, payload.userId);
    const { data } = await CustomAxios(`/user/findpw`, "POST", payload);
    console.log(data[0].pw);
    return data[0].pw;
  }
);

/** 회원가입 리듀서*/
export const fetchPostUserJoin = createAsyncThunk(
  "USERJOIN/POST",
  async (payload: User) => {
    console.log(payload);
    const { data } = await CustomAxios("/user/join", "POST", payload);
    console.log(data.userId);
    return data.userId;
  }
);

/** 아이디 중복확인 리듀서*/
export const fetchUserCheck = createAsyncThunk(
  "USERCHECK/POST",
  async (id: string) => {
    console.log(id);
    const { data } = await CustomAxios(`/user/check/${id}`, "GET", id);
    // console.log(data);
    return data;
  }
);

/**닉네임 중복확인 리듀서*/
export const fetchUserNickCheck = createAsyncThunk(
  "USERNICKCHECK/POST",
  async (nick: string) => {
    console.log(nick);
    const { data } = await CustomAxios(`/user/check/${nick}`, "GET", nick);
    // console.log(data);
    return data;
  }
);

// 회원정보 수정 리듀서
export const fetchPutUserInfo = createAsyncThunk(
  "USERINFOUPDATE/PUT",
  async (payload: userInfoUpdate) => {
    console.log(payload);
    await CustomAxios(`/user/update/${payload.id}`, "PUT", payload);
  }
);

// 회원 탈퇴 리듀서
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
  nickName: string;
  email: string;
  findedpw: string;
  status: Status;
  error: Error;
}
const initialState: initialType = {
  user: [],
  userId: "",
  nickName: "",
  email: "",
  findedpw: "",
  status: "idle",
  error: "null",
};

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
      // 로그인 성공시 스테이트에 값 담음
      .addCase(fetchPostUserJoin.fulfilled, (state, action) => {
        // state.user = [...state.user, action.payload];
        state.userId = action.payload;
        console.log("state.user값" + state.userId);
        // localStorage.setItem("userId", state.userId);
      })

      // 비밀번호 찾기 성공시 스테이트에 값 담음
      .addCase(fetchPostUserPwFind.fulfilled, (state, action) => {
        state.findedpw = action.payload;
      });
  },
});

export default userReducer.reducer;
// export const { session } = userReducer.actions;
