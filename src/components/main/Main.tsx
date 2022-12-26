import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "../../static/all.css";

interface dataType {
  name: string;
  x: string;
  y: string;
}
const Main = () => {
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  // const reduxData = useSelector((state: RootState) => state.user.userId);
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
  const [title, setTitle] = useState<string>("");
  console.log(title);
  const goMaps = (path: string) => {
    if (title.length > 0) {
      navigate(path);
    } else {
      alert("제목입력해라");
    }
  };
  const test = () => {
    navigate("/edit");
  };
  const date = new Date();
  const [state, setState] = useState<any>({
    selection1: {
      startDate: new Date(),
      endDate: addDays(new Date(), 1),
      key: "selection1",
    },
  });
  console.log(state);

  const [text, setText] = useState("");

  const strBtn = () => {
    if (text.length > 0) {
      navigate("/maps", {
        state: {
          date: `${
            state.selection1.startDate.toLocaleDateString().split(".")[1] +
            "월" +
            state.selection1.startDate.toLocaleDateString().split(".")[2] +
            "일"
          } ~ ${
            state.selection1.endDate.toLocaleDateString().split(".")[1] +
            "월" +
            state.selection1.endDate.toLocaleDateString().split(".")[2] +
            "일"
          }`,
          title: text,
        },
      });
    } else {
      alert("제목.");
    }
  };

  return (
    <TopLvDiv>
      <FirstDiv>
        <LeftDiv>
          {/* <MainTitle>{local} </MainTitle> */}
          <SubTitle>Trip Full Accel 에서 여행을 시작하세요</SubTitle>
          <CalendarDiv>
            <IconSpan>
              <img src="/img/calendar.png"></img>
            </IconSpan>
            <CalendarBtn
              onClick={() => {
                setShow(true);
              }}
            >
              {`${
                state.selection1.startDate.toLocaleDateString().split(".")[1] +
                "월" +
                state.selection1.startDate.toLocaleDateString().split(".")[2] +
                "일"
              } ~ ${
                state.selection1.endDate.toLocaleDateString().split(".")[1] +
                "월" +
                state.selection1.endDate.toLocaleDateString().split(".")[2] +
                "일"
              }`}
            </CalendarBtn>
          </CalendarDiv>

          <TitleInput
            type="text"
            placeholder="여행 제목을 입력해주세요"
            required
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></TitleInput>

          <StartBtn onClick={strBtn}>
            <span>Start</span>
          </StartBtn>
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
            onChange={(item) => setState({ ...state, ...item })}
            moveRangeOnFirstSelection={false}
            locale={ko}
            dateDisplayFormat="yyyy-MM-dd (eee)"
            months={2}
            ranges={[state.selection1]}
            showPreview={false}
            minDate={date}
            showDateDisplay={false}
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

const MainTitle = styled.h1``;
const SubTitle = styled.h3`
  padding: 1rem;
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

const CalendarDiv = styled.div`
  width: 300px;
  height: 50px;
  background-color: #ccccff;
  border-radius: 10px;
  text-align: center;
  display: flex;
`;

const TitleInput = styled.input`
  font-size: 1.2rem;
  background-color: #ccccff;
  width: 300px;
  height: 50px;
  border: none;
  margin: 1rem 0 2rem 0;
  border-radius: 10px;
`;

const IconSpan = styled.span`
  width: 25%;
  text-align: center;
  place-self: center;
  margin: 0 0 0 10px;
`;

const CalendarBtn = styled.button`
  float: left;
  background-color: transparent;
  border: none;
`;
