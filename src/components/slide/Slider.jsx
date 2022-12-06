import React, { Component } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
// import { useState, useNavigate } from "react";

export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 3000,
      autoplaySpeed: 3000,
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
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/busan/busan1.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan2.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan3.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan4.jpeg" />
            </div>
            <div>
              <img src="/img/busan/busan5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>Busan</h2>
        </div>
        {/* 대전 */}

        <div
          className="daejeon"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>Daejeon</h2>
        </div>
        {/* 서울 */}

        <div
          className="seoul"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/seoul/seoul1.jpg" />
            </div>
            <div>
              <img src="/img/seoul/seoul2.jpg" />
            </div>
            <div>
              <img src="/img/seoul/seoul3.jpg" />
            </div>
            <div>
              <img src="/img/seoul/seoul4.jpg" />
            </div>
            <div>
              <img src="/img/seoul/seoul5.jpg" />
            </div>
          </Slider>
          <br></br>
          <h2>Seoul</h2>
        </div>
        {/* 대구 */}

        <div
          className="daegu"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daegu/daegu1.jpg" />
            </div>
            <div>
              <img src="/img/daegu/daegu2.jpg" />
            </div>
            <div>
              <img src="/img/daegu/daegu3.jpg" />
            </div>
            <div>
              <img src="/img/daegu/daegu4.jpg" />
            </div>
            <div>
              <img src="/img/daegu/daegu5.jpg" />
            </div>
          </Slider>
          <br></br>
          <h2>Daegu</h2>
        </div>
        {/* 강릉 */}
        <div
          className="강릉"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>Gangneung</h2>
        </div>

        {/* 제주 */}
        <div
          className="제주"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>Jeju</h2>
        </div>

        {/* 전주 */}
        <div
          className="전주"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>Jeonju</h2>
        </div>
        {/* 광주 */}
        <div
          className="광주"
          style={{
            width: "45%",
          }}
        >
          <Slider {...settings}>
            <div>
              <img src="/img/daejeon/daejeon1.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon2.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon3.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon4.jpeg" />
            </div>
            <div>
              <img src="/img/daejeon/daejeon5.jpeg" />
            </div>
          </Slider>
          <br></br>
          <h2>gwangju</h2>
        </div>
      </div>
    );
  }
}
