import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "store/store";
import { fetchPostUserJoin, fetchUserCheck } from "store/user/userReducer";
import styled from "styled-components";

const ForgotPw = () => {
  const [join, setJoin] = useState({
    id: "",
    nick: "",
    email: "",
  });

  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setJoin({ ...join, [name]: value });
  // };

  //오류메시지 상태저장
  const [errMessage, setErrMessage] = useState({
    id: "",
    nick: "",
    email: "",
  });

  // const errHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setErrMessage({ ...errMessage, [name]: value });
  // };

  // 유효성 검사

  const [valid, setValid] = useState({
    id: false,
    nick: false,
    email: false,
  });

  // const validHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setValid({ ...valid, [name]: value });
  // };

  // 아이디
  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setJoin({ ...join, [name]: value });
    if (value.length < 4 || value.length > 12) {
      setErrMessage({
        ...errMessage,
        [name]: "영문 또는 숫자 4~12자리로 입력해주세요.",
      });
      setValid({ ...valid, [name]: false });
    } else {
      setErrMessage({ ...errMessage, [name]: "" });
      setValid({ ...valid, [name]: true });
    }
  };

  const onChangeNick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setJoin({ ...join, [name]: value });
    if (value.length < 2 || value.length > 10) {
      setErrMessage({
        ...errMessage,
        [name]: "2글자 이상 10글자 미만으로 입력해주세요",
      });
      setValid({ ...valid, [name]: false });
    } else {
      setErrMessage({ ...errMessage, [name]: "" });
      setValid({ ...valid, [name]: true });
    }
  };
  // 이메일
  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const { value, name } = e.target;
    setJoin({ ...join, [name]: value });

    if (!emailRegex.test(value)) {
      setErrMessage({
        ...errMessage,
        [name]: "이메일 형식에 맞지 않습니다",
      });
      setValid({ ...valid, [name]: false });
    } else {
      setErrMessage({ ...errMessage, [name]: "" });
      setValid({ ...valid, [name]: true });
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const joinHandler = async () => {
    // await dispatch(
    //   fetchPostUserJoin({
    //     userId: join.id,
    //     pw: join.email,
    //     userCode: "나중에 카톡이나 네이버로 받아옴",
    //     nickName: join.nick,
    //   })
    // );
    navigate("/");
  };

  return (
    <GrandDiv>
      <h2 style={{ float: "left" }}>비밀번호 찾기</h2>
      <InputDiv>
        <div style={{ width: "70%", margin: 0 }}>
          <InDiv>
            <LeftDiv>아이디</LeftDiv>

            <RightInput
              type="text"
              placeholder="아이디를 입력하세요"
              name="id"
              required
              onChange={onChangeId}
            ></RightInput>
          </InDiv>
          <ValidDiv>
            {join.id.length > 0 && (
              <WarningSpan
                // style={{ display: "block" }}
                className={`message ${valid.id ? "success" : "error"}`}
              >
                {errMessage.id}
              </WarningSpan>
            )}
          </ValidDiv>
          <InDiv>
            <LeftDiv>이메일</LeftDiv>
            <RightInput
              type="text"
              name="email"
              placeholder="이메일을 입력하세요"
              required
              onChange={onChangeEmail}
            ></RightInput>
          </InDiv>
          <ValidDiv>
            {join.email.length > 0 && (
              <WarningSpan
                className={`message ${valid.email ? "success" : "error"}`}
              >
                {errMessage.email}
              </WarningSpan>
            )}
          </ValidDiv>
          <InDiv>
            <LeftDiv>닉네임</LeftDiv>
            <RightInput
              type="text"
              name="nick"
              placeholder="닉네임을 입력하세요"
              required
              onChange={onChangeNick}
            ></RightInput>
          </InDiv>
          <ValidDiv>
            {join.nick.length > 0 && (
              <WarningSpan
                className={`message ${valid.nick ? "success" : "error"}`}
              >
                {errMessage.nick}
              </WarningSpan>
            )}
          </ValidDiv>
        </div>
        <Button1
          disabled={!(valid.id && valid.nick && valid.email)}
          type="submit"
          onClick={joinHandler}
        >
          확인
        </Button1>
      </InputDiv>
    </GrandDiv>
  );
};
export default ForgotPw;
const GrandDiv = styled.div`
  width: 1000px;
  height: 400px;
  padding: 40px;
  border: 2px solid #eaccf8;
  margin: auto !important;
  border-radius: 20px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 45%;
  left: 50%;
`;
const InputDiv = styled.div`
  margin-top: "50px";
  display: flex;
  position: relative;
`;
const InDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  padding: 10px 0 10px 0;
  margin-top: 30px;
  position: relative;
`;
const LeftDiv = styled.div`
  width: 20%;
  text-align: left;
  font-weight: bold;
  letter-spacing: -1px;
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

const WarningSpan = styled.span`
  color: #dc143c;
  font-size: 14px;
`;

const ValidDiv = styled.div`
  margin-left: 90px;
  text-align: start;
  position: absolute;
`;

const Button1 = styled.button`
  :disabled {
    background-color: darkgrey;
  }
  margin-top: 40px;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  background-color: #7c74ab;
  float: right;
  bottom: 0;
  right: 0;
  position: absolute;
`;
