import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styled from "styled-components";
import UseMoveScroll from "./useMoveScroll";
import "./MyPage.css";
import Snowfall from "react-snowfall";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useNavigate } from "react-router-dom";

interface myPageType {
  pageKey: string;
  pageKorName: string;
}
const MyPage = () => {
  const myPageList: myPageType[] = [
    { pageKey: "userInfo", pageKorName: "회원정보수정" },
    { pageKey: "travelRoute", pageKorName: "내 여행 플랜" },
    { pageKey: "travelCost", pageKorName: "여행 경비계산" },
  ];

  const {
    element1,
    element2,
    element3,
    element4,
    element5,
    element6,
    onMoveToElement,
    onMoveToElement2,
    onMoveToElement3,
    onMoveToElement4,
    onMoveToElement5,
    onMoveToElement6,
  } = UseMoveScroll();

  const [show, setShow] = useState(false);
  const onRemote = () => {
    if (show === false) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  const navigate = useNavigate();
  const linkTo = (path: string) => {
    navigate(path);
  };
  return (
    <MainContainer>
      <Snowfall color="white" snowflakeCount={200} />
      <Top3Container>
        <Container ref={element1}>
          <Top3Container>
            <InfoDiv>
              <H4Tag>내 정보</H4Tag>
              <InfoInsideDiv>ID: test1</InfoInsideDiv>
              <InfoInsideDiv>닉네임: test1</InfoInsideDiv>
              <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
            </InfoDiv>
            <RecordDiv>
              <H4Tag>내가 갔던 여행</H4Tag>
              <ul>
                <PostLi>1번 여행</PostLi>
                <PostLi>2번 여행</PostLi>
                <PostLi>3번 여행</PostLi>
              </ul>
            </RecordDiv>
          </Top3Container>
          <Bottom2Container>
            <CostDiv>
              <H4Tag>비용 계산</H4Tag>
              <input type="text" value={"교통비"} />
              <input type="text" value={"식비"} />
              <input type="text" value={"숙소비"} />
              <input type="text" value={"기타"} />
              <input type="text" value={"총비용"} />
            </CostDiv>
            <PostsDiv>
              <H4Tag>내가 쓴 글</H4Tag>
              <ul>
                <PostLi>1번 게시글</PostLi>
                <PostLi>2번 게시글</PostLi>
                <PostLi>3번 게시글</PostLi>
              </ul>
            </PostsDiv>
            <ChartDiv>
              <H4Tag>차트</H4Tag>
              <img
                src="/img/chart.png"
                style={{ width: "70%", height: "70%" }}
              />
            </ChartDiv>
            <RemoteShowBtn onClick={onRemote}>
              <i className="xi-bars" />
            </RemoteShowBtn>
            {show === true ? (
              <div
                style={{ position: "fixed", right: "3rem", bottom: "100px" }}
              >
                <div>
                  <HomeBtn
                    onClick={() => {
                      linkTo("/");
                    }}
                  >
                    <i className="xi-home xi-2x" />
                  </HomeBtn>
                </div>
                <div>
                  <RemoteBtn id="1" onClick={onMoveToElement}>
                    1
                    <ReactTooltip anchorId="1" place="top" content="메인" />
                  </RemoteBtn>

                  <RemoteBtn id="2" onClick={onMoveToElement2}>
                    2<ReactTooltip anchorId="2" place="top" content="내 정보" />
                  </RemoteBtn>
                  <RemoteBtn id="3" onClick={onMoveToElement3}>
                    3<ReactTooltip anchorId="3" place="top" content="경로" />
                  </RemoteBtn>
                </div>
                <div>
                  <RemoteBtn id="4" onClick={onMoveToElement4}>
                    4<ReactTooltip anchorId="4" place="top" content="예산" />
                  </RemoteBtn>
                  <RemoteBtn id="5" onClick={onMoveToElement5}>
                    5
                    <ReactTooltip
                      anchorId="5"
                      place="top"
                      content="내가 쓴 글"
                    />
                  </RemoteBtn>
                  <RemoteBtn id="6" onClick={onMoveToElement6}>
                    6<ReactTooltip anchorId="6" place="top" content="차트" />
                  </RemoteBtn>
                </div>
              </div>
            ) : (
              <></>
            )}
          </Bottom2Container>
        </Container>
        <Container ref={element2}>
          <H1Tag>내 정보</H1Tag>
          <InfoInsideDiv>ID: test1</InfoInsideDiv>
          <InfoInsideDiv>닉네임: test1</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
        </Container>
        <Container ref={element3}>
          <H1Tag>내가 갔던 여행</H1Tag>
          <ul>
            <PostLi>1번 여행</PostLi>
            <PostLi>2번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
          </ul>
        </Container>
      </Top3Container>
      <Top3Container>
        <Container ref={element4}>
          <H1Tag>비용 계산</H1Tag>
          <input type="text" value={"교통비"} />
          <input type="text" value={"식비"} />
          <input type="text" value={"숙소비"} />
          <input type="text" value={"기타"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
          <input type="text" value={"총비용"} />
        </Container>
        <Container ref={element5}>
          <H1Tag>내가 쓴 글</H1Tag>
          <ul>
            <PostLi>1번 게시글</PostLi>
            <PostLi>2번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
          </ul>
        </Container>
        {/* <div style={{ height: "20px" }}></div> */}
        <Container ref={element6}>
          <H1Tag>차트</H1Tag>
          <img src="/img/chart.png" style={{ width: "70%", height: "70%" }} />
        </Container>
      </Top3Container>
    </MainContainer>
  );
};

export default MyPage;

const MainContainer = styled.div`
  display: flex;
  width: 300%;
  height: 200%;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fafafa;
  overflow-y: hidden;
`;
const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid #eaccf8;
`;
const Top3Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin-top: 5px;
  align-items: center;
`;
const Bottom2Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  align-items: center;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  height: 300px;
  border: 1px solid darkgray;
  border-radius: 10px;
  /* background-color: blueviolet; */
`;
const RecordDiv = styled.div`
  width: 45%;
  height: 300px;
  border: 1px solid darkgray;
  border-radius: 10px;
`;
const CostDiv = styled.div`
  width: 30%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid darkgray;
  border-radius: 10px;
`;
const PostsDiv = styled.div`
  width: 30%;
  height: 300px;
  border: 1px solid darkgray;
  border-radius: 10px;
`;
const ChartDiv = styled.div`
  width: 30%;
  height: 300px;
  border: 1px solid darkgray;
  border-radius: 10px;
`;

const PostLi = styled.li`
  padding: 15px;
`;

const InfoInsideDiv = styled.div`
  width: 100%;
  text-align: left;
  padding: 10px;
`;

const H4Tag = styled.h4`
  width: 100%;
  text-align: left;
  padding: 15px;
`;

const H1Tag = styled.h1`
  width: 100%;
  text-align: left;
  padding: 20px;
`;

const RemoteBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-radius: 5px;
  font-weight: bold;
`;

const RemoteShowBtn = styled.button`
  width: 50px;
  height: 50px;
  position: fixed;
  right: 4.3rem;
  bottom: 50px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px 2px #0000ff33;
  background-color: #e8e4fe;
`;

const HomeBtn = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`;
