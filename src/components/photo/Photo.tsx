import AreaName from "components/slide/AreaName";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Slide from "../slide/Slide";

const Photo = () => {
  return (
    <div>
      <AreaName></AreaName>
      <div>
        <Slide></Slide>
      </div>
    </div>
  );
};

export default Photo;
