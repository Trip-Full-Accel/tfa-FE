import AreaName from "components/slide/AreaName";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import Slide from "../slide/Slide";

const Photo = () => {
  return (
    <div>
      <Snowfall color="white" snowflakeCount={200} />
      <h1>전국 명소</h1>
      <AreaName></AreaName>
      <div>
        <Slide></Slide>
      </div>
    </div>
  );
};

export default Photo;
