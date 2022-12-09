import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../static/login.css";
import "../../static/main.css";
import "../../static/mainGoToMap.css";
import MainBtn from "./MainBtn";

interface dataType {
  name: string;
  x: string;
  y: string;
}

const Main = () => {
  const navigate = useNavigate();
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

  const scrollToMap = () => {
    window.scroll({
      top: 650,
      left: 650,
      behavior: "smooth",
    });
  };

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="main">
        <div className="left-div" style={{ alignItems: "right", width: "40%" }}>
          <h1 style={{ fontFamily: "Caveat" }}>TFA</h1>
          <br />
          <h3 style={{ fontFamily: "Caveat" }}>
            Trip Full Accel 에서 여행을 시작하세요
          </h3>
          <br />
          <button className="main-start-btn" onClick={scrollToMap}>
            <span>Start</span>
          </button>
          <br />
        </div>
        {/* video */}
        <div className="video-div" style={{}}>
          <video
            controls
            muted
            className="main-video"
            src="./video/seoul_intro.mp4"
            autoPlay
            loop
            style={{ border: "-10px " }}
          ></video>
        </div>
      </div>
      {/* <Polygon></Polygon> */}
      {/* 폴리곤 끝 */}
      <div style={{ display: "inline-flex", marginTop: "150px" }}>
        <div
          className="main-maps"
          style={{ fontFamily: "caveat", margin: "20px" }}
        >
          {data.map((el: { name: string; x: string; y: string }) => {
            return (
              <MainBtn key={el.name} name={el.name} x={el.x} y={el.y}></MainBtn>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Main;
