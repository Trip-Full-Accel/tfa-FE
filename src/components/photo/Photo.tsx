import AreaName from "components/slide/AreaName";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import Slide from "../slide/Slide";
import JejuSlide from "./../slide/JejuSlide";
import GangwondoSlide from "./../slide/GangwondoSlide";
import SeoulSlide from "./../slide/SeoulSlide";
import GyeonggidoSlide from "./../slide/GyeonggidoSlide";
import DaejeonSlide from "./../slide/DaejeonSlide";
import GyeongsangbukdoSlide from "./../slide/GyeongsangbukdoSlide";
import DaeguSlide from "./../slide/DaeguSlide";
import BusanSlide from "./../slide/BusanSlide";

const Photo = () => {
  const [dtaa, setData] = useState("");
  console.log(dtaa);

  return (
    <div>
      <Snowfall color="white" snowflakeCount={200} />
      <AreaName dtaa={dtaa} setData={setData}></AreaName>
      <div>
        {dtaa === "" && <Slide></Slide>}
        {dtaa === "/suggest/busan" && <BusanSlide></BusanSlide>}
        {dtaa === "/suggest/daegu" && <DaeguSlide></DaeguSlide>}
        {dtaa === "/suggest/gyeongsangbukdo" && (
          <GyeongsangbukdoSlide></GyeongsangbukdoSlide>
        )}
        {dtaa === "/suggest/daejeon" && <DaejeonSlide></DaejeonSlide>}
        {dtaa === "/suggest/gyeonggido" && <GyeonggidoSlide></GyeonggidoSlide>}
        {dtaa === "/suggest/seoul" && <SeoulSlide></SeoulSlide>}
        {dtaa === "/suggest/gangwondo" && <GangwondoSlide></GangwondoSlide>}
        {dtaa === "/suggest/jeju" && <JejuSlide></JejuSlide>}
      </div>
    </div>
  );
};

export default Photo;
