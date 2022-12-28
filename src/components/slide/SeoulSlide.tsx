import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

const SeoulSlide = () => {
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
      <div>
        <MainSlideDiv>
          <div className="place">
            <Slider {...settings}>
              <div>
                <ImgTag src="/img/seoul/seoul1.png" />
                <br></br>
                <h2>북한산 둘레길</h2>
                <br></br>
                <h4>
                  사람과 자연이 하나가 되어 걸을 수 있도록 물길, 흙길, 숲길 등
                  <br />
                  21가지 다양한 테마를 담았죠. 총 길이 71.5km의 둘레길 전체를
                  <br />
                  완주하며 스탬프를 모으는 것도 둘레길을 즐기는 좋은 방법이다.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul2.png" />
                <br></br>
                <h2>한강공원</h2>
                <br></br>
                <h4>
                  기본적인 레포츠 시설을 갖추고 있고, 전망대나 아름다운 분수 등
                  <br /> 볼거리가 많은 공원은 물론 생태 캠핑장이 마련된 곳도
                  있어요.
                  <br /> 한강공원은 다양한 매력으로 낮에도 밤에도 사람들의
                  <br />
                  발길이 끊이지 않는 곳이다.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul3.png" />
                <br></br>
                <h2>북촌 한옥 마을</h2>
                <br></br>
                <h4>
                  북촌은 조선시대부터 양반층의 주거지였지만 서울의 개발과 함께
                  한옥을 보존하기 위해 계획적으로 조성된 한옥 주거지다. 이
                  지역의 한옥은 고택과는 달리 한옥의 특징을 살리면서도 현대적인
                  기술이나 장식적 요소가 더해져 있다.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul4.png" />
                <br></br>
                <h2>창경궁 야간개장</h2>
                <br></br>
                <h4>
                  창경궁 야간개장은 청사초롱과 함께 하기 때문에 더욱
                  <br />
                  낭만적이다. 해가 저문 뒤 청사초롱을 들고 창경궁을 거닐면
                  <br />
                  마치 조선시대로 돌아간 것 같은 특별한 경험을 할 수 있다.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul5.png" />
                <br></br>
                <h2>운현궁 양관</h2>
                <br></br>
                <h4>
                  운현궁 양관은 운현궁 바로 옆 덕성여대 내에 있는 근대
                  <br />
                  건축물이다. 아름다운 건물은 드라마 ‘도깨비’의 배경으로도
                  <br />
                  유명한데, 평일에는 대학 관계자 외에는 출입이 금지되어 있으니
                  <br />
                  주말을 이용해 방문해 보자.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul6.png" />
                <br></br>
                <h2>롯데월드타워</h2>
                <br></br>
                <h4>
                  2016년에 완공된 롯데월드타워는 555m의 현대적인 고층
                  <br /> 빌딩으로 맨 꼭대기의 전망대에서 360도로 서울의 전경을
                  볼 수<br /> 있는 게 특징이다. 아쿠아리움 및 콘서트홀, 영화관
                  등 다양한
                  <br />
                  엔터테인먼트와 쇼핑, 음식 등을 한 자리에서 즐기실 수 있다.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul7.png" />
                <br></br>
                <h2>이태원</h2>
                <br></br>
                <h4>
                  여러 외국 공관을 중심으로 다양한 나라의 사람들이 모이면서
                  <br />
                  다채로운 외국 문화를 접할 수 있는 독특한 분위기의 동네가
                  <br />
                  형성되었다. 이태원에서라면 서울을 떠나지 않고도
                  <br />전 세계 다양한 사람을 만날 수가 있다.
                </h4>
              </div>
              <div>
                <ImgTag src="/img/seoul/seoul8.png" />
                <br></br>
                <h2>봉은사</h2>
                <br></br>
                <h4>
                  추사 김정희가 쓴 현판이 걸린 판전에는 화엄경, 금강경 등
                  <br />
                  13가지의 불경 경판 3,479판이 보관되어 있다.
                  <br /> 매년 음력 9월 9일에는 사부대중이 함께 경판을 머리에
                  이고
                  <br /> 법성게를 독송하면서 법계도를 따라 행진하는
                  <br /> 정대불사라는 의식이 행해진다.
                </h4>
              </div>
            </Slider>
            <br></br>
          </div>
        </MainSlideDiv>
      </div>
    </div>
  );
};
export default SeoulSlide;

const MainSlideDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ImgTag = styled.img`
  border-radius: 15px;
  width: 100%;
  height: 350px;
`;
