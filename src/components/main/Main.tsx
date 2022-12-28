import Player from "components/music/music";
import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";
import { useState } from "react";
import { Modal } from "react-bootstrap";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { Button } from "reactstrap";
import { fetchPostCourse } from "store/map/mapReducer";
import { AppDispatch } from "store/store";
import styled from "styled-components";
import "../../static/all.css";
import "../../static/font/font.css";

interface dataType {
  name: string;
  x: string;
  y: string;
}
const Main = () => {
  const goChat = () => {
    navigate("/chatting");
  };
  const [show, setShow] = useState(false);

  const [selected, setSelected] = useState<string>("choice");
  const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };
  const navigate = useNavigate();
  // const reduxData = useSelector((state: RootState) => state.user.userId);
  // const local = localStorage.getItem("userId");

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

  const dispatch = useDispatch<AppDispatch>();
  const [text, setText] = useState("");
  const localUserId = localStorage.getItem("userId");
  const strBtn = () => {
    console.log(localStorage.getItem("kakaoId"));
    console.log(text);

    const kakaoId = localStorage.getItem("kakaoId");
    dispatch(
      fetchPostCourse({
        userId: Number(kakaoId),
        courseName: text,
      })
    );
    if (selected !== "choice" && text.length > 0) {
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
          cityCode: selected,
        },
      });
    } else {
      alert("지역 또는 제목을 입력해주세요");
    }
  };

  // three 실험

  const { t } = useTranslation();

  // const translate = () => {
  //   if (tr === false) {
  //   } else {
  //     setTr(false);
  //   }
  // };

  const testid = localStorage.getItem("userId");

  const [threeValue, setThreeValue] = useState<any>("");
  const valueHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setThreeValue(e.target.value);
  };

  return (
    <TopLvDiv>
      <Snowfall
        // Changes the snowflake color
        color="white"
        // Applied to the canvas element
        // style={{ background: "#fff" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
      <FirstDiv>
        <LeftDiv>
          <div style={{ margin: "9.7rem 0 4rem 0" }}>
            {/* <MainTitle>{local} </MainTitle> */}
            {/* <SubTitle>{t("title")}</SubTitle> */}
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
                  state.selection1.startDate
                    .toLocaleDateString()
                    .split(".")[1] +
                  `${t("month")}` +
                  state.selection1.startDate
                    .toLocaleDateString()
                    .split(".")[2] +
                  `${t("day")}`
                } ~ ${
                  state.selection1.endDate.toLocaleDateString().split(".")[1] +
                  `${t("month")}` +
                  state.selection1.endDate.toLocaleDateString().split(".")[2] +
                  `${t("day")}`
                }`}
              </CalendarBtn>
            </CalendarDiv>

            <ValueDiv>
              <SelectBox name="select" onChange={(e) => selectHandler(e)}>
                <DefaultOption value="choice">{t("choice")}</DefaultOption>
                <OptionBox value="11">{t("Seoul")}</OptionBox>
                <OptionBox value="41">{t("Gyeongi")}</OptionBox>
                <OptionBox value="42">{t("Gangwon")}</OptionBox>
                <OptionBox value="44">{t("Chungbuk")}</OptionBox>
                <OptionBox value="43">{t("Chungnam")}</OptionBox>
                <OptionBox value="45">{t("Jeonbuk")}</OptionBox>
                <OptionBox value="46">{t("Jeonnam")}</OptionBox>
                <OptionBox value="47">{t("Gyeongbuk")}</OptionBox>
                <OptionBox value="48">{t("Gyeongnam")}</OptionBox>
                <OptionBox value="50">{t("Jeju")}</OptionBox>
                <OptionBox value="36">{t("Sejong")}</OptionBox>
                <OptionBox value="29">{t("Gwangju")}</OptionBox>
                <OptionBox value="26">{t("Busan")}</OptionBox>
                <OptionBox value="31">{t("Ulsan")}</OptionBox>
                <OptionBox value="27">{t("Daegu")}</OptionBox>
                <OptionBox value="30">{t("Daejeon")}</OptionBox>
                <OptionBox value="28">{t("Incheon")}</OptionBox>
              </SelectBox>
              <TitleInput
                type="text"
                placeholder={`${t("startBtnPlaceHolder")}`}
                required
                onChange={(e) => {
                  setText(e.target.value);
                }}
              ></TitleInput>
            </ValueDiv>

            <StartBtn onClick={strBtn}>
              <span>Start</span>
            </StartBtn>
          </div>
          <Player></Player>
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
      <Button onClick={goChat}>asdf</Button>

      {/* <h2>{t("testText")}</h2> */}

      {/* <i className="xi-translate xi-4x" onClick={onChangeLang}></i> */}
      {/* <Player></Player> */}
      {/* <Button onClick={goThree}>3d 화면 실험</Button> */}
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

const ValueDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
`;

const TitleInput = styled.input`
  font-size: 1.2rem;
  background-color: #ccccff;
  width: 230px;
  height: 50px;
  border: none;
  border-radius: 0 10px 10px 0;
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
const SelectBox = styled.select`
  width: 70px;
  height: 50px;
  display: inline-block;
  border-radius: 10px 0 0 10px;
  border: 1px solid #ced4da;
  background-color: #ccccff;
  cursor: pointer;
`;

const OptionBox = styled.option`
  border-radius: 0.375rem;
  border: 1px solid #ced4da;
`;

const DefaultOption = styled.option`
  display: none;
`;
