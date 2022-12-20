import BList from "components/pagenation/boardList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Spinner } from "reactstrap";
import { fetchGetBoard, fetchGetSearch } from "store/board/boardReducer";
import { BoardList } from "store/board/boardType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
const Board = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const successLogin = useSelector(
    (state: RootState) => state.user.successLogin
  );
  //검색어
  const [firstKeyword, setFirstKeyword] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
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
  const boardList = useSelector((state: RootState) => state.board.board);
  const load = useSelector((state: RootState) => state.board.status);
  // 게시판 검색 메서드
  const searchBtn = () => {
    setKeyword(firstKeyword);
  };
  // 리뷰글, 모집글 구분
  const [select, setSelect] = useState("");
  const reviewBtn = () => {
    setSelect("리뷰");
  };
  const recruitBtn = () => {
    setSelect("모집");
  };
  const [searchKey, setSearchKey] = useState<string>("title");
  const searchKeyHandler = (e: any) => {
    setSearchKey(e.target.value);
  };
  return (
    <>
      <BoardTitleDiv>
        <img src="/img/boardimg.png" />
      </BoardTitleDiv>
      <BoardMainDiv>
        <div>
          <Button onClick={() => reviewBtn()}>리뷰글보기</Button>
          <Button onClick={() => recruitBtn()}>모집글보기</Button>
          <SearchDiv>
            <select onChange={(e) => searchKeyHandler(e)}>
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="writer">작성자</option>
            </select>
            <RightInput
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setFirstKeyword(e.target.value);
              }}
            ></RightInput>
            <Button style={{ width: "90px" }} onClick={() => searchBtn()}>
              검색
            </Button>
          </SearchDiv>
        </div>
        <Button
          style={{ width: "90px", marginLeft: "20px" }}
          onClick={() => boardBtn()}
        >
          글쓰러
        </Button>
        {load === "loading" ? (
          <Spinner></Spinner>
        ) : (
          <BList
            data={boardList}
            keyword={keyword}
            searchKey={searchKey}
            select={select}
          />
        )}
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
  flex-direction: column;
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
const SearchDiv = styled.div`
  display: flex;
`;
