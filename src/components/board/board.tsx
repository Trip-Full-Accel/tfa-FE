import Pagenation from "components/pagenation/Pagenation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { fetchGetBoard } from "store/board/boardReducer";
import { BoardList } from "store/board/boardType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";

const Board = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const boardBtn = () => {
    navigate("/regist");
  };

  // board페이지 진입시 useEffect 활용해서 getData가 실행되야함 비동기처리필요
  useEffect(() => {
    dispatch(fetchGetBoard());
    set보드리스트(boardList);
  }, []);

  //boardReducer에 담긴 data
  const boardList = useSelector((state: RootState) => state.board.board);
  console.log(boardList);
  const [보드리스트, set보드리스트] = useState<BoardList[]>([]);
  const [현재페이지, set현재페이지] = useState(1);
  const [보여줄리스트개수, set보여줄리스트개수] = useState(8);
  // 리덕스에서 보드리스트 가져와서 set 시키기
  const 슬라이스마지막값 = 현재페이지 * 보여줄리스트개수;
  const 슬라이스첫번째값 = 슬라이스마지막값 - 보여줄리스트개수;
  const 현재보여지는보드리스트 = 보드리스트.slice(
    슬라이스첫번째값,
    슬라이스마지막값
  );

  return (
    <div>
      <BoardTitleDiv>게시판</BoardTitleDiv>
      <BoardMainDiv>
        {boardList.slice(슬라이스첫번째값, 슬라이스마지막값).map((el, i) => {
          return (
            <ContentDiv key={el.title + el.writer}>
              <TitleDiv>{el.title}</TitleDiv>
              {/* <div>{el.content}</div> */}
              {/* <div>{el.writer}</div> */}
              {/* <div>{el.regdate}</div> */}
              <LikeDiv>{el.like}</LikeDiv>
            </ContentDiv>
          );
        })}
        <Pagenation
          totalPosts={보드리스트.length}
          currentPage={현재페이지}
          postsPerPage={보여줄리스트개수}
          setCurrentPage={set현재페이지}
        />
      </BoardMainDiv>
      <Button onClick={() => boardBtn()}>글쓰러</Button>
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
  margin: 1.5rem;
  border-radius: 40px;

  position: relative;
  &:hover {
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%), 0 2px 10px 0 rgb(0 0 0 / 25%) !important;
    background-color: #bcb8bcaa;
    cursor: pointer;
  }
`;

const TitleDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const LikeDiv = styled.div`
  float: right;
  padding: 30px;
`;
