import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import Snowfall from "react-snowfall";
import { Button } from "reactstrap";
import {
  fetchDeleteBoard,
  fetchGetDetail,
  fetchPutBoard,
} from "store/board/boardReducer";
import { BoardList } from "store/board/boardType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import { walkUpBindingElementsAndPatterns } from "typescript";

const BoardDetail = () => {
  // useLocation Test 기존에 pathName말고도 state에 값 담을수 있음
  // console.log(props);
  // const title = useLocation();
  // console.log(title);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selected, setSelected] = useState<string>();
  const [like, setLike] = useState(false);

  const likeBtn = () => {
    if (like === false) {
      setLike(true);
    } else {
      setLike(false);
    }
  };

  const { boardId } = useParams();
  useEffect(() => {
    dispatch(fetchGetDetail(String(boardId)));
  }, []);
  // setBoardDetail();
  console.log(boardId);
  // const [boardIdData, setBoardIdData] = useState<any>("");
  const boardDetailReturn = useSelector(
    (state: RootState) => state.board.detailBoard
  );
  console.log("밑에 div에서 뿌려줄 값", boardDetailReturn);

  const dispatch = useDispatch<AppDispatch>();
  const [boardDetail, setBoardDetail] = useState<any>();
  // setBoardIdData(boardId);

  const userLoginId = localStorage.getItem("userId");

  const deleteHandler = async () => {
    await dispatch(fetchDeleteBoard(Number(boardId)));

    //리턴에따라 다른 alert필요
    alert("삭제되었습니다.");
    navigate("/board");
  };
  const navigate = useNavigate();
  const updateHandler = (el: BoardList) => {
    console.log(boardId);
    navigate(`/boardModify/${el.id}`, {
      state: el,
    });
  };

  const userId = useSelector((state: RootState) => state.user.successLogin);
  console.log("유저아이디", userId);
  const local = localStorage.getItem("userId");
  console.log("loc", local);

  const linkTo = (path: string) => {
    navigate(path, {
      state: {
        id: boardId,
      },
    });
  };

  // console.log("wirter", boardDetailReturn[0].writer);
  // console.log("wirter", boardDetailReturn[0].writer);
  return (
    <>
      <Snowfall color="white" snowflakeCount={200} />
      {boardDetailReturn.map((detail, i) =>
        userId == detail.writer && userLoginId !== null ? (
          <BoardDiv key={i}>
            <Detaildiv>
              <Titlediv>
                {detail.title}
                <SelectDiv>{detail.selected}</SelectDiv>
              </Titlediv>
              <BottomDiv>
                <div style={{ margin: "0" }}>
                  <Writerdiv>{detail.writer}</Writerdiv>
                  <DateDiv>작성일</DateDiv>
                </div>
                <Hitsdiv>조회수 : {detail.hits}</Hitsdiv>
              </BottomDiv>
              <Contentdiv>
                <pre
                  dangerouslySetInnerHTML={{
                    __html: detail.content,
                  }}
                ></pre>
              </Contentdiv>
              <BtnDiv>
                <div style={{ margin: "0" }}>
                  <Button onClick={() => deleteHandler()}>삭 제</Button>&nbsp;
                  <Button onClick={() => updateHandler(detail)}>수 정</Button>
                </div>

                {like === false ? (
                  <LikeBtn onClick={likeBtn}>
                    좋아요 &nbsp;
                    <i className="xi-heart-o" />0
                  </LikeBtn>
                ) : (
                  <div>
                    <LikeBtn onClick={likeBtn}>
                      좋아요 &nbsp;
                      <i className="xi-heart " />1
                    </LikeBtn>
                  </div>
                )}
                <Button
                  onClick={() => {
                    linkTo("/board");
                  }}
                >
                  목 록
                </Button>
              </BtnDiv>
            </Detaildiv>
          </BoardDiv>
        ) : (
          <BoardDiv key={detail.title}>
            <Detaildiv>
              <Titlediv>
                {detail.title}
                <SelectDiv>{detail.selected}</SelectDiv>
              </Titlediv>

              <BottomDiv>
                <div style={{ margin: "0" }}>
                  <Writerdiv>{detail.writer}</Writerdiv>
                  <DateDiv>작성일</DateDiv>
                </div>
                <Hitsdiv>조회수 : {detail.hits}</Hitsdiv>
              </BottomDiv>
              <Contentdiv>
                <pre
                  dangerouslySetInnerHTML={{
                    __html: detail.content,
                  }}
                ></pre>
              </Contentdiv>

              <div style={{ display: "flex" }}>
                <LikeDiv>
                  {like === false ? (
                    <LikeBtn onClick={likeBtn}>
                      좋아요 &nbsp;
                      <i className="xi-heart-o" />0
                    </LikeBtn>
                  ) : (
                    <div>
                      <LikeBtn onClick={likeBtn}>
                        좋아요 &nbsp;
                        <i className="xi-heart " />1
                      </LikeBtn>
                    </div>
                  )}
                </LikeDiv>
                <div
                  style={{
                    margin: "0",
                    padding: "0 2rem 1rem 0",
                    display: "flex",
                    justifyContent: "end",
                  }}
                >
                  <Button
                    onClick={() => {
                      linkTo("/board");
                    }}
                  >
                    목 록
                  </Button>
                </div>
              </div>
            </Detaildiv>
          </BoardDiv>
        )
      )}
    </>
  );
};

export default BoardDetail;
const BoardDiv = styled.div`
  border: 1px solid #ccc;
  width: 800px;
  min-height: 600px;
  border-radius: 5px;
  margin-bottom: 2rem;
`;
const Detaildiv = styled.div``;
const Titlediv = styled.div`
  display: flex;
  text-align: start;
  font-size: 20px;
  font-weight: bold;
  padding: 1rem 0 1rem 3rem;
  /* border-bottom: 1px solid #ccc; */
`;
const SelectDiv = styled.div`
  margin-left: 10px;
  font-size: 1rem;
  font-weight: 500;
  align-self: end;
`;
const Writerdiv = styled.div`
  padding: 0.5rem 0 0.5rem 3rem;
`;
const DateDiv = styled.div`
  padding: 0 0 0.5rem 3rem;
`;
const Hitsdiv = styled.div`
  margin: 0;
  padding: 2.5rem 3rem 0 0;
`;
const Likediv = styled.div``;
const Contentdiv = styled.div`
  min-height: 30rem;
`;

const BtnDiv = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: start;
  padding: 0 2rem 1rem 2rem;
`;

const BottomDiv = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
`;

const LikeBtn = styled.button`
  color: white;
  border: none;
  background-color: #7c74ab;
  border-radius: 10px;
  width: 70px;
  height: 40px;
`;

const LikeDiv = styled.div`
  align-self: center;
  padding-bottom: 1rem;
`;
