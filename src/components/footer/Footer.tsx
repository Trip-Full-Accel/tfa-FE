import { useSelector } from "react-redux";
import { RootState } from "store/store";
import "../../static/footer.css";

const Footer = () => {
  const footerName = useSelector((state: RootState) => state.footerName.foot);

  return (
    <div className="footer-div">
      <span>ENCORE PLAYDATA FINAL PROJECT</span>
      <section>Group no.1</section>
      {footerName.map((el, i) => {
        return <section key={i}>{el}</section>;
      })}
    </div>
  );
};
export default Footer;
