import { el } from "date-fns/locale";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./AreaName.css";

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
  const loc = useLocation();
  console.log(loc);

  const Tab = (el: aa) => {
    if ("/photo/" + el.value === loc.pathname) {
      return "clickTab";
    } else {
      return "defaultTab";
    }
  };
  console.log("/photo/" + areaName[1].value);

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
            style={{
              height: "70px",
              padding: "5px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              marginBottom: "2rem",
            }}
            className={Tab(el)}
          >
            <h3>{el.name}</h3>
          </div>
        );
      })}
    </div>
  );
};
export default AreaName;
