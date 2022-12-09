import React, { Component } from "react";
import Slider from "react-slick";
import "./silder.css";
export default class LoginSilder extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      speed: 700,
      cssEase: "linear",
    };

    return (
      <div
        className="silder-wrap"
        style={{
          width: "1000px",
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {/* 부산 */}

        <div
          className="busan"
          style={{
            width: "1000px",
          }}
        >
          <Slider {...settings}>
            <div style={{ width: "1000px" }}>
              <img src="/img/login.webp" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/login2.png" style={{ width: "100%" }} />
            </div>
          </Slider>
          <br></br>
        </div>
      </div>
    );
  }
}
