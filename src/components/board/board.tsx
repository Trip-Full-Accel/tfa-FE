import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { RootState } from "store/store";
import styled from "styled-components";

const Board = () => {
  const navigate = useNavigate();
  const boardBtn = () => {
    navigate("/regist");
  };

  // board페이지 진입시 useEffect 활용해서 getData가 실행되야함 비동기처리필요

  const boardList = useSelector((state: RootState) => state.boardList.board);

  return (
    <div>
      <BoardTitleDiv>게시판</BoardTitleDiv>
      <BoardMainDiv>
        {boardList.map((el) => {
          return (
            <ContentDiv key={el.title + el.regdate}>
              <div>{el.title}</div>
              <div>{el.content}</div>
              <div>{el.writer}</div>
              <div>{el.regdate}</div>
              <div>{el.like}</div>
            </ContentDiv>
          );
        })}
      </BoardMainDiv>
      <Button onClick={() => boardBtn()}>글쓰러 가기</Button>
    </div>
  );
};

export default Board;

const BoardTitleDiv = styled.div`
  padding: 5rem;
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
const ContentDiv = styled.div`
  width: 350px;
  height: 300px;
  background-color: #bcb8bcaa;
  /* border: 2px dotted black; */
  margin: 1.5rem;
  border-radius: 40px;

  &:hover {
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%), 0 2px 10px 0 rgb(0 0 0 / 25%) !important;
    background-color: #bcb8bcaa;

    cursor: pointer;
  }
`;
