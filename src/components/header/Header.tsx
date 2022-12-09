import { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import HeaderList from "./HeaderList";
import Topbtn from "./../topbtn/Topbtn";
import LoginModal from "components/login/LoginModal";
import "../../static/loginBtn.css";
// import Input from "reactstrap";
import { Button, Modal } from "react-bootstrap";
import "./Header.css";
import "./modal.css";
import "../../static/modal.css";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
} from "mdb-react-ui-kit";
import { Input } from "reactstrap";
import "../../static/modal.css";
import LoginSilder from "components/slide/LoginSlider";

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
    imgList.push("/img/login/login1.webp");
    imgList.push("/img/login/login2.png");
    imgList.push("/img/login/login3.jpg");
    imgList.push("/img/login/login4.jpg");
    imgList.push("/img/login/login5.jpg");
    imgList.push("/img/login/login6.jpg");
    imgList.push("/img/login/login7.jpg");
    imgList.push("/img/login/login8.jpg");
    let random = Math.round(Math.random() * 7 + 1);
    // setModalImg("/img/login" + random + ".png");

    let imgRandom = imgList[random - 1];
    return imgRandom;
  };

  return (
    <div style={{ width: "100%", margin: 0, position: "fixed", zIndex: 1 }}>
      <nav
        className={scrollPosition < 10 ? "original_header" : "change_header"}
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
          border: "none",
          // boxShadow:
          // "0 2px 5px 0 rgb(0 0 0 / 5%), 0 2px 10px 0 rgb(0 0 0 / 5%) !important",
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
                src={
                  loginImg()
                  // scrollPosition > 10 ? "/img/login.webp" : "/img/login2.png"
                }
                alt="login form"
                className="rounded-start w-100"
                style={{ height: "513px" }}
              >
                {/* <LoginSilder></LoginSilder> */}
              </MDBCardImage>
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
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="text"
                  style={{ marginTop: "2rem" }}
                />
                <Input
                  className="lginputpw"
                  placeholder="PASSWORD"
                  wrapperClass="mb-4"
                  id="formControlLg"
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
                    <i className="fab fa-facebook-f"></i>
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
        {/* </MDBContainer> */}
      </Modal>
      <Topbtn></Topbtn>
    </div>
  );
};

export default Header;
