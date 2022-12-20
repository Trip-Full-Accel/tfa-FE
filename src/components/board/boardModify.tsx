import { useCallback, useEffect, useRef, useState } from "react";
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

const BoardModify = () => {
  // useLocation Test 기존에 pathName말고도 state에 값 담을수 있음
  // console.log(props);
  // const title = useLocation();
  // console.log(title);
  const textRef = useRef<any>();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const { boardId } = useParams();
  console.log(boardId);
  const boardList = useSelector((state: RootState) => state.board.board);
  console.log(boardList);
  const dispatch = useDispatch<AppDispatch>();
  const [boardModify, setBoardModify] = useState<BoardList[]>([]);
  useEffect(() => {
    const returnValue = boardList.filter(
      (el: any) => el.id === Number(boardId)
    );
    console.log(returnValue);
    setBoardModify(returnValue);
  }, [boardList]);

  const navigate = useNavigate();
  const updateHandler = async () => {
    await dispatch(
      fetchPutBoard({
        id: Number(boardId),
        title: title,
        writer: userId,
        content: content,
      })
    );

    // 리턴응답에따라서 다른 alert 처리필요
    alert("수정되었습니다.");

    navigate("/board");
  };
  const titleHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const userId = useSelector((state: RootState) => state.user.successLogin);

  return (
    <>
      <div style={{}}>
        <div>
          {boardModify.map((el) => {
            return (
              <Detaildiv>
                <div style={{ display: "flex" }}>
                  <Writerdiv>작성자 : {el.writer}</Writerdiv>
                  <Hitsdiv>조회수 : {el.hits}</Hitsdiv>
                  <Likediv>좋아요 </Likediv>
                </div>
                <Titlediv>
                  <InputTitle
                    onChange={(e) => {
                      titleHandler(e);
                    }}
                  >
                    {el.title}
                  </InputTitle>
                </Titlediv>

                <Contentdiv>
                  <Contentarea
                    ref={textRef}
                    placeholder="글내용입력"
                    onInput={handleResizeHeight}
                    onChange={(e) => {
                      contentHandler(e);
                    }}
                  >
                    {el.content}
                  </Contentarea>
                </Contentdiv>

                <Btndiv>
                  <Button onClick={() => updateHandler()}>수정하기</Button>
                </Btndiv>
              </Detaildiv>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default BoardModify;

const Detaildiv = styled.div``;
const Writerdiv = styled.div``;
const Selecteddiv = styled.div``;
const Hitsdiv = styled.div``;
const Likediv = styled.div``;
const Titlediv = styled.div``;
const Contentdiv = styled.div``;

const Btndiv = styled.div``;

const InputTitle = styled.textarea`
  width: 55%;
  height: 50px;
  display: inline-block;
  border-radius: 0.375rem;
  resize: none;
  border: 1px solid #ced4da;
  &:focus::placeholder {
    color: transparent;
  }
  text-align: left;
  padding-left: 20px;

  /* padding: 20px 24px; */
  text-align: left;
  overflow: visible;
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
