import { useSelector } from "react-redux";
import "../../static/footer.css";

const Footer = () => {
  const footerName = useSelector((state) => state.footerName.value);

  return (
    <div className="footer-div">
      <section>ENCORE PLAYDATA FINAL PROJECT</section>
      <section>Group no.1</section>
      {footerName.map((el) => {
        return <section key={el}>{el}</section>;
      })}
    </div>
  );
};
export default Footer;
