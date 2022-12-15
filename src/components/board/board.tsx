import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { AppDispatch } from "store/store";
import styled from "styled-components";
import BList from "./boardList";

const Board = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const boardBtn = () => {
    navigate("/regist");
  };

  // board페이지 진입시 useEffect 활용해서 getData가 실행되야함 비동기처리필요
  // useEffect(() => {
  //   dispatch(fetchGetBoard());
  // }, []);

  //boardReducer에 담긴 data
  // const boardList = useSelector((state: RootState) => state.board.board);
  // console.log(boardList);
  // const [보드리스트, set보드리스트] = useState<BoardList[]>([]);

  return (
    <>
      <BoardTitleDiv>
        <img src="/img/boardimg.png" />
      </BoardTitleDiv>
      <BoardMainDiv>
        <BList />
      </BoardMainDiv>
      <Button onClick={() => boardBtn()}>글쓰러</Button>
    </>
  );
};

export default Board;

const BoardTitleDiv = styled.div`
  /* padding: 5rem; */
`;

const BoardMainDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: #fafafa;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
