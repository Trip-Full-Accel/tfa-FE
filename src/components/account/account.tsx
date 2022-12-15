import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { AppDispatch } from "store/store";
import { fetchPostUserJoin, fetchUserCheck } from "store/user/userReducer";
import styled from "styled-components";
const Account = () => {
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [join, setJoin] = useState({
    id: "",
    nick: "",
    password: "",
    passwordConfirm: "",
  });

  // const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setJoin({ ...join, [name]: value });
  // };

  //오류메시지 상태저장
  const [errMessage, setErrMessage] = useState({
    id: "",
    nick: "",
    password: "",
    passwordConfirm: "",
  });

  // const errHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setErrMessage({ ...errMessage, [name]: value });
  // };

  // 유효성 검사

  const [valid, setValid] = useState({
    id: false,
    nick: false,
    password: false,
    passwordConfirm: false,
  });

  // const validHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value, name } = e.target;
  //   setValid({ ...valid, [name]: value });
  // };

  // 이름
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
  // 비밀번호
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*null)(?=.*[0-9]).{4,25}$/;
    const { value, name } = e.target;
    setJoin({ ...join, [name]: value });

    if (!passwordRegex.test(value)) {
      setErrMessage({
        ...errMessage,
        [name]: "숫자+영문자+특수문자 조합으로 10자리 이상 입력해주세요",
      });
      setValid({ ...valid, [name]: false });
    } else {
      setErrMessage({ ...errMessage, [name]: "" });
      setValid({ ...valid, [name]: true });
    }
  };

  // 비밀번호 확인
  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setJoin({ ...join, [name]: value });

    if (join.password === value) {
      setErrMessage({ ...errMessage, [name]: "" });
      setValid({ ...valid, [name]: true });
    } else {
      setErrMessage({
        ...errMessage,
        [name]: "비밀번호가 일치하지 않습니다.",
      });
      setValid({ ...valid, [name]: false });
    }
  };

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  // user 회원가입 절차
  const joinHandler = async () => {
    await dispatch(
      fetchPostUserJoin({
        userId: join.id,
        pw: join.password,
        userCode: "나중에 카톡이나 네이버로 받아옴",
        nickName: join.nick,
      })
    );
    navigate("/");
  };

  const checkId = () => {
    dispatch(fetchUserCheck(join.id))
      .unwrap()
      .then((res) => {
        if (res === true) {
          alert("이미 존재하는 회원입니다.");
        } else {
          alert("가입가능한 아이디 입니다.");
        }
      });
  };

  const ㅇㅇ = () => {
    console.log(valid.id);
    console.log(valid.password);
    console.log(valid.passwordConfirm);
    console.log(valid.nick);
  };
  return (
    <GrandDiv>
      <h2>회원가입</h2>
      <InputDiv>
        <InDiv>
          <LeftDiv>아이디</LeftDiv>

          <RightInput
            type="text"
            placeholder="사용할 아이디를 입력하세요"
            name="id"
            required
            onChange={onChangeId}
          ></RightInput>
          <Button2 onClick={checkId}>중복</Button2>
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
          <LeftDiv>비밀번호</LeftDiv>
          <RightInput
            type="password"
            name="password"
            placeholder="비밀번호를 입력하세요"
            required
            onChange={onChangePassword}
          ></RightInput>
        </InDiv>
        <ValidDiv>
          {join.password.length > 0 && (
            <WarningSpan
              className={`message ${valid.password ? "success" : "error"}`}
            >
              {errMessage.password}
            </WarningSpan>
          )}
        </ValidDiv>
        <InDiv>
          <LeftDiv>비밀번호 확인</LeftDiv>
          <RightInput
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호를 한번 더 입력하세요"
            required
            onChange={onChangePasswordConfirm}
          ></RightInput>
        </InDiv>
        <ValidDiv>
          {join.passwordConfirm.length > 0 && (
            <WarningSpan
              className={`message ${
                valid.passwordConfirm ? "success" : "error"
              }`}
            >
              {errMessage.passwordConfirm}
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
        <Button1
          disabled={
            !(valid.id && valid.nick && valid.password && valid.passwordConfirm)
          }
          type="submit"
          onClick={joinHandler}
        >
          가입하기
        </Button1>
        <Button1 onClick={ㅇㅇ}>궁금</Button1>
      </InputDiv>
    </GrandDiv>
  );
};
export default Account;
const GrandDiv = styled.div`
  width: 500px;
  height: 600px;
  padding: 40px;
  border: 2px solid #eaccf8;
  margin: auto !important;
  border-radius: 20px;
`;
const InputDiv = styled.div`
  margin-top: "50px";
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
  width: 35%;
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
  margin-left: 110px;
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
`;

const Button2 = styled.button`
  position: absolute;
  right: 0;
  border-radius: 8px;
  border: none;
  background-color: darkgray;
  color: white;
  width: 50px;
  height: 40px;
`;
