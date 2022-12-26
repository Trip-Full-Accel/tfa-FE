import { useState } from "react";
import i18n from "language/i18n";
import styled from "styled-components";
const Translate = () => {
  const [tr, setTr] = useState(false);
  const onChangeLang = () => {
    if (i18n.language === "ko") {
      i18n.changeLanguage("en");
      setTr(true);
    } else {
      i18n.changeLanguage("ko");
      setTr(false);
    }
  };
  return (
    <TrDiv>
      {tr === false ? (
        <img
          style={{
            width: "30px",
            height: "30px",
            border: "none",
            cursor: "pointer",
          }}
          src="/img/translate/KO.png"
          onClick={onChangeLang}
        />
      ) : (
        <img
          style={{
            width: "30px",
            height: "30px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={onChangeLang}
          src="/img/translate/EN.PNG"
        />
      )}
    </TrDiv>
  );
};
export default Translate;
const TrDiv = styled.div`
  display: flex;
  align-items: center;
`;
