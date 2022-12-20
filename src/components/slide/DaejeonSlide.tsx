import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class DaejeonSlide extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 700,
      cssEase: "linear",
    };

    return (
      <div>
        <AreaName></AreaName>
        <div>
          <MainSlideDiv>
            <div
              className="busan"
              style={{
                width: "80%",
              }}
            >
              <Slider {...settings}>
                <div style={{ width: "1000" }}>
                  <img src="/img/busan/busan1.jpeg" style={{ width: "100%" }} />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/seoul/seoul1.jpg" style={{ width: "100%" }} />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/daegu/daegu1.jpg" style={{ width: "100%" }} />
                  <h3>대전</h3>
                </div>
                <div>
                  <img
                    src="/img/daejeon/daejeon1.jpeg"
                    style={{ width: "100%" }}
                  />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/busan/busan2.jpeg" style={{ width: "100%" }} />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/seoul/seoul2.jpg" style={{ width: "100%" }} />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/daegu/daegu2.jpg" style={{ width: "100%" }} />
                  <h3>대전</h3>
                </div>
                <div>
                  <img
                    src="/img/daejeon/daejeon2.jpeg"
                    style={{ width: "100%" }}
                  />
                  <h3>대전</h3>
                </div>
              </Slider>
              <br></br>
            </div>
          </MainSlideDiv>
          <h1>대전</h1>
        </div>
      </div>
    );
  }
}

const MainSlideDiv = styled.div`
  width: 1000px;
  height: 650px;
  display: flex;
  flex-wrap: wrap;
`;
