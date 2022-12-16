import { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { fetchGetBoard } from "store/board/boardReducer";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import BList from "./boardList";

const Board = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // 글작성 페이지 이동
  const boardBtn = () => {
    navigate("/regist");
  };
  useEffect(() => {
    dispatch(fetchGetBoard());
  }, []);
  // board list 요청시 spinner
  const load = useSelector((state: RootState) => state.board.status);

  return (
    <>
      <BoardTitleDiv>
        <img src="/img/boardimg.png" />
      </BoardTitleDiv>
      <BoardMainDiv>
        {load === "loading" ? <Spinner></Spinner> : <BList />}
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
