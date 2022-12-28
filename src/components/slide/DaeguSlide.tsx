import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class DaeguSlide extends Component {
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
                  <ImgTag src="/img/daegu/daegu1.png" />
                  <br></br>
                  <h2>계산성당</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    계산성당은 서울 명동성당, 전주 전동성당과 함께 우리나라 3대
                    성당 중 한 곳이며 세 성당 모두 프와넬 신부가 설계하여 내부
                    <br />
                    구조가 비슷하다 하다. 대구 최초의 서양식 건물로 두 개의
                    첨탑을 <br />
                    가진 고딕 양식의 아름다운 건물이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu2.png" />
                  <br></br>
                  <h2>수성못</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    수성구 두산동의 수성못은 도심 속 산책과 휴식 공간이다.
                    <br />
                    수성못은 주변 풍경이 아름답고 산책로와 부대시설이 잘 갖춰져
                    있고 호수에서는 보트 놀이도 할 수 있고 수상 분수 쇼도 볼만
                    해서 <br />
                    연인들의 데이트 명소이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu3.png" />
                  <br></br>
                  <h2>83타워</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    전망대에서는 대구 시내와 멀리 팔공산까지 한눈에 조망할 수
                    <br />
                    있다. 야경이 이름다운 스카이라운지는 연인들의 프러포즈
                    장소로
                    <br /> 유명하다. 123m에서 뛰어내리는 스카이점프는 이곳의
                    명물이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu4.png" />
                  <br></br>
                  <h2>앞산공원</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    공원에는 계곡, 약수터, 산책로가 있고 낙동강 승전기념관 등
                    <br />
                    유적도 많고 편의시설로는 수영장, 도서관, 식물원 등 대구
                    시민의 <br />
                    휴식처이다. 케이블카를 타고 전망대에 오르면 대구 시내를
                    <br />
                    한눈에 조망할 수 있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu5.png" />
                  <br></br>
                  <h2>동화사</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    세계에서 가장 큰 석조불이라는 33m 높이의 통일약사대불은
                    <br />
                    이곳의 볼거리이다. 불교미술을 전시하는 성보박물관, 선을
                    테마로 한 불교문화관, 사찰음식 체험관 등이 있어 불교문화를
                    살펴보기 좋다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu6.png" />
                  <br></br>
                  <h2>비슬산군립공원</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    봄이면 고지 30만 평에 걸쳐 진달래꽃이 흐드러지게 피어 장관을
                    연출한다. 매년 4∼5월에 참꽃축제를 열고, 민속놀이·먹을거리
                    <br />
                    장터 등의 부대 행사를 개최한다. 그 밖에 여름에는 안개 계곡,
                    가을에는 단풍과 참억새, 겨울에는 얼음 동산이 유명하다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu7.png" />
                  <br></br>
                  <h2>국채보상운동기념공원</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    대구에서 처음 시작된 국채보상운동의 정신이 깃든 도심 속
                    <br />
                    쉼터이다. 잔디광장과 녹지 공간, 오솔길, 분수, 정자 등을
                    <br />
                    갖추고 있다. 곳곳에 벤치와 휴식 공간이 많아
                    <br /> 시민은 물론 여행객들도 많이 찾는다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daegu/daegu8.png" />
                  <br></br>
                  <h2>이월드</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    놀이기구와 전시공간이 공존하는 유럽식 도시공원으로 남녀노소
                    누구나 즐길 수 있는 공간이다. 별빛축제 기간에는 더욱 화려한
                    밤을 <br />
                    즐길 수 있다.
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
  border-radius: 15px 15px 0 0;
  width: 100%;
  height: 350px;
  margin: 10px;
  margin: 0;
`;
