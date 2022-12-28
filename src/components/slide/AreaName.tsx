import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface aa {
  value: string;
  name: string;
}

const AreaName = () => {
  const areaName = [
    { value: "busan", name: "부산" },
    { value: "daegu", name: "대구" },
    { value: "gyeongsangbukdo", name: "경상북도" },
    { value: "daejeon", name: "대전" },
    { value: "gyeonggido", name: "경기도" },
    { value: "seoul", name: "서울" },
    { value: "gangwondo", name: "강원도" },
    { value: "jeju", name: "제주" },
  ];
  const [data, setData] = useState("");
  const Navigate = useNavigate();
  const MoveRegionalArea = (path: string) => {
    setData(path);
    Navigate(path);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        paddingTop: "10px",
        width: "50%",
      }}
    >
      {areaName.map((el: aa) => {
        return (
          <div
            onClick={() => MoveRegionalArea(`/photo/${el.value}`)}
            key={el.name}
            style={{ height: "70px", padding: "5px", cursor: "pointer" }}
          >
            <h3>{el.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default AreaName;
