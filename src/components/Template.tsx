import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";

const Template = () => {
  return (
    <div
      style={{
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        // width: "max-content",
      }}
    >
      <Header></Header>
      <div style={{ flex: 1, width: "100%", paddingTop: "56px" }}>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Template;
