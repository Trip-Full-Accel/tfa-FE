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
