import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class GyeonggidoSlide extends Component {
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
                  <ImgTag src="/img/gyeonggido/gyeonggido1.png" />
                  <br></br>
                  <h2>아침고요수목원</h2>
                  <br></br>
                  <h4>
                    아침고요수목원은 축령산의 빼어난 자연경관을 배경으로 하여
                    <br />
                    한국의 미를 듬뿍 담은 정원들을 원예학적으로 조화시켜 설계한
                    <br />
                    원예수목원이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido2.png" />
                  <br></br>
                  <h2>하경정원</h2>
                  <br></br>
                  <h4>
                    하경공원은 대한민국 지도 모양으로 설계되어 내려다보는 <br />
                    침강 정원의 형태로 조성되었다. 다양한 색깔을 내는 나무와
                    <br />
                    숙근초, 그리고 다양한 일년초가 어우러지며 계절마다 최고의
                    <br />
                    아름다운 색감과 자태를 드러내는 대표적인 전시정원이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido3.png" />
                  <br></br>
                  <h2>배곧한울공원</h2>
                  <br></br>
                  <h4>
                    공원 앞으로 펼쳐진 바다와 이국적인 느낌이 물씬 풍기는
                    <br />
                    해수체험장은 도심속 휴식처로 많은 시민들에게
                    <br /> 지친 일상의 피로를 풀게한다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido4.png" />
                  <br></br>
                  <h2>월곶포구</h2>
                  <br></br>
                  <h4>
                    언제든지 갓 잡아온 횟감들을 맛볼 수 있다는 싱싱한 즐거움,
                    그것은 월곶이 아닌 곳에서는 쉽게 맛볼 수 있는 일이 아니다.
                    <br />
                    포구의 특성에 따른 신선한 자연산 활어회가 자랑거리다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido5.png" />
                  <br></br>
                  <h2>포천 허브아일랜드</h2>
                  <br></br>
                  <h4>
                    허브아일랜드 내 식물원과 전시실을 갖춘 1종
                    전문박물관(식물원)으로 등록한 전국 최대 규모의 허브
                    식물원이다. 허브식물박물관은 총4개의 실내 전시관과 야외
                    전시장으로 구성되어 있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido6.png" />
                  <br></br>
                  <h2>가평 아침고요수목원</h2>
                  <br></br>
                  <h4>
                    아침고요수목원은 축령산의 빼어난 자연경관을 배경으로 하여{" "}
                    <br />
                    한국의 미를 듬뿍 담은 정원들을 원예학적으로 조화시켜 설계한{" "}
                    <br />
                    원예수목원이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido7.png" />
                  <br></br>
                  <h2>수원화성</h2>
                  <br></br>
                  <h4>
                    다양한 상설 공연을 진행하고, 매년 가을이면 수원화성문화제를
                    개최하여 수원 화성을 알리고 있다. 화성은 역사적 의미와 함께
                    <br />
                    건축학적으로도 귀중한 세계문화유산이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gyeonggido/gyeonggido8.png" />
                  <br></br>
                  <h2>용인 에버랜드</h2>
                  <br></br>
                  <h4>
                    1년 365일, 계절별 다채롭게 펼쳐지는 축제와 어트랙션, 동물,
                    <br />
                    식물 등 다양한 시설로 즐거운 휴식과 기쁨을 선사하는 <br />
                    테마파크이다.
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
  border-radius: 15px;
  width: 100%;
  height: 350px;
`;
