import React, { Component } from "react";
import Slider from "react-slick";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 5000,
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
              <img src="/img/busan/busan1.jpeg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/seoul/seoul1.jpg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/daegu/daegu1.jpg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/busan/busan2.jpeg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/seoul/seoul2.jpg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/daegu/daegu2.jpg" style={{ width: "100%" }} />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" style={{ width: "100%" }} />
            </div>
          </Slider>
          <br></br>
        </div>
      </div>
    );
  }
}
