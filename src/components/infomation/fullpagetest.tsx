import { useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Info from "./Info";
import "./info.css";

const DIVIDER_HEIGHT = 5;

const FullPageTest = () => {
  const outerDivRef = useRef<any>();
  const [scrollIndex, setScrollIndex] = useState(1);
  useEffect(() => {
    const wheelHandler = (e: any) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = outerDivRef.current; // 스크롤 위쪽 끝부분 위치
      const pageHeight = window.innerHeight; // 화면 세로길이, 100vh와 같습니다.

      if (deltaY > 0) {
        // 스크롤 내릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          //현재 1페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(3);
        } else {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      } else {
        // 스크롤 올릴 때
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 2) {
          //현재 2페이지
          outerDivRef.current.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(1);
        } else if (scrollTop >= pageHeight && scrollTop < pageHeight * 3) {
          // 현재 3페이지
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        } else {
          outerDivRef.current.scrollTo({
            top: pageHeight + DIVIDER_HEIGHT,
            left: 0,
            behavior: "smooth",
          });
          setScrollIndex(2);
        }
      }
    };
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", wheelHandler);
    };
  }, []);
  return (
    <div ref={outerDivRef} className="outer">
      <Info scrollIndex={scrollIndex} />
      <div className="inner bg-yellow">
        <Fade direction="left" style={{ marginLeft: "10rem" }}>
          <BoxDiv>
            <div>
              <LeftImg src="/img/login/login1.jpg"></LeftImg>
            </div>
            <div>
              <TextSpan>
                iPhone 14 Pro는 iPhone을 완전히 새로운 방식으로 다룰 수 있게
                <br></br>
                해주는 Dynamic Island, 중요한 정보를 언제나 한눈에 볼 수 있게
                <br></br>
                해주는 상시표시형 디스플레이를 갖추었습니다.
              </TextSpan>
            </div>
          </BoxDiv>
        </Fade>
      </div>
      <div className="inner bg-blue">
        <Fade direction="right" style={{ marginLeft: "30rem" }}>
          <BoxDiv>
            <div>
              <TextSpan>
                ‘앱 추적 투명성’ 기능은 어떤 앱이 당신의 활동을 추적할 수
                있는지를
                <br></br>
                당신이 직접 결정할 수 있게 해줍니다. 이는 무엇을 공유하고, 또
                <br></br>
                누구와 공유할지를 당신이 직접 제어할 수 있도록 iPhone이
                <br></br>
                설계되었다는 점을 여실히 보여주는 수많은 예 중 하나죠.
              </TextSpan>
            </div>
            <div>
              <RightImg
                src="/img/login/login2.jpg"
                style={{ width: "300px", height: "300px" }}
              ></RightImg>
            </div>
          </BoxDiv>
        </Fade>
      </div>
      <div className="inner bg-pink">
        <Fade direction="left" style={{ marginLeft: "10rem" }}>
          <BoxDiv>
            <div>
              <LeftImg
                src="/img/login/login3.jpg"
                style={{ width: "300px", height: "300px" }}
              ></LeftImg>
            </div>
            <div>
              <TextSpan>
                iPhone 14은 심각한 자동차 충돌 사고 발생 시 이를 감지해 119에
                <br></br>
                전화를 걸어주고, 긴급 연락처로 알림까지 보낼 수 있습니다.
              </TextSpan>
            </div>
          </BoxDiv>
        </Fade>
      </div>
      <div className="inner bg-yellow">
        <Fade direction="right" style={{ marginLeft: "30rem" }}>
          <BoxDiv>
            <div>
              <TextSpan>
                iPhone 14 Plus는 iPhone 사상 최고의 배터리 성능을 선사합니다.
                <br></br>
                iPhone 14 역시 온종일 가는 놀라운 배터리 성능을 자랑하죠.
              </TextSpan>
            </div>
            <div>
              <RightImg
                src="/img/login/login4.jpg"
                style={{ width: "300px", height: "300px" }}
              ></RightImg>
            </div>
          </BoxDiv>
        </Fade>
      </div>
    </div>
  );
};

export default FullPageTest;

const BoxDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 !important;
`;

const LeftImg = styled.img`
  width: 300px;
  height: 300px;
`;
const RightImg = styled.img`
  width: 300px;
  height: 300px;
`;

const TextSpan = styled.span`
  font-size: 25px;
`;
