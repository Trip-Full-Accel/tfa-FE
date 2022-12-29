import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styled from "styled-components";
import UseMoveScroll from "./useMoveScroll";
import "./MyPage.css";
import Snowfall from "react-snowfall";
import { Tooltip as ReactTooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { fetchDeleteUser } from "store/user/userReducer";
import { AppDispatch } from "store/store";
import {
  fetchMyBoard,
  fetchMyCost,
  fetchMyInfo,
  fetchMyTrip,
} from "store/mypage/myReducer";

interface myPageType {
  pageKey: string;
  pageKorName: string;
}
const MyPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const kakaoId = localStorage.getItem("kakaoId");

  const [myInfo, setMyInfo] = useState<any>();
  const [boardErr, setBoardErr] = useState<string>("");
  const [myBoard, setMyBoard] = useState<any>([]);
  const [tripErr, setTripErr] = useState<string>("");
  const [myTrip, setMyTrip] = useState<any>([]);
  const [costErr, setCostErr] = useState<string>("");
  const [myCost, setMyCost] = useState<any>([]);
  useEffect(() => {
    dispatch(
      fetchMyInfo({
        userId: Number(kakaoId),
      })
    ).then((res) => setMyInfo(res.payload));
    dispatch(
      fetchMyBoard({
        userId: Number(kakaoId),
      })
    ).then((res: any) =>
      res.payload === undefined
        ? setBoardErr(
            "작성하신글이 아직없습니다! 게시판에가서 글을 작성해주세요"
          )
        : setMyBoard(res.payload)
    );
    dispatch(
      fetchMyTrip({
        userId: Number(kakaoId),
      })
    ).then((res) =>
      // console.log(res.payload)

      res.payload === undefined
        ? setTripErr("확정지은 여행경로가 없습니다.")
        : setMyTrip(res.payload)
    );
    dispatch(
      fetchMyCost({
        userId: Number(kakaoId),
      })
    ).then((res) =>
      // console.log(res.payload)

      res.payload === undefined
        ? setCostErr("등록한 코스트가 없습니다.")
        : setMyCost(res.payload)
    );
  }, []);
  // console.log("내 게시글", myBoard?.postDetailResponseList);
  console.log("내 경로", myTrip?.foundCoursesByUserId);

  const myPageList: myPageType[] = [
    { pageKey: "userInfo", pageKorName: "회원정보수정" },
    { pageKey: "travelRoute", pageKorName: "내 여행 플랜" },
    { pageKey: "travelCost", pageKorName: "여행 경비계산" },
  ];

  // const myInfo = useSelector((state: RootState) => state.my.myInfo);
  // console.log(myInfo.userId);
  // console.log(myInfo.nickname)
  // console.log(myInfo.userId)
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

  const [checkConfirm, setCheckConfirm] = useState(false);

  const deleteUser = () => {
    if (window.confirm("정말 탈퇴하시겠습니까?")) {
      setCheckConfirm(true);
      dispatch(fetchDeleteUser(Number(kakaoId)));
    } else {
      alert("다행이에요 계속 이용해주세요");
    }
  };
  const cousrName = localStorage.getItem("courseName");

  const [food, setFood] = useState();
  const [home, setHome] = useState();
  const [etc, setEtc] = useState();
  const [trans, setTrans] = useState();
  const [total, setTotal] = useState<any>();
  const allTotal = () => {
    setTotal(Number(food) + Number(home) + Number(etc) + Number(trans));
  };

  return (
    <body className="myBody">
      <MainContainer>
        <Snowfall color="white" snowflakeCount={200} />
        <Top3Container>
          <Container ref={element1}>
            <Top3Container>
              <InfoDiv>
                <H4Tag>내 정보</H4Tag>
                <InfoInsideDiv>
                  아이디 : 카카오 로그인은 아이디가 없어요!{" "}
                </InfoInsideDiv>
                <InfoInsideDiv>닉네임: {myInfo?.nickname}</InfoInsideDiv>
                {myInfo?.email === undefined ? (
                  <InfoInsideDiv>
                    {" "}
                    이메일이 아직 등록되지 않았어요!
                  </InfoInsideDiv>
                ) : (
                  <InfoInsideDiv>{myInfo?.email}</InfoInsideDiv>
                )}
              </InfoDiv>
              <RecordDiv>
                <H4Tag>내가 갔던 최근 여행</H4Tag>
                여행이름: {cousrName}
                {tripErr.length > 0 ? (
                  <ul>
                    <PostLi>아직 확정지은 경로가 없습니다.</PostLi>
                  </ul>
                ) : (
                  myTrip?.foundCoursesByUserId?.map((el: any, i: number) => {
                    return (
                      <div>
                        {" "}
                        {i + 1}번째 여행이름 {el.courseName}
                      </div>
                    );
                  })
                )}
              </RecordDiv>
            </Top3Container>
            <Bottom2Container>
              <CostDiv>
                <H4Tag>비용 계산</H4Tag>
                {costErr.length > 0 ? (
                  <div>등록하신 비용이 없습니다.</div>
                ) : (
                  <div>등록되면 보이는 프리뷰</div>
                )}
              </CostDiv>
              <PostsDiv>
                <H4Tag>내가 쓴 글</H4Tag>
                {boardErr.length > 0 ? (
                  <ul>
                    <PostLi>
                      작성하신글이 아직없습니다! 게시판에가서 글을 작성해보세요!
                    </PostLi>
                  </ul>
                ) : (
                  // 받으면 맵

                  myBoard?.postDetailResponseList?.map((el: any) => {
                    return (
                      <ul>
                        <PostLi>
                          제목 : {el.title}
                          <br></br>
                          내용 :{" "}
                          <span
                            dangerouslySetInnerHTML={{ __html: el.content }}
                          />
                        </PostLi>
                      </ul>
                    );
                  })
                )}
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
                      2
                      <ReactTooltip
                        anchorId="2"
                        place="top"
                        content="내 정보"
                      />
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

            <Button onClick={deleteUser}>
              탈퇴 실험 푸터로 이동해야함 컨펌넣어서 수정함
            </Button>
          </Container>
          <Container ref={element3}>
            <H1Tag>내가 갔던 여행</H1Tag>
            {myTrip?.foundCoursesByUserId?.map((el: any) =>
              el?.placesFromCourseList?.map((data: any, i: number) => {
                return (
                  <div>
                    {" "}
                    {i + 1}번째 여행지 {data.placeName}
                    <hr></hr>
                  </div>
                );
              })
            )}
          </Container>
        </Top3Container>
        <Top3Container>
          <Container ref={element4}>
            <H1Tag>비용 계산</H1Tag>
            <GrandDiv>
              <InDiv>
                <LeftDiv>숙박비</LeftDiv>
                <RightInput
                  type="text"
                  required
                  onChange={(e: any) => setHome(e.target.value)}
                ></RightInput>
              </InDiv>
              <InDiv>
                <LeftDiv>교통비</LeftDiv>
                <RightInput
                  type="text"
                  required
                  onChange={(e: any) => setTrans(e.target.value)}
                ></RightInput>
              </InDiv>
              <InDiv>
                <LeftDiv>식비</LeftDiv>
                <RightInput
                  type="text"
                  required
                  onChange={(e: any) => setFood(e.target.value)}
                ></RightInput>
              </InDiv>
              <InDiv>
                <LeftDiv>기타</LeftDiv>
                <RightInput
                  type="text"
                  required
                  onChange={(e: any) => setEtc(e.target.value)}
                ></RightInput>
              </InDiv>
              <InDiv>
                <LeftDiv>총 비용</LeftDiv>
                <RightInput
                  type="text"
                  readOnly
                  value={total}
                  // onChange={(e: any) => setTotal(e.target.value)}
                ></RightInput>
              </InDiv>
              <Button style={{ marginTop: "1rem" }} onClick={allTotal}>
                계산
              </Button>
            </GrandDiv>
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
    </body>
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
  height: 100vh;
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
  text-align: start;
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
const InDiv = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  margin-top: 30px;
  position: relative;
`;
const LeftDiv = styled.div`
  width: 35%;
  text-align: left;
  font-weight: bold;
  letter-spacing: -1px;
`;
const RightInput = styled.input`
  border: none;
  text-align: left;
  height: 50px;
  width: 100%;
  outline: none;
  background: #fafafa;
  border-bottom: 1px solid #000000;
  :focus {
    border-bottom: 3px solid #7c74ab;
  }
`;
const GrandDiv = styled.div`
  font-size: 1.5rem;
  width: 400px;
  height: 500px;
  padding: 1rem;
  border: 2px solid #eaccf8;
  margin: auto !important;
  border-radius: 20px;
`;
