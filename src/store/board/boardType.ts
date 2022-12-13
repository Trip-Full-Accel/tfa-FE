export interface boardState {
  board: BoardList[];
}
interface BoardList {
  title: string;
  writer: string;
  content: string;
  regdate: string;
  like: string;
}
