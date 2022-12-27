import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../static/bootmodal.css";
import "../../static/loginBtn.css";
import Topbtn from "./../topbtn/Topbtn";
import "./Header.css";
import HeaderList from "./HeaderList";
import "./modal.css";
import ActionProvider from "components/chatbot/ActionProvider";
import config from "components/chatbot/config";
import MessageParser from "components/chatbot/MessageParser";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import "../chatbot/chatbot.css";
import api from "axios";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBIcon,
  MDBRow,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "reactstrap";
import { AppDispatch, RootState } from "store/store";
import {
  fetchPostKakao,
  fetchPostLogin,
  fetchUserlogout,
  loginNick,
} from "store/user/userReducer";
import "../../static/bootmodal.css";
import Translate from "components/translate/translate";
import { useTranslation } from "react-i18next";
import axios from "axios";

type tfaPath = {
  value: string;
  name: string;
};
const Header = () => {
  const { t } = useTranslation();

  const [lgShow, setLgShow] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [idInput, setIdInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const navigate = useNavigate();
  const tfaPath: tfaPath[] = [
    { name: `${t("info")}`, value: "tfaInfo" },
    { name: "Info2", value: "tfaInfo2" },
    { name: `${t("suggest")}`, value: "suggest" },
    // { name: "마이페이지", value: "myPage" },
    { name: `${t("photo")}`, value: "photo" },
    { name: `${t("board")}`, value: "board" },
  ];
  const location = useLocation();

  const loc = location.pathname;
  const dispatch = useDispatch<AppDispatch>();
  const OnLogin = useSelector((state: RootState) => state.user.userId);

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
  const [userCode, setUserCode] = useState();
  const [userNick, setUserNick] = useState();
  const { Kakao } = window;
  const kakaoLogin = () => {
    Kakao.Auth.login({
      success() {
        Kakao.API.request({
          url: "/v2/user/me",
          success(res: any) {
            // alert(JSON.stringify(res));
            const kakaoAccount = res.kakao_account;
            console.log(kakaoAccount);
            setLgShow(false);
            navigate(loc);
          },
          fail(error: any) {
            console.log(error);
          },
        });
      },
      fail(error: any) {
        console.log(error);
      },
    });
  };

  const [kakaoCode, setKakaoCode] = useState<string>("");
  const [kakaoNick, setKakaoNick] = useState<string>("");
  function kakaoLogin2() {
    Kakao.Auth.login({
      success: function (response: any) {
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (response: any) {
            setKakaoCode(response.id);
            console.log(response.id);
            setKakaoNick(response.properties.nickname);
            console.log(response.properties.nickname);
            // dispatch(
            //   fetchPostKakao({
            //     userCode: kakaoCode,
            //     nickname: kakaoNick,
            //   })
            // );
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
      },
      fail: function (error: any) {
        console.log(error);
      },
    });
  }
  console.log(kakaoCode);
  console.log(kakaoNick);

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

  const testUserId = localStorage.getItem("userId");
  const logout = () => {
    if (Kakao.Auth.getAccessToken()) {
      Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response: any) {
          console.log(response);
        },
        fail: function (error: any) {
          console.log(error);
        },
      });
      Kakao.Auth.setAccessToken(undefined);
    }
    console.log(testUserId);

    localStorage.clear();
    alert("로그아웃되었습니다.");
    navigate(loc);
  };

  const goToLogin = () => {
    dispatch(fetchPostLogin({ userId: idInput, pw: passwordInput }))
      .unwrap()
      .then((res) => {
        if (res.length > 0) {
          if (loc === "/") {
            setLgShow(false);
            alert("환영해~" + res);
            navigate("/");
          } else {
            setLgShow(false);
            alert("환영해~" + res);
          }
        } else {
          alert("id or pw 확인해주세요");
        }
      });

    // const [nick, setNick] = useState("");
    // CustomAxios("user/login", "POST", {
    //   userId: idInput,
    //   pw: passwordInput,
    // }).then((res) => {
    //   const nick = res.data[0].nickName;
    //   if (nick.length > 0) {
    //     // setNick(nick);
    //     setLgShow(false);
    //     alert(nick);
    //   }
    // });
    // dispatch(loginNick({
    //   userId:idInput,
    //   pw:passwordInput
    // }))
  };
  const [chat, setChat] = useState(false);
  const [bot, setBot] = useState(false);

  const onChatbot = () => {
    if (bot === false) {
      setBot(true);
    } else {
      setBot(false);
    }
  };
  const localUserId = localStorage.getItem("userId");

  const [open, setOpen] = useState(false);
  const onNav = () => {
    if (open === false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  const kakaoId = localStorage.getItem("kakaoId");
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
            <Translate></Translate>
          </TitleNav>
          {/* <button onClick={onNav}>닫기</button> */}
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

            {kakaoId !== null ? (
              <>
                <JoinNav
                  className={locFunction()}
                  onClick={() => linkTo("/mypage")}
                >
                  &nbsp; {t("mypage")}
                </JoinNav>
                <JoinNav className={locFunction()} onClick={logout}>
                  &nbsp; {t("logout")}
                </JoinNav>
              </>
            ) : (
              <JoinNav
                className={locFunction()}
                onClick={() => setLgShow(true)}
              >
                &nbsp; {t("join")}
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
                style={{ height: "100%" }}
              ></MDBCardImage>
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <span
                    className="h1 fw-bold mb-0"
                    style={{ marginTop: "0.5rem" }}
                  >
                    Trip Full Accel
                  </span>
                </div>

                <Input
                  className="lginputid"
                  placeholder={`${t("idPlace")}`}
                  type="text"
                  style={{ marginTop: "2rem" }}
                  onChange={(e) => {
                    idInputHandler(e);
                  }}
                />
                <Input
                  className="lginputpw"
                  placeholder={`${t("pwPlace")}`}
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
                  {t("login")}
                </Button>
                <a
                  className="small text-muted"
                  onClick={() => linkTo("/forgotPw")}
                  style={{
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {t("forgotPw")}
                </a>

                <a
                  onClick={() => linkTo("/account")}
                  style={{
                    color: "#393f81",
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  {t("join")}
                </a>

                <div className="wrapper">
                  {/* 카카오 */}
                  <a href="#" className="icon">
                    <i
                      style={{ fontSize: "35px" }}
                      className="xi-kakaotalk"
                      onClick={async () => {
                        await kakaoLogin2();
                        dispatch(
                          fetchPostKakao({
                            userCode: "123",
                            nickname: "park",
                          })
                        );
                        setLgShow(false);
                      }}
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
      {loc === "/mypage" ? (
        <></>
      ) : (
        <ChatbotBtn onClick={onChatbot}>
          <img style={{ width: "50px" }} src="/img/chatbot.png" />
        </ChatbotBtn>
      )}

      {/* 챗봇 시작 */}

      {bot === true ? (
        <ChatbotDiv id="chay">
          <Chatbot
            config={config}
            messageParser={MessageParser}
            actionProvider={ActionProvider}
            placeholderText="궁금한 것을 물어보세요"
          />
        </ChatbotDiv>
      ) : (
        <div></div>
      )}
      {loc === "/mypage" || loc === "/maps" ? <></> : <Topbtn></Topbtn>}
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
const TitleNav = styled.div`
  display: flex;
  margin-left: 8rem;
`;

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
  margin-right: 8rem;
`;
const JoinNav = styled.div`
  padding: 0 10px;
`;

const ChatbotBtn = styled.button`
  border: none;
  background-color: transparent;
  position: fixed;
  bottom: 8rem;
  right: 2rem;
`;

const ChatbotDiv = styled.div`
  margin: 10rem;
  position: absolute;
  right: 0;
`;
