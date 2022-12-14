import { Outlet, useLocation } from "react-router-dom";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import "../static/template.css";
import "static/font/font.css";
import { useState } from "react";

const Template = () => {
  const location = useLocation();
  const loc = location.pathname;
  const locFunction = () => {
    if (loc == "/" || loc == "/mypage") {
      return "top_no_padding";
    } else {
      return "top_padding";
    }
  };

  return (
    <div
      style={{
        height: "auto",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {loc === "/mypage" ? <></> : <Header></Header>}

      <div
        style={{ flex: 1, width: "100%", backgroundColor: "#fafafa" }}
        className={locFunction()}
      >
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Template;
