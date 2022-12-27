import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import React, { Component } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  fetchDeleteBoard,
  fetchPostBoard,
  fetchPutBoard,
} from "store/board/boardReducer";
import { reduxTest } from "store/reduxTest/reduxTestReducer";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import { CustomAxios } from "../../http/customAxios";
import "./board.css";
import axios from "axios";
import { json } from "stream/consumers";
import Snowfall from "react-snowfall";

const Regist = () => {
  const loc = useLocation();
  console.log(loc.state);
  useEffect(() => {
    if (loc.state) {
      setImg(loc.state.img);
      // setValue(loc.state.img)
      setTitle(loc.state.title);

      // (loc.state.title)
      setValue(loc.state.content);
    }
  }, [loc]);

  const [img, setImg] = useState<string>("");
  const IMG_PRE =
    "https://firebasestorage.googleapis.com/v0/b/tripfullaccel.appspot.com/o/";
  const IMG_END = "?alt=media&";
  const [value, setValue] = useState<any>("");
  const quillRef = useRef<any>();
  const imageHandler = () => {
    console.log("에디터에서 이미지 버튼을 클릭하면 이 핸들러가 시작됩니다!");
    // 1. 이미지를 저장할 input type=file DOM을 만든다.
    const input = document.createElement("input");
    // 속성 써주기
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click(); // 에디터 이미지버튼을 클릭하면 이 input이 클릭된다.
    // input이 클릭되면 파일 선택창이 나타난다.
    // input에 변화가 생긴다면 = 이미지를 선택
    input.addEventListener("change", async () => {
      console.log("온체인지");
      const file = input.files ? input.files[0] : null;
      // multer에 맞는 형식으로 데이터 만들어준다.
      const formData = new FormData();

      if (file) {
        formData.append("file", file); // formData는 키-밸류 구조
      } else {
        return;
      }
      // 백엔드 multer라우터에 이미지를 보낸다.
      try {
        const result = await axios.post(
          "http://192.168.0.76:8081/user/files",
          formData
        );
        console.log("성공 시, 백엔드가 보내주는 데이터", result.data);
        const IMG_URL = result.data;
        // 이 URL을 img 태그의 src에 넣은 요소를 현재 에디터의 커서에 넣어주면 에디터 내에서 이미지가 나타난다
        // src가 base64가 아닌 짧은 URL이기 때문에 데이터베이스에 에디터의 전체 글 내용을 저장할 수있게된다
        // 이미지는 꼭 로컬 백엔드 uploads 폴더가 아닌 다른 곳에 저장해 URL로 사용하면된다.
        // 이미지 태그를 에디터에 써주기 - 여러 방법이 있다.
        const editor = quillRef.current.getEditor(); // 에디터 객체 가져오기
        // 1. 에디터 root의 innerHTML을 수정해주기
        // editor의 root는 에디터 컨텐츠들이 담겨있다. 거기에 img태그를 추가해준다.
        // 이미지를 업로드하면 -> 멀터에서 이미지 경로 URL을 받아와 -> 이미지 요소로 만들어 에디터 안에 넣어준다.
        // editor.root.innerHTML =
        //   editor.root.innerHTML + `<img src=${IMG_URL} /><br/>`; // 현재 있는 내용들 뒤에 써줘야한다.
        // 2. 현재 에디터 커서 위치값을 가져온다
        const range = editor.getSelection();
        // 가져온 위치에 이미지를 삽입한다
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
          // 이미지 처리는 우리가 직접 imageHandler라는 함수로 처리할 것이다.
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
  ///////// test //////////
  const [testData, setTestData] = useState<any>("");
  const [goRedux, setGoRedux] = useState<any>([]);

  const onc = () => {
    setGoRedux([...goRedux, testData]);
    setTestData("");
  };

  const redux = useSelector((state: any) => state.test.test);
  const onc2 = () => {
    dispatch(reduxTest(goRedux));
    setGoRedux([]);
  };
  ////////////////////////

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [selected, setSelected] = useState<string>("리뷰");

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const userId = useSelector((state: RootState) => state.user.successLogin);
  console.log(userId);
  const registHandler = async () => {
    await dispatch(
      fetchPostBoard({
        title,
        selected,
        content: value,
        id: 0,
        writer: userId,
        img,
      })
    );
    console.log(img);
    navigate("/board");
  };

  const textRef = useRef<any>();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: any) => {
    setValue(e);
    // setContent(e.ops[0].insert);
    console.log(e);
  };
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <RegistMainDiv>
      <Snowfall color="white" snowflakeCount={200} />
      <RegistFirstdiv>
        <Titlediv>
          <InputTitle
            placeholder="
          제목을 입력해주세요"
            onChange={(e) => {
              titleHandler(e);
            }}
          ></InputTitle>
          <SelectBox name="select" onChange={(e) => selectHandler(e)}>
            <OptionBox value="리뷰">리뷰</OptionBox>
            <OptionBox value="모집">모집</OptionBox>
          </SelectBox>
        </Titlediv>
        <Contentdiv>
          {/* <Contentarea
            ref={textRef}
            placeholder="글내용입력"
            onInput={handleResizeHeight}
            onChange={(e) => {
              contentHandler(e);
            }}
          ></Contentarea> */}
          <ReactQuill
            style={{
              minHeight: "400px",
              height: "100%",
              width: "60%",
              backgroundColor: "white",
              borderRadius: "0 0 0.375rem 0.375rem",
              border: "1px solid #ced4da",
              textAlign: "start",
            }}
            // theme="snow"
            // modules={modules}
            // formats={formats}
            // // value={}
            onChange={(content, delta, source, editor: any) => {
              contentHandler(content);
            }}
            ref={quillRef}
            theme="snow"
            placeholder="내용을 입력해주세요"
            value={value}
            // onChange={contentHandler}
            modules={modules}
            formats={formats}
          />
        </Contentdiv>
        <Btndiv style={{ margin: "2rem 0 2rem 0" }}>
          <Button onClick={() => registHandler()}>등록</Button>
        </Btndiv>
        {/* TEST 버튼들 추후 삭제 예정 */}

        {/* <div>리덕스 테스트</div>
        <input onChange={(e: any) => setTestData(e.target.value)}></input>
        <Btndiv>
          <Button onClick={onc}>스테이트 저장</Button>
        </Btndiv>
        <Btndiv>
          <Button onClick={onc2}>리덕스 저장</Button>
        </Btndiv> */}
      </RegistFirstdiv>

      {/* <h2>스테이트값 {goRedux.map((el: any) => el)}</h2>
      <h2>리덕스값 {redux.map((el: any) => el)}</h2> */}
    </RegistMainDiv>
  );
};

export default Regist;

const RegistMainDiv = styled.div`
  border: none !important;
`;
const RegistFirstdiv = styled.div`
  border: none !important;
`;
const Titlediv = styled.div``;
const Contentdiv = styled.div`
  border: none !important;
`;
const Btndiv = styled.div``;

const InputTitle = styled.input`
  width: 55%;
  height: 50px;
  display: inline-block;
  border-radius: 0.375rem 0 0 0;
  border: 1px solid #ced4da;
  border-bottom: none;
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
  border-radius: 0 0.375rem 0 0;
  border: 1px solid #ced4da;
  border-left: none;
  border-bottom: none;
`;

const OptionBox = styled.option`
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
`;
