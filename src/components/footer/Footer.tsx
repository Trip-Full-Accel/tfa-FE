import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const footerName = useSelector((state: RootState) => state.footerName.foot);
  const location = useLocation();
  const loc = location.pathname;
  console.log(loc);
  const { t } = useTranslation();

  return (
    <>
      {loc === "/mypage" ? (
        <></>
      ) : (
        <FooterDiv>
          <span>{t("footerMain")}</span>
          <section>{t("footerGroup")}</section>
          <section>{t("geonho")}</section>
          <section>{t("sungmin")}</section>
          <section>{t("hyemin")}</section>
          <section>{t("gwangdeok")}</section>
          <section>{t("cheolryeon")}</section>
          <section>{t("sungho")}</section>
        </FooterDiv>
      )}
    </>
  );
};
export default Footer;

const FooterDiv = styled.div`
  font-weight: bold;
  justify-content: space-evenly;
  display: flex;
  padding-top: 3em;
  padding-bottom: 3em;
  bottom: 0;
  width: 100%;
  font-size: 0.8rem;
  background-color: #fafafa;
  height: 96px;
  position: relative;
  box-shadow: 0 0 5px 5px rgba(232, 228, 254, 0.5);
`;
