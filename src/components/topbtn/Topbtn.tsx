import { useEffect, useState } from "react";
import styled from "styled-components";
function Topbtn() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return showButton ? (
    <TopBtnDiv>
      <Topbutton onClick={scrollToTop} type="button">
        <TopBtnImg src="/img/topbtn.png"></TopBtnImg>
      </Topbutton>
    </TopBtnDiv>
  ) : (
    <></>
  );
}
export default Topbtn;

const TopBtnDiv = styled.div`
  bottom: 4.5rem;
  position: fixed;
  right: 2rem;
  transition: all 0.4s;
  background-color: transparent;
`;
const Topbutton = styled.button`
  border: none;
  background-color: transparent;
`;

const TopBtnImg = styled.img`
  width: 50px;
  background-color: transparent;
  border: none;
`;
