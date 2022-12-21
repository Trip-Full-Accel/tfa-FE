import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface aa {
  value: string;
  name: string;
}

const AreaName = () => {
  const areaName = [
    { value: "busan", name: "부산" },
    { value: "seoul", name: "서울" },
    { value: "daegu", name: "대구" },
    { value: "daejeon", name: "대전" },
    { value: "gangwondo", name: "강원도" },
    { value: "yeosu", name: "여수" },
    { value: "pohang", name: "포항" },
    { value: "busjejuan", name: "제주" },
  ];
  const [data, setData] = useState("");
  const Navigate = useNavigate();
  const MoveRegionalArea = (path: string) => {
    setData(path);
    Navigate(path);
  };
  return (
    <div style={{ display: "flex", flexDirection: "row", paddingTop: "30px" }}>
      {areaName.map((el: aa) => {
        return (
          <div
            onClick={() => MoveRegionalArea(`/photo/${el.value}`)}
            key={el.name}
            style={{ height: "100px", padding: "10px", cursor: "pointer" }}
          >
            <h3>{el.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default AreaName;
