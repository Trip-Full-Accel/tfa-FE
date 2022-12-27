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
        <ImgTag onClick={onChangeLang} src="/img/translate/KO.png" />
      ) : (
        <ImgTag onClick={onChangeLang} src="/img/translate/EN.png" />
      )}
    </TrDiv>
  );
};
export default Translate;

const TrDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 40px;
`;

const ImgTag = styled.img`
  width: 50px;
  height: 50px;
  border: none;
  cursor: pointer;
`;
