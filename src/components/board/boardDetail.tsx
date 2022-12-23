import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useRoutes,
} from "react-router-dom";
import { Button } from "reactstrap";
import {
  fetchDeleteBoard,
  fetchGetDetail,
  fetchPutBoard,
} from "store/board/boardReducer";
import { BoardList } from "store/board/boardType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";

const BoardDetail = () => {
  // useLocation Test 기존에 pathName말고도 state에 값 담을수 있음
  // console.log(props);
  // const title = useLocation();
  // console.log(title);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selected, setSelected] = useState<string>();

  const { boardId } = useParams();
  useEffect(() => {
    console.log("tlfgod");
    dispatch(fetchGetDetail(String(boardId)));
    // console.log("디테일 페이지 리절트", result);
    // const realData = result.unwrap().then((res) => res.payload);
    // console.log("디테일 리얼데이터", realData);
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
  console.log(userId);
  const local = localStorage.getItem("userId");
  console.log("loc", local);
  // console.log("wirter", boardDetailReturn[0].writer);
  return (
    <>
      {boardDetailReturn.map((detail) =>
        Number(userId) === detail.id ? (
          <div
            key={detail.title}
            style={{
              border: "1px solid grey",
              width: "1000px",
              height: "600px",
              borderRadius: "5px",
            }}
          >
            <div>
              <Detaildiv>
                <Titlediv>제목 : {detail.title}</Titlediv>
                <div
                  style={{ display: "flex", borderBottom: "1px solid black" }}
                >
                  <Writerdiv>작성자 : {detail.writer}</Writerdiv>
                  <div>글 카테고리 : {detail.selected}</div>
                  <Hitsdiv>조회수 : {detail.hits}</Hitsdiv>
                </div>
                <Contentdiv>
                  <pre
                    dangerouslySetInnerHTML={{
                      __html: detail.content,
                    }}
                  ></pre>
                </Contentdiv>
                <Btndiv>
                  <Button onClick={() => deleteHandler()}>삭제테스트</Button>
                </Btndiv>
                <Btndiv>
                  <Button onClick={() => updateHandler(detail)}>
                    수정테스트
                  </Button>
                </Btndiv>
              </Detaildiv>
            </div>
          </div>
        ) : (
          <div
            key={detail.title}
            style={{
              border: "1px solid grey",
              width: "1000px",
              height: "600px",
              borderRadius: "5px",
            }}
          >
            <div>
              <Detaildiv>
                <Titlediv>제목 : {detail.title}</Titlediv>
                <div
                  style={{ display: "flex", borderBottom: "1px solid black" }}
                >
                  <Writerdiv>작성자 : {detail.writer}</Writerdiv>
                  <div>글 카테고리 : {detail.selected}</div>
                  <Hitsdiv>조회수 : {detail.hits}</Hitsdiv>
                </div>
                <Contentdiv>
                  <pre
                    dangerouslySetInnerHTML={{
                      __html: detail.content,
                    }}
                  ></pre>
                </Contentdiv>
              </Detaildiv>
            </div>
          </div>
        )
      )}
    </>
  );
};

export default BoardDetail;
const Detaildiv = styled.div``;
const Writerdiv = styled.div``;
const Selecteddiv = styled.div``;
const Hitsdiv = styled.div``;
const Titlediv = styled.div`
  text-align: start;
  font-size: 20px;
  font-weight: bold;
  padding: 1rem;
  border-bottom: 1px solid grey;
`;
const Likediv = styled.div``;
const Contentdiv = styled.div`
  min-height: 30rem;
`;

const Btndiv = styled.div``;

const InputTitle = styled.input`
  width: 55%;
  height: 50px;
  display: inline-block;
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
  &:focus::placeholder {
    color: transparent;
  }
  text-align: left;
  padding-left: 20px;
`;

const Contentarea = styled.textarea`
  width: 60%;
  min-height: 350px;
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
  resize: none;
  &:focus::placeholder {
    color: transparent;
  }
  padding: 20px 24px;
  text-align: left;
  overflow: visible;
  /* &::-webkit-scrollbar {
    display: flex !important;
  } */
`;
const SelectBox = styled.select`
  width: 5%;
  height: 50px;
  display: inline-block;
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
`;

const OptionBox = styled.option`
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
`;
