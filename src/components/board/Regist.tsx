import { useCallback, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import {
  fetchDeleteBoard,
  fetchPostBoard,
  fetchPutBoard,
} from "store/board/boardReducer";
import { reduxTest } from "store/reduxTest/reduxTestReducer";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import { CustomAxios } from "../../http/customAxios";

const Regist = () => {
  ///////// test //////////
  const [goRedux, setGoRedux] = useState<any>([]);
  const [testData, setTestData] = useState<any>("");

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
    navigate("/board");
    dispatch(
      fetchPostBoard({ title, selected, content, id: 0, writer: userId })
    );
  };

  const deleteHandler = async () => {
    dispatch(fetchDeleteBoard(4));
  };
  const updateHandler = async () => {
    dispatch(
      fetchPutBoard({
        title,
        selected,
        content,
        id: 3,
        writer: "user_id",
      })
    );

    //엑시오스로 put 보낼때
    // await CustomAxios("/post/update/4", "PUT", {
    //   title: title,
    //   content: content,
    //   id: 4,
    //   createdDate: "asdf",
    //   deleteYn: "n",
    //   hits: 1,
    //   modifiedDate: "asdfdddddd",
    //   writer: "123",
    // });
    navigate("/board");
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
    setSelected(e.target.value);
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
        {/* TEST 버튼들 추후 삭제 예정 */}

        <div>리덕스 테스트</div>
        <input onChange={(e: any) => setTestData(e.target.value)}></input>
        <Btndiv>
          <Button onClick={onc}>스테이트 저장</Button>
        </Btndiv>
        <Btndiv>
          <Button onClick={onc2}>리덕스 저장</Button>
        </Btndiv>
      </RegistFirstdiv>

      <h2>스테이트값 {goRedux.map((el: any) => el)}</h2>
      <h2>리덕스값 {redux.map((el: any) => el)}</h2>
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
