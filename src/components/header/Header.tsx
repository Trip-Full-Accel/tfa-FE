import { useCallback, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import HeaderList from "./HeaderList";
import Topbtn from "./../topbtn/Topbtn";
import LoginModal from "components/login/LoginModal";
import { Button, Modal } from "react-bootstrap";
type tfaPath = {
  value: string;
  name: string;
};
const Header = () => {
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
              <Nav.Link onClick={() => onClickToggleModal()}>Join Us</Nav.Link>
              {/*  */}
              {/* <Button variant="primary" onClick={() => setLgShow(true)}>
                Custom Width Modal
              </Button> */}
            </Nav>
          </Container>

          <Topbtn></Topbtn>
        </Navbar>
      </>
      {/* <Modal
        size="lg"
        show={lgShow}
        // style={{ marginTop: "100px" }}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>로그인 메뉴</Modal.Body>
      </Modal> */}
      {isOpenModal && (
        <LoginModal onClickToggleModal={onClickToggleModal}>
          이곳에 children이 들어갑니다.
        </LoginModal>
      )}
    </div>
  );
};

export default Header;
