import BList from "components/pagenation/boardList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { Button, Spinner } from "reactstrap";
import { fetchGetBoard } from "store/board/boardReducer";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import "../../static/all.css";
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
    navigate("/regist");
    // if (successLogin.length > 0) {
    //   navigate("/regist");
    // } else {
    //   alert("로그인하고 와라");
    // }
  };
  const boardList = useSelector((state: RootState) => state.board.board);
  useEffect(() => {
    dispatch(fetchGetBoard());
  }, [navigate]);
  console.log("리덕스에서 가져온 보드리스트", boardList);

  // const load = useSelector((state: RootState) => state.board.status);

  const registStatus = useSelector((state: RootState) => state.board.regist);
  useEffect(() => {
    if (registStatus === "succeeded") {
      dispatch(fetchGetBoard());
    }
  }, [registStatus]);
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

  const boardLoad = useSelector((state: RootState) => state.board.loadData);
  return (
    <>
      <Snowfall color="white" snowflakeCount={200} />
      <BoardTitleDiv>
        <img style={{ width: "80%" }} src="/img/boardimg.png" />
      </BoardTitleDiv>
      <BoardMainDiv>
        <div
          style={{
            width: "100%",
            display: "flex",
            paddingTop: "3rem",
            margin: 0,
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "200px",
              display: "flex",
              justifyContent: "space-between",
              margin: 0,
            }}
          >
            <TabBtn onClick={() => reviewBtn()}>리 뷰</TabBtn>
            <TabBtn onClick={() => recruitBtn()}>모 집</TabBtn>
          </div>
          <SearchDiv>
            <select
              style={{ borderRadius: "5px", width: "80px" }}
              onChange={(e) => searchKeyHandler(e)}
            >
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
              검 색
            </Button>
          </SearchDiv>
          <Button style={{ width: "90px" }} onClick={() => boardBtn()}>
            글쓰기
          </Button>
        </div>
        <hr />

        {/* {boardLoad === "loading" ? (
          <Spinner></Spinner>
        ) : ( */}
        <BList
          data={boardList}
          keyword={keyword}
          searchKey={searchKey}
          select={select}
        />
        {/* )} */}
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
  padding: 10px;
  height: 3rem;
  width: 24rem;
  outline: none;
  background: #fafafa;
  border-bottom: 1px solid #000000;
  :focus {
    border-bottom: 3px solid #7c74ab;
  }
`;

const SearchDiv = styled.div`
  justify-content: center;
  border-radius: 5px;
  display: flex;
  margin: 0;
`;

const TabBtn = styled.button`
  width: 6rem;
  background-color: #7c74ab;
  color: white;
  border-radius: 5px;
  border: none;
  margin: 0;
  font-size: 1.2rem;
`;
