import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class GangwondoSlide extends Component {
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
                  <ImgTag src="/img/gangwondo/gangwondo1.png" />
                  <br></br>
                  <h2>대관령 양떼목장</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    연인들의 데이트 코스로도 좋지만 가족단위 여행을 하시면
                    아이들이 양의 먹이인 건초를 주면서 교감하는 모습을 보실 수
                    있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo2.png" />
                  <br></br>
                  <h2>김유정 레일바이크</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    야외의 푸른 자연과 아름다운 북한강의 그림 같은 풍경을 눈에
                    <br />
                    담으면서 레일바이크를 타면 그간의 근심과 노고가 씻은 듯이
                    <br />
                    사라지는 경험을 하실 겁니다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo3.png" />
                  <br></br>
                  <h2>육백마지기</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    해발 1256m 높은 곳으로 별은 더욱 가까이서 구경할 수 있어
                    <br />
                    유명한 곳입니다. 별구경, 은하수를 관측할 수 있어 안반데기와
                    <br />
                    함께 강원도 별구경 명소 중에서 가장 대중적인 곳이기도
                    합니다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo4.png" />
                  <br></br>
                  <h2>쏠비치 삼척</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    쏠비치 삼척은 그리스 산토리니를 모티프 삼아 건축했다. <br />
                    파란 지붕을 인 하얀 건축물이 해안을 따라 들어선 자태가
                    <br />
                    해외 휴양지 부럽지 않다. 여기저기 이국적인 분위기를 낼 만한
                    <br />
                    포토존이 많아 인생샷 건지로 오는 사람들이 많다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo5.png" />
                  <br></br>
                  <h2>해피초원목장</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    산과 호수가 조화로운 목가적인 그림을 선사한다. 목장 상부에
                    오르면 끝도 없이 뻗어 나갈 듯한 산줄기 사이에 폭 안긴 호수가
                    보인다. <br />
                    감히 이 장면 하나만으로도 방문할 가치가 있노라 추천한다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo6.png" />
                  <br></br>
                  <h2>장호항</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    스노클링을 할 수 있는 공간과 투명카약을 체험할 수 있는
                    공간이
                    <br /> 마련되어 있으며 한국의 나폴리라고 할 만큼 물색이
                    좋으며 <br />
                    경치가 좋은 곳이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo7.png" />
                  <br></br>
                  <h2>천문인마을</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    아마추어 천문인들에게 관측장소로 유명한 곳입니다. 해발 650m
                    자락에 위치한 곳으로 멋집 별 사진을 찍기 위해 많은 사람들이
                    <br />
                    찾는 곳이기도 합니다. 이름대로 마을이 아닌 별을 관착할수
                    있는
                    <br /> 천문 우주 전문 과학관입니다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/gangwondo/gangwondo8.png" />
                  <br></br>
                  <h2>영월 솔고개 소나무</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    영월의 31번 국도를 타고 가다 보면 300년 된 소나무를 만나볼
                    <br />
                    수 있습니다. 영월의 대표적인 별구경 명소로 소나무와 별이
                    가득한
                    <br /> 하늘을 배경으로 사진을 찍는 곳으로 유명한 곳입니다.
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
  width: 500px;
  height: 350px;
  margin: 10px
  margin: 0;
`;
