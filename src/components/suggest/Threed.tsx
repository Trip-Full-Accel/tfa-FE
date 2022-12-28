import { ta } from "date-fns/locale";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const ThreedPhoto = () => {
  const threeName: any = [
    { value: "chuncheon", name: "춘천" },
    { value: "Damyang", name: "담양" },
    { value: "Gangneung", name: "강릉" },
    { value: "gyeongju", name: "경주" },
    { value: "gyeongju2", name: "경주2" },
    // ];
    // const threeName2: any = [
    { value: "gyeongju3", name: "경주3" },
    { value: "Jeju1", name: "제주1" },
    { value: "jeju2", name: "제주2" },
    { value: "oedo", name: "외도" },
    { value: "suwon", name: "수원" },
  ];
  const navigate = useNavigate();
  const MoveRegionalArea = (e: any) => {
    navigate("/three", {
      state: {
        threeName: e.innerText,
        threeName2: e.innerText,
      },
    });
  };
  const { t } = useTranslation();

  return (
    <div>
      <h3 style={{ textShadow: "0 0 5px  #7c74ab", padding: "30px" }}>
        {t("panoramatitle")}
      </h3>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", margin: "0", justifyContent: "center" }}>
          {threeName.map((el: any) => {
            return (
              <div
                onClick={(e: any) => MoveRegionalArea(e.target)}
                onChange={(e) => console.log(e)}
                key={el.value}
                style={{
                  height: "70px",
                  padding: "10px",
                  cursor: "pointer",
                  margin: "0",
                }}
              >
                <h3>{t(`${el.name}`)}</h3>
              </div>
            );
          })}
        </div>
        {/* <div style={{ display: "flex", margin: "0" }}>
          {threeName2.map((el: any) => {
            return (
              <div
                onClick={(e: any) => MoveRegionalArea(e.target)}
                onChange={(e) => console.log(e)}
                key={el.value}
                style={{ height: "70px", padding: "5px", cursor: "pointer" }}
              >
                <h3>{t(`${el.name}`)}</h3>
              </div>
            );
          })} */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ThreedPhoto;
