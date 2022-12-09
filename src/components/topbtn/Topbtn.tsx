import React, { useEffect, useState } from "react";
import "../../static/topbtn.css";
function Topbtn() {
  const [showButton, setShowButton] = useState(false);

  const scrollToTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    const handleShowButton = () => {
      if (window.scrollY > 10) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleShowButton);
    return () => {
      window.removeEventListener("scroll", handleShowButton);
    };
  }, []);

  return showButton ? (
    <div className="topbtn-div">
      <button className="topbtn" id="top" onClick={scrollToTop} type="button">
        {" "}
        <img className="topbtn-img" src="/img/topbtn.png"></img>
      </button>
    </div>
  ) : (
    <></>
  );
}
export default Topbtn;
