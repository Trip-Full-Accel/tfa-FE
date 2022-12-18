import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { fetchGetBoard, fetchGetSearch } from "store/board/boardReducer";
import { BoardSearch } from "store/board/boardType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import BList from "./boardList";

const Board = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const successLogin = useSelector(
    (state: RootState) => state.user.successLogin
  );

  //검색어
  const [keyword, setKeyword] = useState("");

  // 글작성 페이지 이동
  const boardBtn = () => {
    if (successLogin.length > 0) {
      navigate("/regist");
    } else {
      alert("로그인하고 와라");
    }
  };
  useEffect(() => {
    dispatch(fetchGetBoard());
  }, []);

  // 게시판 검색 메서드
  const searchBtn = () => {
    dispatch(fetchGetSearch(keyword));

    console.log(keyword);
  };

  const findedBoard = useSelector(
    (state: RootState) => state.board.findedbaord
  );
  console.log(findedBoard);

  // board list 요청시 spinner
  const load = useSelector((state: RootState) => state.board.status);

  const keywordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <BoardTitleDiv>
        <img src="/img/boardimg.png" />
      </BoardTitleDiv>
      <BoardMainDiv>
        <div>
          <Button onClick={() => {}}>리뷰글보기</Button>
          <Button onClick={() => {}}>모집글보기</Button>
          <RightInput
            onChange={(e) => {
              keywordHandler(e);
            }}
          ></RightInput>

          <Button onClick={() => boardBtn()}>글쓰러</Button>
          <Button onClick={() => searchBtn()}>검색</Button>
        </div>
        {load === "loading" ? <Spinner></Spinner> : <BList />}
      </BoardMainDiv>
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

const RightInput = styled.input`
  border: none;
  text-align: left;
  height: 50px;
  width: 100%;
  outline: none;
  background: #fafafa;
  border-bottom: 1px solid #000000;
  :focus {
    border-bottom: 3px solid #7c74ab;
  }
`;
