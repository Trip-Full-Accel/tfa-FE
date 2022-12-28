export interface boardState {
  board: BoardList[];
}
export interface BoardList {
  id: number;
  selected?: string;
  title: string;
  writer: string | number | undefined;
  content: string;
  hits?: number | null;
  like?: number | null;
  img: string | null;
  userId: number;
  nickname: string | any;
  createdAt: any;
  postId: any;
  url?: string;
  // select: string;
}
export interface BoardUpdate {
  id: number;
  title: string;
  content: string;
}
export interface BoardSearch {
  keyword?: string | null;
}

////
export interface BoardListReal {
  userId: number;
  title: string;
  content: string;
  url?: string | null;
}

export interface Modi {
  userId: any;
  title: any;
  content: any;
  url: any;
  postId: any;
}
