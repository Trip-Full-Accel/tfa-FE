import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class GyeongsangbukdoSlide extends Component {
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
            <div className="place">
              <Slider {...settings}>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo1.png" />
                  <br></br>
                  <h2>경천대</h2>
                  <br></br>
                  <h4>
                    경천대 관광지내에는 전망대, 야영장,목교,출렁다리, <br />
                    MBC드라마 "상도" 세트장, 어린이 놀이시설, 수영장, 눈썰매장
                    <br /> 및 식당, 매점 등이 갖추어져 있어 가족과 함께 편안한
                    휴식과 <br /> 관광을 할 수 있는 최적의 장소로 각광받고 있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo2.png" />
                  <br></br>
                  <h2>경주월드</h2>
                  <br></br>
                  <h4>
                    경상북도 경주시 보문관광단지에 위치한 테마파크. 2022년 기준
                    대한민국의 테마파크 중에서 가장 격렬하고 무서운 어트랙션들을
                    가장 많이 굴리는 곳이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo3.png" />
                  <br></br>
                  <h2>경주 안압지</h2>
                  <br></br>
                  <h4>
                    경주야경 제 1의 명소라는 타이틀이 아깝지 않은 동궁과월지는
                    <br />
                    ‘안압지’라는 이름이 더 익숙할 수도 있듯이 많은 연인들이
                    <br />
                    찾아와서 사랑을 약속하고 간다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo4.png" />
                  <br></br>
                  <h2>청도 프로방스</h2>
                  <br></br>
                  <h4>
                    1천만 개의 LED 조명이 공원 전역을 밝히고 있어 매년 빛 축제가
                    펼쳐지는 곳으로 잘 알려져 있으며 아이들을 위한 놀이 시설 등
                    <br />
                    다양한 편의 시설이 갖춰져 있어 가족 나들이 손님들이 <br />
                    많이 찾고 있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo5.png" />
                  <br></br>
                  <h2>안동 하회마을</h2>
                  <br></br>
                  <h4>
                    하회마을에서는 하회별신굿탈놀이를 상설공연으로 진행하고,
                    <br />
                    매년 가을 안동국제탈춤페스티벌 등 다양한 볼거리가 많은
                    곳이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo6.png" />
                  <br></br>
                  <h2>월영교</h2>
                  <br></br>
                  <h4>
                    안동댐 아래 위치한 월영교는 우리나라에서 가장 긴 목책 <br />
                    인도교다. 월영교는 안동댐 아래로 흐르는 물길을 가로지르는
                    다리이며 <br /> 안동댐내 월영공원과 안동민속촌을 연결하는
                    다리이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo7.png" />
                  <br></br>
                  <h2>호미곶</h2>
                  <br></br>
                  <h4>
                    한반도를 호랑이로 보았을 때 꼬리에 해당하는 부분이다.
                    대한민국 본토의 최동단에 위치한다. 대한민국 내륙에서 가장
                    해가 먼저 <br /> 뜨는 곳으로 일출, 일몰 때를 맞추지 않더라도
                    포항까지 왔다면 <br /> 꼭 한 번 들리면 좋은 장소다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeongsangbukdo/gyeongsangbukdo8.png" />
                  <br></br>
                  <h2>이가리 닻 전망대</h2>
                  <br></br>
                  <h4>
                    포항시 북구 청하면 이가리에 위치한 이가리닻전망대는
                    <br />
                    푸른 해송과 아름다운 이가리 간이해수욕장 인근에 선박을
                    <br />
                    정착시키는 닻을 형상화한 전망대다. 높이 10m, 길이 102m
                    <br />
                    규모로 시원스레 펼쳐진 포항의 바다를 한눈에 담을 수 있는
                    곳이다.
                  </h4>
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

const ImgTag = styled.img`
  border-radius: 15px 15px 15px 15px;
  width: 500px;
  height: 350px;
  margin: 10px
  margin: 0;
`;
