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
