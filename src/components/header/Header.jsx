import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import { CloseButton, Modal } from "reactstrap";
import Topbtn from "../topbtn/Topbtn";
import HeaderList from "./HeaderList";
function Header() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: "absolute", top: "15px", right: "15px" }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  function cambiar_login() {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_login";
    document.querySelector(".cont_form_login").style.display = "block";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.opacity = "1";
    }, 400);

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
    }, 200);
  }

  function cambiar_sign_up(at) {
    document.querySelector(".cont_forms").className =
      "cont_forms cont_forms_active_sign_up";
    document.querySelector(".cont_form_sign_up").style.display = "block";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.opacity = "1";
    }, 100);

    setTimeout(function () {
      document.querySelector(".cont_form_login").style.display = "none";
    }, 400);
  }

  function ocultar_login_sign_up() {
    document.querySelector(".cont_forms").className = "cont_forms";
    document.querySelector(".cont_form_sign_up").style.opacity = "0";
    document.querySelector(".cont_form_login").style.opacity = "0";

    setTimeout(function () {
      document.querySelector(".cont_form_sign_up").style.display = "none";
      document.querySelector(".cont_form_login").style.display = "none";
    }, 500);
  }
  const navigate = useNavigate();

  const tfaPath = [
    { name: "사이트 설명", value: "tfaInfo" },
    { name: "여행가기", value: "maps" },
    { name: "마이페이지", value: "myPage" },
    { name: "사진보기", value: "photo" },
  ];
  const linkTo = (path) => {
    navigate(path);
  };

  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand
              onClick={() => {
                linkTo("/");
              }}
              style={{ cursor: "pointer" }}
            >
              TripFullAccel
            </Navbar.Brand>

            <Nav className="me-auto">
              {tfaPath.map((el) => {
                return (
                  <HeaderList
                    key={el.name}
                    value={el.value}
                    name={el.name}
                  ></HeaderList>
                );
              })}

              <Nav.Link onClick={toggle}>Join Us</Nav.Link>
            </Nav>
          </Container>

          {/* modal code */}
          <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
            <div className="cotn_principal">
              <div className="cont_centrar">
                <div className="cont_login">
                  <div className="cont_info_log_sign_up">
                    <div className="col_md_login">
                      <div className="cont_ba_opcitiy">
                        <h2>LOGIN</h2>
                        <p>
                          Welcome Back
                          <br />
                          To TRIP FULL ACCEL!
                        </p>
                        <button
                          className="btn_login"
                          onClick={() => cambiar_login()}
                        >
                          LOGIN
                        </button>
                      </div>
                    </div>
                    <div className="col_md_sign_up">
                      <div className="cont_ba_opcitiy">
                        <h2>SIGN UP</h2>

                        <p>
                          Create your Trip!
                          <br />
                          We will help you on your journey
                        </p>

                        <button
                          className="btn_sign_up"
                          onClick={() => cambiar_sign_up()}
                        >
                          SIGN UP
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="cont_back_info">
                    <div className="cont_img_back_grey">
                      <img
                        src="https://cdn.mediayonhap.com/news/photo/202101/50659_40673_158.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="cont_forms">
                    <div className="cont_img_back_">
                      <img
                        src="https://cdn.mediayonhap.com/news/photo/202101/50659_40673_158.jpg"
                        alt=""
                      />
                    </div>
                    <div className="cont_form_login">
                      <a onClick={() => ocultar_login_sign_up()}>
                        {/* <i
                    class="material-icons"
                    style={{ textDecoration: "none", cursor: "`poin`ter" }}
                  >
                    back
                  </i> */}
                        <CloseButton />
                      </a>
                      <h2>LOGIN</h2>
                      <input type="text" placeholder="Email" />
                      <input type="password" placeholder="Password" />
                      <button
                        className="btn_login"
                        onClick={() => cambiar_login()}
                      >
                        LOGIN
                      </button>
                    </div>

                    <div className="cont_form_sign_up">
                      <a onClick={() => ocultar_login_sign_up()}>
                        {/* <i class="material-icons">back</i><</> */}
                        <CloseButton />
                      </a>
                      <h2>SIGN UP</h2>
                      <input type="text" placeholder="Email" />
                      <input type="text" placeholder="User" />
                      <input type="password" placeholder="Password" />
                      <input type="password" placeholder="Confirm Password" />
                      <button
                        className="btn_sign_up"
                        onClick={() => cambiar_sign_up()}
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal>

          <Topbtn></Topbtn>
        </Navbar>
      </>
    </div>
  );
}

export default Header;
