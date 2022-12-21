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
                  <img src="/img/busan/busan1.jpeg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/seoul/seoul1.jpg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/daegu/daegu1.jpg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/daejeon/daejeon1.jpeg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/busan/busan2.jpeg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/seoul/seoul2.jpg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/daegu/daegu2.jpg" />
                  <h3>대전</h3>
                </div>
                <div>
                  <img src="/img/daejeon/daejeon2.jpeg" />
                  <h3>대전</h3>
                </div>
              </Slider>
              <br></br>
            </div>
          </MainSlideDiv>
        </div>
      </div>
    );
  }
}

const MainSlideDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
