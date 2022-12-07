import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Template = () => {
  return (
    <div style={{ height: "auto", minHeight: "100%", paddingBottom: "96px" }}>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};
export default Template;
