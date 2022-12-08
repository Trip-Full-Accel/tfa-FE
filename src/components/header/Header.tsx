import { useCallback, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import HeaderList from "./HeaderList";
import Topbtn from "./../topbtn/Topbtn";
import LoginModal from "components/login/LoginModal";
import { Button, Modal } from "react-bootstrap";
import "../../static/loginBtn.css";
import { Input } from "reactstrap";
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

type tfaPath = {
  value: string;
  name: string;
};
const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const [lgShow, setLgShow] = useState(false);
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
    console.log("모달 실행됨");
  }, [isOpenModal]);

  const navigate = useNavigate();
  const tfaPath: tfaPath[] = [
    { name: "사이트 설명", value: "tfaInfo" },
    { name: "마이페이지", value: "myPage" },
    { name: "사진보기", value: "photo" },
  ];

  const linkTo = (path: string) => {
    navigate(path);
  };

  return (
    <div style={{ width: "100%", margin: 0, position: "fixed", zIndex: 1 }}>
      <nav
        className={scrollPosition < 100 ? "original_header" : "change_header"}
        style={{
          display: "flex",
          alignContent: "center",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <button
          onClick={() => {
            linkTo("/");
          }}
          style={{
            cursor: "pointer",
            border: "none",
            backgroundColor: "transparent",
            fontSize: "30px",
          }}
        >
          TripFullAccel
        </button>
        <div style={{ display: "flex", placeItems: "center", float: "right" }}>
          {tfaPath.map((el) => {
            return (
              <HeaderList
                key={el.name}
                value={el.value}
                name={el.name}
              ></HeaderList>
            );
          })}
          <a
            onClick={() => onClickToggleModal()}
            style={{ fontSize: "16px", margin: "0", color: "white" }}
          >
            Join Us
          </a>
          <Button variant="primary" onClick={() => setLgShow(true)}>
            Custom Width Modal
          </Button>
        </div>
      </nav>
      <Topbtn></Topbtn>
      <Modal
        // className="loginM"
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
                src="/img/login.webp"
                alt="login form"
                className="rounded-start w-100"
                style={{ height: "510px" }}
              />
            </MDBCol>

            <MDBCol md="6">
              <MDBCardBody className="d-flex flex-column">
                <div className="d-flex flex-row mt-2">
                  <span className="h1 fw-bold mb-0">Trip Full Accel</span>
                </div>
                <hr></hr>

                <Input
                  placeholder="ID"
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="text"
                />
                <Input
                  placeholder="PASSWORD"
                  wrapperClass="mb-4"
                  id="formControlLg"
                  type="password"
                />

                <Button className="mb-4 px-5" color="light" size="lg">
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
      {isOpenModal && (
        <LoginModal onClickToggleModal={onClickToggleModal}>
          <div style={{ display: " flex" }}>
            <div
              style={{
                display: "grid",
                justifyItems: "center",
                alignContent: "space-evenly",
                width: "50%",
              }}
            >
              <h2 style={{ display: "flex", justifyContent: "space-between" }}>
                {" "}
                <i className="fa-solid fa-plane"></i>Trip Full Accel
              </h2>

              <Input style={{ width: "70%" }} placeholder="id" />
              <Input style={{ width: "70%" }} placeholder="pw" />

              <div className="svg-wrapper">
                <svg height="40" width="150">
                  <rect id="shape" height="40" width="150" />
                  <div id="text">
                    <a href="#" style={{ color: "black" }}>
                      <span className="spot"></span>로그인
                    </a>
                  </div>
                </svg>
              </div>

              <a href="#">Sing in</a>
            </div>
            <div style={{ width: "50%" }}>
              <img
                src="https://www.visitbusan.net/uploadImgs/files/cntnts/20191229153530528_ttiel"
                style={{
                  width: "100%",
                  height: "500px",
                  borderRadius: "0  20px 20px 0",
                }}
              ></img>
            </div>
          </div>
        </LoginModal>
      )}
    </div>
  );
};

export default Header;
