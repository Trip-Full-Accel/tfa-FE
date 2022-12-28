import axios from "axios";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
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
  const IMG_PRE =
    "https://firebasestorage.googleapis.com/v0/b/tripfullaccel.appspot.com/o/";
  const IMG_END = "?alt=media&";
  const quillRef = useRef<any>();
  const imageHandler = () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files ? input.files[0] : null;
      const formData = new FormData();

      if (file) {
        formData.append("file", file); // formData는 키-밸류 구조
      } else {
        return;
      }
      try {
        const result = await axios.post(
          "http://192.168.0.76:8081/user/files",
          formData
        );
        console.log("성공 시, 백엔드가 보내주는 데이터", result.data);
        const IMG_URL = result.data;
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        const range = editor.getSelection();
        setImg(IMG_PRE + IMG_URL + IMG_END);
        editor.insertEmbed(range.index, "image", IMG_PRE + IMG_URL + IMG_END);
      } catch (error) {
        console.log("실패했어요ㅠ");
      }
    });
  };
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [
          ["image"],
          [{ header: [1, 2, 3, false] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);
  // 위에서 설정한 모듈들 foramts을 설정한다
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "image",
  ];
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
  const [img, setImg] = useState<string>("");
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
    // await dispatch(
    //   fetchPutBoard({
    //     userId: Number(boardId),
    //     title: title,
    //     writer: userId,
    //     content: content,
    //     img,
    //   })
    // );

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
                  <Writerdiv>작성자 : {el.nickname}</Writerdiv>
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
                  <ReactQuill
                    style={{
                      height: "400px",
                      width: "60%",
                      backgroundColor: "white",
                      borderRadius: "0.375rem",
                      border: "1px solid #ced4da",
                    }}
                    // theme="snow"
                    // modules={modules}
                    // formats={formats}
                    // value={}
                    onChange={(content, delta, source, editor: any) =>
                      contentHandler(editor.getContents())
                    }
                    ref={quillRef}
                    theme="snow"
                    placeholder="플레이스 홀더"
                    // value={value}
                    // onChange={contentHandler}
                    modules={modules}
                    formats={formats}
                  />
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
