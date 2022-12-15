import styled from "styled-components";

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

  return (
    <MainContainer>
      <Top3Container>
        <Container>
          <Top3Container>
            <InfoDiv>
              <h2>user info</h2>
              <input type="text" value={"userid"} />
              <input type="text" value={"usernick"} />
              <input type="text" value={"가입날짜"} />
            </InfoDiv>
            <RecordDiv>
              <h2>여행기록탭</h2>
              <img src="/img/seoul5.jpg" alt="" />
            </RecordDiv>
            <CostDiv>
              <h2>여행 비용</h2>

              <input type="text" value={"교통비"} />
              <input type="text" value={"식비"} />
              <input type="text" value={"숙소비"} />
              <input type="text" value={"기타"} />
              <input type="text" value={"총비용"} />
            </CostDiv>
          </Top3Container>
          <Bottom2Container>
            <PostsDiv>
              게시글기록탭
              <ul>
                <li>1번 게시글</li>
                <li>2번 게시글</li>
                <li>3번 게시글</li>
                <li>4번 게시글</li>
              </ul>
            </PostsDiv>
            <ChartDiv>
              <h1>차트</h1>
              <img
                src="/img/seoul/seoul1.jpg"
                style={{ width: "100px", height: "100px" }}
              />
            </ChartDiv>
          </Bottom2Container>
        </Container>
        <Container></Container>
        <Container></Container>
      </Top3Container>
      <Top3Container>
        <Container></Container>
        <Container></Container>
        <Container></Container>
      </Top3Container>
    </MainContainer>
  );
};

export default MyPage;

const MainContainer = styled.div`
  display: flex;
  width: 4500px;
  height: 1800px;
  /* height: 100%; */
  /* margin: ; */
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: #fafafa;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 1400px;
  height: 700px;
  border: 1px solid black;
`;
const Top3Container = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
`;
const Bottom2Container = styled.div`
  display: flex;
  width: 100%;
  height: 45%;
`;

const InfoDiv = styled.div`
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 300px;
`;
const RecordDiv = styled.div`
  border: 1px solid blue;
  width: 30%;
  height: 300px;
`;
const CostDiv = styled.div`
  width: 30%;
  height: 300px;
  display: flex;
  flex-direction: column;
  border: 1px solid blue;
`;
const PostsDiv = styled.div`
  width: 45%;
  height: 300px;
  border: 1px solid blue;
`;
const ChartDiv = styled.div`
  width: 45%;
  height: 300px;
  border: 1px solid blue;
`;
