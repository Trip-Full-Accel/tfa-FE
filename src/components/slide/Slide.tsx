import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";

const SampleNextArrow = (props: any) => {
  const { style } = props;
  return <div style={{ ...style, display: "block", background: "green" }} />;
};
const SamplePrevArrow = (props: any) => {
  const { style } = props;
  return <div style={{ ...style, display: "block", background: "green" }} />;
};

export default class Slide extends Component {
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
        <MainSlideDiv>
          <div className="place">
            <Slider {...settings}>
              <div>
                <ImgTag src="/img/busan/busan8.png" />
                <br></br>
                <h2>부산 - 더베이 101</h2>
              </div>
              <div>
                <ImgTag src="/img/daegu/daegu4.png" />
                <br></br>
                <h2>대구 - 앞산공원</h2>
              </div>
              <div>
                <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo8.png" />
                <br></br>
                <h2>경상북도 - 이가리 닻 전망대(포항)</h2>
              </div>
              <div>
                <ImgTag src="/img/daejeon/daejeon1.png" />
                <br></br>
                <h2>대전 - 식장산 문화공원</h2>
              </div>
              <div>
                <ImgTag src="/img/gyeonggido/gyeonggido5.png" />
                <br></br>
                <h2>경기도 - 포천 허브아일랜드</h2>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul3.png" />
                <br></br>
                <h2>서울 - 북촌 한옥 마을</h2>
              </div>
              <div>
                <ImgTag src="/img/gangwondo/gangwondo2.png" />
                <br></br>
                <h2>강원도 - 김유정 레일바이크</h2>
              </div>
              <div>
                <ImgTag src="/img/jeju/jeju5.png" />
                <br></br>
                <h2>제주도 - 우도</h2>
              </div>
            </Slider>
            <br></br>
          </div>
        </MainSlideDiv>
      </div>
    );
  }
}

const MainSlideDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgTag = styled.img`
  border-radius: 30px 30px 0 0;
  width: 100%;
  height: 350px;
  margin: 10px;
  margin: 0;
`;
