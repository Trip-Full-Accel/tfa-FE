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
import { fetchDeleteBoard, fetchPutBoard } from "store/board/boardReducer";
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
  console.log(boardId);
  // const [boardIdData, setBoardIdData] = useState<any>("");
  const boardList = useSelector((state: RootState) => state.board.board);
  console.log(boardList);
  const dispatch = useDispatch<AppDispatch>();
  const [boardDetail, setBoardDetail] = useState<BoardList[]>([]);
  // setBoardIdData(boardId);
  useEffect(() => {
    const returnValue = boardList.filter(
      (el: any) => el.id === Number(boardId)
    );
    console.log(returnValue);
    setBoardDetail(returnValue);
  }, [boardList]);

  const deleteHandler = async () => {
    await dispatch(fetchDeleteBoard(Number(boardId)));

    //리턴에따라 다른 alert필요
    alert("삭제되었습니다.");
    navigate("/board");
  };
  const navigate = useNavigate();
  const updateHandler = (el: BoardList) => {
    console.log(boardId);
    navigate(`/boardModify/${boardId}`, {
      state: el,
    });
  };
  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  const userId = useSelector((state: RootState) => state.user.successLogin);

  return (
    <>
      <div style={{}}>
        <div>
          {boardDetail.map((el) => {
            if (userId == el.writer) {
              return (
                <Detaildiv key={el.id}>
                  <div style={{ display: "flex" }}>
                    <Writerdiv>작성자 : {el.writer}</Writerdiv>
                    <div>글 카테고리 : {el.selected}</div>
                    <Hitsdiv>조회수 : {el.hits}</Hitsdiv>
                  </div>
                  <Titlediv>제목 : {el.title}</Titlediv>
                  <Contentdiv>
                    <pre dangerouslySetInnerHTML={{ __html: el.content }}></pre>
                    {/* <img src=`{{el.img}}` /> */}
                    {/* {el.img} */}

                    {/* <img src={`${el.img}`}></img> */}
                  </Contentdiv>
                  <Btndiv>
                    <Button onClick={() => deleteHandler()}>삭제테스트</Button>
                  </Btndiv>
                  <Btndiv>
                    <Button onClick={() => updateHandler(el)}>
                      수정테스트
                    </Button>
                  </Btndiv>
                </Detaildiv>
              );
            } else {
              return (
                <Detaildiv key={el.id}>
                  <div style={{ display: "flex" }}>
                    <Writerdiv>작성자 : {el.writer}</Writerdiv>
                    <div>글 카테고리 : {el.selected}</div>
                    <Hitsdiv>조회수 : {el.hits}</Hitsdiv>
                  </div>
                  <Titlediv>제목 : {el.title}</Titlediv>
                  <Contentdiv>
                    {el.content}
                    {/* <img src=`{{el.img}}` /> */}
                    {/* {el.img} */}

                    {/* <img src={`${el.img}`}></img> */}
                  </Contentdiv>
                </Detaildiv>
              );
            }
          })}
        </div>
        <Likediv>좋아요 </Likediv>
      </div>
    </>
  );
};

export default BoardDetail;
const Detaildiv = styled.div``;
const Writerdiv = styled.div``;
const Selecteddiv = styled.div``;
const Hitsdiv = styled.div``;
const Likediv = styled.div``;
const Titlediv = styled.div``;
const Contentdiv = styled.div``;

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
