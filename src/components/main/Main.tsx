import { stringify } from "querystring";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../static/login.css";
import "../../static/main.css";
import "../../static/mainGoToMap.css";
import AutoPlay from "../slide/Slider";
import MainBtn from "./MainBtn";

interface dataType {
  name: string;
  x: string;
  y: string;
}
// interface autoplay {
//   autoPlay?: boolean | undefined | string;
// }

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

  return (
    <div style={{ backgroundColor: "#fafafa" }}>
      <div className="main">
        <div className="left-div" style={{ alignItems: "right" }}>
          <h1 style={{ fontFamily: "Caveat" }}>TFA</h1>
          <br />
          <h3 style={{ fontFamily: "Caveat" }}>
            Trip Full Accel에서 여행을 시작하세요
          </h3>
          <br />
          <button
            className="main-start-btn"
            onClick={() => {
              tripStart("/");
            }}
          >
            <span>Start</span>
          </button>
          <br />
        </div>
        {/* video */}
        <div className="video-div">
          <video
            controls
            muted
            className="main-video"
            src="./video/seoul_intro.mp4"
            autoPlay
            loop
          ></video>
        </div>{" "}
      </div>

      {/* 이미지 슬라이드 시작 */}
      <div style={{ display: "inline-flex", margin: "100px" }}>
        <div style={{ margin: "20px" }}>
          <div className="main-maps" style={{ fontFamily: "caveat" }}>
            {data.map((el: { name: string; x: string; y: string }) => {
              return (
                <MainBtn
                  key={el.name}
                  name={el.name}
                  x={el.x}
                  y={el.y}
                ></MainBtn>
              );
            })}
          </div>
          <AutoPlay></AutoPlay>
        </div>
      </div>
    </div>
  );
};
export default Main;
