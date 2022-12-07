import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import HeaderList from "./HeaderList";
import Topbtn from "./../topbtn/Topbtn";
type tfaPath = {
  value: string;
  name: string;
};
const Header = () => {
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

              <Nav.Link>Join Us</Nav.Link>
            </Nav>
          </Container>

          <Topbtn></Topbtn>
        </Navbar>
      </>
    </div>
  );
};

export default Header;
