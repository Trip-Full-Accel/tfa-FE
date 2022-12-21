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
      autoplay: false,
      speed: 700,
      cssEase: "linear",
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };

    return (
      <div>
        <MainSlideDiv>
          <div style={{ width: "30%" }} className="busan">
            <Slider {...settings}>
              <div>
                <ImgTag src="/img/busan/busan1.jpeg" />
                <h3>부산</h3>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul1.jpg" />
                <h3>서울</h3>
              </div>
              <div>
                <ImgTag src="/img/daegu/daegu1.jpg" />
                <h3>대구</h3>
              </div>
              <div>
                <ImgTag src="/img/daejeon/daejeon1.jpeg" />
                <h3>대전</h3>
              </div>
              <div>
                <ImgTag src="/img/busan/busan2.jpeg" />
                <h3>부산</h3>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul2.jpg" />
                <h3>서울</h3>
              </div>
              <div>
                <ImgTag src="/img/daegu/daegu2.jpg" />
                <h3>대구</h3>
              </div>
              <div>
                <ImgTag src="/img/daejeon/daejeon2.jpeg" />
                <h3>대전</h3>
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
  width: 100%;
  margin: 0;
`;
