import { useEffect, useState } from "react";
import { redirect, useLocation, useNavigate } from "react-router-dom";
import "../../static/loginBtn.css";
import Topbtn from "./../topbtn/Topbtn";
import HeaderList from "./HeaderList";
import { Button, Modal } from "react-bootstrap";
import "../../static/bootmodal.css";
import "./Header.css";
import "./modal.css";

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

type tfaPath = {
  value: string;
  name: string;
};
const Header = () => {
  const [lgShow, setLgShow] = useState(false);
  const [modalImg, setModalImg] = useState<string>("");
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  const navigate = useNavigate();
  const tfaPath: tfaPath[] = [
    { name: "Info", value: "tfaInfo" },
    // { name: "마이페이지", value: "myPage" },
    { name: "Photo", value: "photo" },
  ];

  const linkTo = (path: string) => {
    navigate(path);
  };
  const location = useLocation();
  const loc = location.pathname;

  const locFunction = () => {
    if (loc == "/tfaInfo") {
      return "info_header_list";
    } else if (loc == "/photo") {
      return "info_header_list";
    } else if (loc == "/maps") {
      return "info_header_list";
    } else if (loc == "/myPage") {
      return "info_header_list";
    } else if (loc == "/") {
      if (scrollPosition < 10) {
        return "original_header_list";
      } else {
        return "change_header_list";
      }
    }
  };

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
    return imgRandom;
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

  return (
    <div style={{ width: "100%", margin: 0, position: "fixed", zIndex: 2 }}>
      <nav
        className={scrollPosition < 10 ? "original_header" : "change_header"}
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          border: "none",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
            alignItems: "center",
          }}
        >
          <div className="titleDiv">
            <b
              onClick={() => {
                linkTo("/");
              }}
              style={{
                color: "black",
                cursor: "pointer",
                border: "none",
                backgroundColor: "transparent",
                fontSize: "30px",
                float: "left",
                zIndex: "9999",
              }}
            >
              TripFullAccel
            </b>
          </div>
          <div
            style={{
              display: "flex",
              cursor: "pointer",
            }}
          >
            {tfaPath.map((el) => {
              return (
                <HeaderList
                  key={el.name}
                  value={el.value}
                  name={el.name}
                ></HeaderList>
              );
            })}
            <div
              style={{ padding: "0 10px" }}
              className={locFunction()}
              onClick={() => setLgShow(true)}
            >
              &nbsp; Join
            </div>
          </div>
        </div>
      </nav>

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
                src={loginImg()}
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
                />
                <Input
                  className="lginputpw"
                  placeholder="PASSWORD"
                  type="password"
                />

                <Button
                  className="mb-4 px-5"
                  color="light"
                  size="lg"
                  onClick={() => loginImg()}
                >
                  Login
                </Button>
                <a className="small text-muted" href="#!">
                  비밀번호를 잊으셨나요?
                </a>

                <a href="#!" style={{ color: "#393f81" }}>
                  회원가입
                </a>

                <div className="wrapper">
                  <a href="#" className="icon">
                    <i
                      className="fab fa-facebook-f"
                      onClick={() => loginKakao()}
                    ></i>
                  </a>

                  <a href="#" className="icon">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
                  <a href="#" className="icon">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </Modal>
      <Topbtn></Topbtn>
    </div>
  );
};

export default Header;
