// 백 - 소셜로그인만 구현 , 프론트 - 자체적으로 로그인 구현

export interface UserList {
  user: User[];
}
export interface User {
  id?: number | null;
  userId: string;
  pw: string;
  userCode: string;
  nickName: string;
  email: string;
}
export interface userInfoUpdate {
  id: number;
  nickName: string;
}
export interface findUserPw {
  userId: string;
  nickName: string;
  email: string;
}

export interface session {
  userId: string;
}

export interface userLogin {
  userId: string;
  pw: string;
}
