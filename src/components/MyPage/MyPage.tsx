import { useRef } from "react";
import styled from "styled-components";
import UseMoveScroll from "./useMoveScroll";

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

  const { element, onMoveToElement } = UseMoveScroll();

  return (
    <MainContainer>
      <Top3Container>
        <Container>
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
              <H4Tag>비용 계싼</H4Tag>
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
            <button style={{ height: "20px" }} onClick={onMoveToElement}>
              remote
            </button>
          </Bottom2Container>
        </Container>
        <Container>
          <H1Tag>내 정보</H1Tag>
          <InfoInsideDiv>ID: test1</InfoInsideDiv>
          <InfoInsideDiv>닉네임: test1</InfoInsideDiv>
          <InfoInsideDiv>이메일: test@naver.com</InfoInsideDiv>
        </Container>
        <Container ref={element}>
          <H1Tag>내가 갔던 여행</H1Tag>
          <ul>
            <PostLi>1번 여행</PostLi>
            <PostLi>2번 여행</PostLi>
            <PostLi>3번 여행</PostLi>
          </ul>
        </Container>
      </Top3Container>
      <Top3Container>
        <Container>
          <H1Tag>비용 계싼</H1Tag>
          <input type="text" value={"교통비"} />
          <input type="text" value={"식비"} />
          <input type="text" value={"숙소비"} />
          <input type="text" value={"기타"} />
          <input type="text" value={"총비용"} />
        </Container>
        <Container>
          <H1Tag>내가 쓴 글</H1Tag>
          <ul>
            <PostLi>1번 게시글</PostLi>
            <PostLi>2번 게시글</PostLi>
            <PostLi>3번 게시글</PostLi>
          </ul>
        </Container>
        <Container>
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
  /* justify-content: space-around; */
  background-color: #fafafa;
`;
const Container = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 1400px;
  height: 620px;
  border: 2px solid #eaccf8;
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
  padding: 15px;
`;
