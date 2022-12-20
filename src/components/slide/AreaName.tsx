import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AreaName = () => {
  const areaName = [
    { name: "busan" },
    { name: "seoul" },
    { name: "daegu" },
    { name: "daejeon" },
    { name: "gangwondo" },
    { name: "yeosu" },
    { name: "pohang" },
    { name: "jeju" },
  ];
  const [data, setData] = useState("");
  const Navigate = useNavigate();
  const MoveRegionalArea = (path: string) => {
    setData(path);
    console.log(data);
    Navigate(path);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", paddingTop: "30px" }}>
      {areaName.map((el: { name: string }) => {
        return (
          <div
            onClick={() => MoveRegionalArea(`/photo/${el.name}`)}
            key={el.name}
            style={{ height: "100px", padding: "10px" }}
          >
            <h3>{el.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default AreaName;
