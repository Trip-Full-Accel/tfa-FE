import { useSelector } from "react-redux";
import { RootState } from "store/store";
import styled from "styled-components";

const Footer = () => {
  const footerName = useSelector((state: RootState) => state.footerName.foot);

  return (
    <FooterDiv>
      <span>ENCORE PLAYDATA FINAL PROJECT</span>
      <section>Group no.1</section>
      {footerName.map((el, i) => {
        return <section key={i}>{el}</section>;
      })}
    </FooterDiv>
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
