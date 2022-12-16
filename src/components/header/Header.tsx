import { useEffect, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import "../../static/loginBtn.css";
import Topbtn from "./../topbtn/Topbtn";
import HeaderList from "./HeaderList";
import { Button, Modal } from "react-bootstrap";
import "../../static/bootmodal.css";
import "./Header.css";
import "./modal.css";
import styled from "styled-components";

import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { Input } from "reactstrap";
import "../../static/bootmodal.css";
import { isValidInputTimeValue } from "@testing-library/user-event/dist/utils";
import { CustomAxios } from "./../../http/customAxios";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "store/store";
import { fetchPostLogin } from "store/user/userReducer";

type tfaPath = {
  value: string;
  name: string;
};
const Header = () => {
  const [lgShow, setLgShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const tfaPath: tfaPath[] = [
    { name: "Info", value: "tfaInfo" },
    // { name: "마이페이지", value: "myPage" },
    { name: "Photo", value: "photo" },
    { name: "Board", value: "board" },
  ];
  const location = useLocation();
  const loc = location.pathname;
  const dispatch = useDispatch<AppDispatch>();
  const OnLogin = useSelector((state: RootState) => state.user.userId);

  // console.log(idInput);
  // console.log(passwordInput);

  // 스크롤에 따라 업데이트
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  useEffect(() => {
    if (lgShow == true) {
      loginImg();
    }
  }, [lgShow]);

  const linkTo = (path: string) => {
    navigate(path);
    if (path === "/account") {
      setLgShow(false);
    } else if (path === "/forgotPw") {
      setLgShow(false);
    }
  };

  const locFunction = () => {
    if (loc == "/") {
      if (scrollPosition < 10) {
        return "original_header_list";
      } else {
        return "change_header_list";
      }
    } else {
      return "info_header_list";
    }
  };

  const [loginImges, setLoginImges] = useState("");
  useEffect(() => {
    if (lgShow == true) {
      loginImg();
    }
  }, [lgShow]);
  const loginImg = () => {
    var imgList = [];
    imgList.push("/img/login/login1.jpg");
    imgList.push("/img/login/login2.jpg");
    imgList.push("/img/login/login3.jpg");
    imgList.push("/img/login/login4.jpg");
    imgList.push("/img/login/login5.jpg");
    imgList.push("/img/login/login6.jpg");
    imgList.push("/img/login/login7.jpg");
    imgList.push("/img/login/login8.jpg");
    let random = Math.round(Math.random() * 7 + 1);
    let imgRandom = imgList[random - 1];
    setLoginImges(imgRandom);
  };

  // 카톡 로그인 구현
  const { Kakao } = window;
  const loginKakao = () => {
    Kakao.Auth.authorize({
      redirectUri: "http://localhost:3000/kakao",
      scope: "profile_nickname, account_email, gender,age_range",
    });
    console.log("카톡로그인 메서드 실행됨");
  };

  // const CLIENT_ID = "82e8a356b706e9f7b99ef65f77a5fd43";
  // const REDIRECT_URI = "http://localhost:3000/kakao";
  // 프런트엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:3000/oauth/callback/kakao";
  // 백엔드 리다이랙트 URI 예시
  // const REDIRECT_URI =  "http://localhost:5000/kakao/code";
  // const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  //구글 로그인
  //구글 로그인 구현
  let googleClientId: string =
    "211887729069-e1tmdi51mma8bkhmd8b5k6rq29tf8s21.apps.googleusercontent.com";
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj] = useState({
    email: "",
    name: "",
  });
  //로그인 성공시 res처리
  const onLoginSuccess = (res: any) => {
    setUserObj({
      ...userObj,
      email: res.profileObj.email,
      name: res.profileObj.name,
    });
  };

  // 네이버 로그인
  //
  //
  //
  // 로그인 인풋값 전송

  const idInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIdInput(e.target.value);
  };
  const pwInputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordInput(e.target.value);
  };

  // 로그인하고 로그인 성공시에 alert로 닉네임 띄워줌
  const successLogin = useSelector(
    (state: RootState) => state.user.successLogin
  );
  const goToLogin = async () => {
    dispatch(fetchPostLogin({ userId: idInput, pw: passwordInput }));
    if (successLogin.length > 0) {
      setLgShow(false);
      alert("환영해~" + successLogin);
      navigate("/");
    } else {
      alert("id or pw 확인해주세요");
    }
  };

  return (
    <HeaderMainDiv>
      <MainNav
        className={scrollPosition < 10 ? "original_header" : "change_header"}
      >
        <FirstNavDiv>
          <TitleNav>
            <TitleB
              onClick={() => {
                linkTo("/");
              }}
            >
              <img src="/img/TFAlogo.png" style={{ width: "200px" }}></img>
            </TitleB>
          </TitleNav>
          <ListNav>
            {tfaPath.map((el) => {
              return (
                <HeaderList
                  key={el.name}
                  value={el.value}
                  name={el.name}
                ></HeaderList>
              );
            })}

            {successLogin.length > 0 ? (
              <JoinNav
                className={locFunction()}
                onClick={() => linkTo("/myPage")}
              >
                &nbsp; 마이페이지
              </JoinNav>
            ) : (
              <JoinNav
                className={locFunction()}
                onClick={() => setLgShow(true)}
              >
                &nbsp; Join
              </JoinNav>
            )}
          </ListNav>
        </FirstNavDiv>
      </MainNav>

      <Modal
        className="loginM"
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style={{ borderRadius: "5%" }}
      >
        {/* mdb 모달 테스트 */}
        {/* <MDBContainer className="my-5"> */}
        <MDBCard
          style={{
            width: "100%",
            height: "100%",
            // borderRadius: "5%",
            border: "none",
          }}
        >
          <MDBRow className="g-0">
            <MDBCol md="6">
              <MDBCardImage
                onBlur={MDBIcon}
                src={loginImges}
                alt="login form"
                className="rounded-start w-100"
                style={{ height: "513px" }}
              ></MDBCardImage>
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <span
                    className="h1 fw-bold mb-0"
                    style={{ marginTop: "3rem" }}
                  >
                    Trip Full Accel
                  </span>
                </div>

                <Input
                  className="lginputid"
                  placeholder="ID"
                  type="text"
                  style={{ marginTop: "2rem" }}
                  onChange={(e) => {
                    idInputHandler(e);
                  }}
                />
                <Input
                  className="lginputpw"
                  placeholder="PASSWORD"
                  type="password"
                  onChange={(e) => {
                    pwInputHandler(e);
                  }}
                />

                <Button
                  className="mb-4 px-5"
                  color="light"
                  size="lg"
                  onClick={() => goToLogin()}
                  style={{
                    backgroundColor: "#7C74AB",
                    borderColor: "#7C74AB",
                    marginBottom: "0rem",
                  }}
                >
                  Login
                </Button>
                <a
                  className="small text-muted"
                  onClick={() => linkTo("/forgotPw")}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  비밀번호를 잊으셨나요?
                </a>

                <a
                  onClick={() => linkTo("/account")}
                  style={{
                    color: "#393f81",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  회원가입
                </a>

                <div className="wrapper">
                  {/* 카카오 */}
                  <a href="#" className="icon">
                    <i
                      style={{ fontSize: "35px" }}
                      className="xi-kakaotalk"
                      onClick={() => loginKakao()}
                    ></i>
                  </a>
                  {/* 구글로그인 */}
                  <a href="/google" className="icon">
                    <i
                      style={{ fontSize: "35px" }}
                      className="xi-google-plus"
                    ></i>
                  </a>
                  {/* 네이버 */}
                  <a href="/naver" className="icon">
                    <i style={{ fontSize: "30px" }} className="xi-naver"></i>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Modal>
      <Topbtn></Topbtn>
    </HeaderMainDiv>
  );
};

export default Header;

const HeaderMainDiv = styled.div`
  width: 100%;
  margin: 0;
  position: fixed;
  z-index: 2;
  border: none;
`;

const MainNav = styled.nav`
  display: flex;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  border: none;
`;

const FirstNavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`;
const TitleNav = styled.div``;

const TitleB = styled.b`
  color: black;
  cursor: pointer;
  border: none;
  background-color: transparent;
  font-size: 30px;
  float: left;
  z-index: 9999;
`;

const ListNav = styled.div`
  display: flex;
  cursor: pointer;
`;
const JoinNav = styled.div`
  padding: 0 10px;
`;

const Butto = styled.button`
  background-color: red;
`;
