import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
export default class Slide extends Component {
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
      <MainSlideDiv>
        <div
          className="busan"
          style={{
            width: "100px",
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
      </MainSlideDiv>
    );
  }
}

const MainSlideDiv = styled.div`
  width: 1000px;
  height: 10000px;
  display: flex;
  flex-wrap: wrap;
`;
