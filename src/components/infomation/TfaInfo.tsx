import { useCallback, useEffect, useRef, useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import Info from "./Info";
import "./info.css";
let staticScrollIndex = 0;
const TfaInfo = () => {
  const outerDivRef = useRef<any>();
  const [scrollIndex, setScrollIndex] = useState(0);
  const moveScrollTo = () => {
    const pageHeight = window.innerHeight;
    outerDivRef.current.scrollTo({
      top: pageHeight * scrollIndex,
      left: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const outerDivRefCurrent = outerDivRef.current;
    outerDivRefCurrent.addEventListener("wheel", wheelHandler);
  }, []);
  const wheelHandler = (e: any) => {
    e.preventDefault();
    const { deltaY } = e;
    if (deltaY > 0) {
      changeScrollIndex(1);
    } else {
      changeScrollIndex(-1);
    }
  };
  const changeScrollIndex = (index: number) => {
    staticScrollIndex += index;
    if (staticScrollIndex > 3) {
      staticScrollIndex = 3;
    } else if (staticScrollIndex < 0) {
      staticScrollIndex = 0;
    }
    setScrollIndex(staticScrollIndex);
  };
  useEffect(() => {
    // console.log(scrollIndex);
    moveScrollTo();
  }, [scrollIndex]);
  return (
    <div ref={outerDivRef} className="outer">
      <Info scrollIndex={scrollIndex} />
      <div className="inner bg-yellow">
        <Fade direction="left">
          <BoxDiv>
            <div>
              <LeftImg
                src="/img/login/login1.jpg"
                style={{ width: "550px", height: "350px" }}
              ></LeftImg>
            </div>
            <div style={{ alignSelf: "center", marginLeft: "38px" }}>
              <TitleSpan>
                여행의 모든 것<br />
                TFA에서 쉽고 간편하게
              </TitleSpan>
            </div>
          </BoxDiv>
        </Fade>
      </div>
      <div className="inner bg-blue">
        <Fade delay={100} direction="right" style={{ marginLeft: "30rem" }}>
          <BoxDiv>
            <div style={{ marginRight: "38px", alignSelf: "center" }}>
              <ContentSpan>
                국내 모든 여행지를 한눈에 확인하세요.
                <br /> 이제껏 경험 못 했던 쉽고 편리한 여행 서비스,
                <br /> TFA와 함께라면 당신의 여행이 새로워질 거예요.
              </ContentSpan>
            </div>
            <div>
              <RightImg src="/img/login/login2.jpg"></RightImg>
            </div>
          </BoxDiv>
        </Fade>
      </div>
      <div className="inner bg-pink">
        <Fade direction="left" style={{ marginLeft: "10rem" }}>
          <BoxDiv>
            <div>
              <LeftImg src="/img/main.png"></LeftImg>
            </div>
            <TextDiv>
              <SubSpan>메인</SubSpan>
              <br />
              <TextSpan>
                내 여행계획,
                <br />
                지역부터 일정까지
                <br /> 똑똑하게
              </TextSpan>
            </TextDiv>
          </BoxDiv>
        </Fade>
      </div>
      <div className="inner bg-yellow">
        <Fade direction="right" style={{ marginLeft: "30rem" }}>
          <BoxDiv>
            <TextDiv>
              <SubSpan>코스</SubSpan>
              <br />
              <TextSpan>
                쉽고 간편하게
                <br />
                이런 계획 짜보셨나요?
              </TextSpan>
            </TextDiv>
            <div>
              <MapImg src="/img/map.png"></MapImg>
            </div>
          </BoxDiv>
        </Fade>
      </div>
    </div>
  );
};
//height: 100vh;
export default TfaInfo;
const BoxDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: start;
  margin: 13rem 0 0 0 !important;
`;
const LeftImg = styled.img`
  width: 450px;
  height: 330px;
`;
const RightImg = styled.img`
  width: 450px;
  height: 330px;
  margin-right: 170px;
`;
const TitleSpan = styled.span`
  font-size: 50px;
`;
const SubSpan = styled.span`
  font-size: 30px;
`;
const TextSpan = styled.span`
  font-size: 50px;
`;

const TextDiv = styled.div`
  text-align: start !important;
  margin: 0 38px 0 38px;
`;

const MapImg = styled.img`
  width: 450px;
  height: 330px;
  margin-right: 170px;
`;
const ContentSpan = styled.span`
  font-size: 36px;
`;
