import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "reactstrap";
import { AppDispatch, RootState } from "store/store";
import { fetchPostUserJoin, fetchUserCheck } from "store/user/userReducer";
import styled from "styled-components";

const Account = () => {
  const [join, setJoin] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    nickName: "",
  });
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setJoin({ ...join, [name]: value });
  };
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const data = useSelector((state: RootState) => state.user.userId);
  // console.log(data);
  const joinHandler = () => {
    if (
      join.id.length > 4 &&
      join.pw === join.pwCheck &&
      join.nickName.length > 3
    ) {
      alert("가입을 환영합니다");
      // dispatch 사용
      dispatch(
        fetchPostUserJoin({
          userId: join.id,
          pw: join.pw,
          userCode: "나중에 받아올거",
          nickName: join.nickName,
        })
      );
      navigate("/");
    }
  };
  const checkId = () => {
    dispatch(fetchUserCheck(join.id))
      .unwrap()
      .then((res) => {
        if (res === true) {
          console.log("이미 존재하는 회원");
        } else {
          console.log("가입가능한 아이디이빈다.");
        }
      });
  };

  // const idHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setId(e.target.value);
  // };
  // const pwHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPw(e.target.value);
  // };
  // const pwCheckHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPwCheck(e.target.value);
  // };

  // const nickNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setNickName(e.target.value);
  // };

  return (
    <GrandDiv>
      <h2>회원가입</h2>
      <InputDiv>
        <InDiv>
          <LeftDiv>아이디</LeftDiv>
          <RightInput
            type="text"
            placeholder="id를 입력하세요"
            onChange={(e) => onChangeHandler(e)}
            name="id"
            required
          ></RightInput>
        </InDiv>
        <InDiv>
          <LeftDiv>비밀번호</LeftDiv>
          <RightInput
            type="password"
            name="pw"
            placeholder="password 를 입력하세요"
            onChange={(e) => onChangeHandler(e)}
            required
          ></RightInput>
        </InDiv>
        <InDiv>
          <LeftDiv>비밀번호 확인</LeftDiv>
          <RightInput
            type="password"
            name="pwCheck"
            placeholder="password를 한번 더 입력하세요"
            onChange={(e) => onChangeHandler(e)}
            required
            // onInvalid={}
          ></RightInput>
          {join.pw !== join.pwCheck && <span>비번이 다릅니다</span>}
        </InDiv>
        <InDiv>
          <LeftDiv>닉네임</LeftDiv>
          <RightInput
            name="nickName"
            type="text"
            placeholder="닉네임을 입력하세요"
            onChange={(e) => onChangeHandler(e)}
            required
          ></RightInput>
        </InDiv>
        <Button
          onClick={() => {
            joinHandler();
          }}
        >
          가입하기
        </Button>
        <Button
          onClick={() => {
            checkId();
          }}
        >
          id중복체크
        </Button>
      </InputDiv>
    </GrandDiv>
  );
};

export default Account;

const GrandDiv = styled.div`
  width: 500px;
  height: 600px;
  padding: 40px;
  border: 1px solid #eaccf8;
`;
const InputDiv = styled.div`
  margin-top: "50px";
`;
const InDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

const LeftDiv = styled.div`
  width: 25%;
  text-align: left;
`;

const RightInput = styled.input`
  border: none;
  text-align: left;
  height: 50px;
  width: 100%;
  /* margin-bottom: 40px; */
`;
=======
import { useCallback, useState } from "react";
import { Button } from "reactstrap";
import styled from "styled-components";
const Account = () => {
  //이름, 이메일, 비밀번호, 비밀번호 확인
  const [id, setId] = useState<string>("");
  const [nick, setNick] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  //오류메시지 상태저장
  const [idMessage, setIdMessage] = useState<string>("");
  const [NickMessage, setNickMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] =
    useState<string>("");
  // 중복 스테이트
  const [same, setSame] = useState("false");

  const 중복 = () => {
    setSame("true");
  };
  console.log(same);

  // 유효성 검사
  const [isId, setIsId] = useState<boolean>(false);
  const [isNick, setIsNick] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState<boolean>(false);
  // 이름
  const onChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 12) {
      setIdMessage("영문 또는 숫자 4~12자리로 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  }, []);

  const onChangeNick = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setNick(e.target.value);
    if (e.target.value.length < 2 || e.target.value.length > 10) {
      setNickMessage("2글자 이상 10글자 미만으로 입력해주세요.");
      setIsNick(false);
    } else {
      setNickMessage("");
      setIsNick(true);
    }
  }, []);
  // 비밀번호
  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*null)(?=.*[0-9]).{4,25}$/;
      const passwordCurrent = e.target.value;
      setPassword(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "숫자+영문자+특수문자 조합으로 10자리 이상 입력해주세요"
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("");
        setIsPassword(true);
      }
    },
    []
  );

  // 비밀번호 확인
  const onChangePasswordConfirm = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordConfirmCurrent = e.target.value;
      setPasswordConfirm(passwordConfirmCurrent);

      if (password === passwordConfirmCurrent) {
        setPasswordConfirmMessage("");
        setIsPasswordConfirm(true);
      } else {
        setPasswordConfirmMessage("비밀번호가 일치하지 않습니다");
        setIsPasswordConfirm(false);
      }
    },
    [password]
  );
  const check = () => {};

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
          <Button2 onClick={() => 중복()}>중복</Button2>
        </InDiv>
        <ValidDiv>
          {id.length > 0 && (
            <WarningSpan
              // style={{ display: "block" }}
              className={`message ${isId ? "success" : "error"}`}
            >
              {idMessage}
            </WarningSpan>
          )}
        </ValidDiv>
        <InDiv>
          <LeftDiv>비밀번호</LeftDiv>
          <RightInput
            type="password"
            name="pw"
            placeholder="비밀번호를 입력하세요"
            required
            onChange={onChangePassword}
          ></RightInput>
        </InDiv>
        <ValidDiv>
          {password.length > 0 && (
            <WarningSpan
              className={`message ${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </WarningSpan>
          )}
        </ValidDiv>
        <InDiv>
          <LeftDiv>비밀번호 확인</LeftDiv>
          <RightInput
            type="password"
            name="pwCheck"
            placeholder="비밀번호를 한번 더 입력하세요"
            required
            onChange={onChangePasswordConfirm}
          ></RightInput>
        </InDiv>
        <ValidDiv>
          {passwordConfirm.length > 0 && (
            <WarningSpan
              className={`message ${isPasswordConfirm ? "success" : "error"}`}
            >
              {passwordConfirmMessage}
            </WarningSpan>
          )}
        </ValidDiv>
        <InDiv>
          <LeftDiv>닉네임</LeftDiv>
          <RightInput
            name="nickName"
            type="text"
            placeholder="닉네임을 입력하세요"
            required
            onChange={onChangeNick}
          ></RightInput>
        </InDiv>
        <ValidDiv>
          {nick.length > 0 && (
            <WarningSpan className={`message ${isNick ? "success" : "error"}`}>
              {NickMessage}
            </WarningSpan>
          )}
        </ValidDiv>
        <Button1
          disabled={!(isId && isNick && isPassword && isPasswordConfirm)}
          onClick={() => {
            check();
          }}
        >
          가입하기
        </Button1>
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
  width: 30%;
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
  /* margin-bottom: 40px; */
  :focus {
    border-bottom: 3px solid #7c74ab;
  }
`;

const WarningSpan = styled.span`
  color: #dc143c;
  font-size: 14px;
`;

const ValidDiv = styled.div`
  /* float: right; */
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
