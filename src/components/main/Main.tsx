import { addDays } from "date-fns";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { DateRange, DateRangePicker } from "react-date-range";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "store/store";
import styled from "styled-components";
import "../../static/all.css";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

import { ko } from "date-fns/esm/locale";
interface dataType {
  name: string;
  x: string;
  y: string;
}
const Main = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const reduxData = useSelector((state: RootState) => state.user.userId);
  console.log(reduxData);
  const local = localStorage.getItem("userId");

  const [coordinate, setCoordinate] = useState({ x: "", y: "" });
  const data: dataType[] = [
    { name: "Busan", x: "35.1795543", y: "129.0756416" },
    { name: "Daejeon", x: "36.3504119", y: "127.3845475" },
    { name: "Seoul", x: "37.5666805", y: "126.9784147" },
    { name: "Daegu", x: "35.8714354", y: "128.601445" },
    { name: "Gangneung", x: "37.751853", y: "128.8760574" },
    { name: "jeju", x: "33.4996213", y: "126.5311884" },
    { name: "Jeonju", x: "35.8242238", y: "127.1479532" },
    { name: "gwangju", x: "35.1595454", y: "126.8526012" },
  ];
  data.filter((el: { name: string; x: string; y: string }) => {
    if (el.name === "Daejeon") {
    } else if (el.name === "Busan") {
    }
  });
  const tripStart = (path: string) => {
    navigate(path);
    //, { state: { x: x, y: y } }
  };
  const linkTo = (path: string) => {
    navigate(path);
  };

  const date = new Date();
  const [state, setState] = useState<any>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection",
      Boolean,
    },
  ]);

  return (
    <TopLvDiv>
      <FirstDiv>
        <LeftDiv>
          <MainTitle>TFA {local}</MainTitle>
          <SubTitle>Trip Full Accel 에서 여행을 시작하세요</SubTitle>
          <div
            style={{
              width: "500px",
              height: "50px",
              backgroundColor: "darkgrey",
            }}
          >
            <button
              style={{
                backgroundColor: "blue",
                float: "left",
                marginTop: "1rem",
                border: "none",
              }}
              onClick={() => {
                setShow(true);
              }}
            >
              날짜
            </button>
          </div>

          <input
            placeholder="여행 제목을 입력해주세요"
            style={{
              fontSize: "50x",
              backgroundColor: "darkgrey",
              width: "500px",
              height: "50px",
              border: "none",
              margin: "1rem 0 1rem 0",
            }}
          ></input>

          <StartBtn onClick={() => linkTo("/maps")}>
            <span>Start</span>
          </StartBtn>
          <br />
        </LeftDiv>
        {/* video */}
        <VideoDiv>
          <Video muted src="./video/seoul_intro.mp4" autoPlay loop></Video>
        </VideoDiv>
      </FirstDiv>
      {/* <Polygon></Polygon> */}
      {/* 폴리곤 끝 */}

      <div>
        <Modal
          className="loginM"
          size="lg"
          show={show}
          onHide={() => setShow(false)}
          aria-labelledby="example-modal-sizes-title-lg"
          style={{ borderRadius: "5%" }}
        >
          <DateRangePicker
            editableDateInputs={true}
            onChange={(item) => setState([item.selection])}
            moveRangeOnFirstSelection={false}
            ranges={state}
            locale={ko}
            dateDisplayFormat="yyyy-MM-dd (eee)"
            months={2}
            minDate={date}
            direction="horizontal"
          />
        </Modal>
      </div>
    </TopLvDiv>
  );
};
export default Main;
const TopLvDiv = styled.div`
  background-color: #fafafa;
`;
const LeftDiv = styled.div`
  align-items: right;
  width: 40%;
  text-align: center;
  font-family: "Nanum Pen Script", cursive;
  align-self: center;
`;
const VideoDiv = styled.div`
  width: 60%;
`;
const BtnDiv = styled.div`
  font-family: caveat;
  margin: 20px;
`;
const FirstDiv = styled.div`
  display: flex;
  margin: 0 !important;
`;

const MainTitle = styled.h1`
  font-family: Caveat;
`;
const SubTitle = styled.h3`
  font-family: Caveat;
`;
const StartBtn = styled.button`
  border: none;
  display: block;
  text-align: center;
  cursor: pointer;
  text-transform: uppercase;
  outline: none;
  overflow: hidden;
  position: relative;
  color: #fff;
  font-weight: 700;
  font-size: 15px;
  background-color: black;
  padding: 17px 60px;
  margin: 0 auto;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    height: 490%;
    width: 140%;
    background-image: linear-gradient(
      -225deg,
      #69eacb 0%,
      #eaccf8 48%,
      #6654f1 100%
    );
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
    -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
    transform: translateX(-98%) translateY(-25%) rotate(45deg);
  }
  &:hover::after {
    -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
    transform: translateX(-9%) translateY(-25%) rotate(45deg);
  }
  span {
    position: relative;
    z-index: 1;
  }
`;
const Video = styled.video`
  width: 100%;
  float: right;
  &video::-webkit-media-controls-enclosure {
    display: none;
  }
`;
const SecondDiv = styled.div`
  display: inline-flex;
  margin-top: 150px;
`;
