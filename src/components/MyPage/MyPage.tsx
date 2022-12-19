import { useRef } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styled from "styled-components";
import UseMoveScroll from "./useMoveScroll";
import "./MyPage.css";

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

  return (
    <MainContainer>
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
            <CostDiv>
              <H4Tag>비용 계산</H4Tag>
              <input type="text" value={"교통비"} />
              <input type="text" value={"식비"} />
              <input type="text" value={"숙소비"} />
              <input type="text" value={"기타"} />
              <input type="text" value={"총비용"} />
            </CostDiv>
          </Top3Container>
          <Bottom2Container>
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
            <div style={{ position: "fixed", right: "3rem", bottom: "100px" }}>
              <div>
                <RemoteBtn onClick={onMoveToElement}>1</RemoteBtn>
                <RemoteBtn onClick={onMoveToElement2}>2</RemoteBtn>
                <RemoteBtn onClick={onMoveToElement3}>3</RemoteBtn>
              </div>
              <div>
                <RemoteBtn onClick={onMoveToElement4}>4</RemoteBtn>
                <RemoteBtn onClick={onMoveToElement5}>5</RemoteBtn>
                <RemoteBtn onClick={onMoveToElement6}>6</RemoteBtn>
              </div>
            </div>
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
  overflow: hidden !important;
  display: flex;
  width: 300%;
  height: 200%;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #fafafa;
`;
const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border: 2px solid #eaccf8;
  padding-top: 80px;
`;
const Top3Container = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  margin-top: 5px;
`;
const Bottom2Container = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
  margin-top: 30px;
`;

const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
  border: 1px solid darkgray;
  border-radius: 10px;
  /* background-color: blueviolet; */
`;
const RecordDiv = styled.div`
  width: 30%;
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
  width: 45%;
  height: 300px;
  border: 1px solid darkgray;
  border-radius: 10px;
`;
const ChartDiv = styled.div`
  width: 45%;
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
