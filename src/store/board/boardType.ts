export interface boardState {
  board: BoardList[];
}
export interface BoardList {
  id: number;
  title: string;
  writer: string;
  content: string;
  regdate?: string; //자동생성인지?
  hits?: number | null;
  like?: number | null;
  select: string;
}
export interface BoardUpdate {
  id: number;
  title: string;
  content: string;
}
