import { Input, Button } from "reactstrap";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCallback, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchPost } from "store/postMappingTest/postMappingTestReducer";
import axios from "axios";
import { CustomAxios } from "../../http/customAxios";

const Regist = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [select, setSelect] = useState<string>("리뷰");

  const navigate = useNavigate();
  const dispatch = useDispatch<any>();

  const registHandler = async () => {
    navigate("/board");
    console.log(title);
    console.log(content);
    console.log(select);

    await CustomAxios("/", "POST", {
      title: title,
      content: content,
      select: select,
    });
  };

  const textRef = useRef<any>();
  const handleResizeHeight = useCallback(() => {
    textRef.current.style.height = textRef.current.scrollHeight + "px";
  }, []);

  const titleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const contentHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelect(e.target.value);
  };

  return (
    <RegistMainDiv>
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
          <Contentarea
            ref={textRef}
            placeholder="글내용입력"
            onInput={handleResizeHeight}
            onChange={(e) => {
              contentHandler(e);
            }}
          ></Contentarea>
        </Contentdiv>
        <Btndiv>
          <Button onClick={() => registHandler()}>등록</Button>
        </Btndiv>
      </RegistFirstdiv>
    </RegistMainDiv>
  );
};

export default Regist;

const RegistMainDiv = styled.div``;
const RegistFirstdiv = styled.div``;
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
