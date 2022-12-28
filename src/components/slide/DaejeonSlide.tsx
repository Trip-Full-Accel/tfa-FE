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
            <div className="place">
              <Slider {...settings}>
                <div>
                  <ImgTag src="/img/daejeon/daejeon1.png" />
                  <br></br>
                  <h2>식장산 문화공원</h2>
                  <br></br>
                  <h4>
                    대천 최고의 야경 감상 명소로 꼽히던 식장산 정상부에
                    문화공원을 조성하였다. 특히 문화공원 내에 지은 전통누각이
                    운치를 더하고 <br />
                    있으며, 대전 전경을 한번에 조망할 수 있는 전망대도 <br />
                    위치해 있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon2.png" />
                  <br></br>
                  <h2>문화예술단지</h2>
                  <br></br>
                  <h4>
                    대전예술의 전당, 시립미술관, 이응노 미술관으로 이어지는
                    문화벨트 지역으로, 예술의 전당 아트홀은 1,546석의 객석과
                    300명이 <br />
                    동시출연 가능한 대규모 공연장으로 그랜드오페라·발레·뮤지컬
                    등 <br />
                    종합문화예술공간이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon3.png" />
                  <br></br>
                  <h2>으느정이 문화의거리</h2>
                  <br></br>
                  <h4>
                    화랑·공연장·소극장·전시 및
                    공연시설·표구사·화실·도예점·골동품점 등 문화예술 관련업종
                    150여 업소가 성업 중이며, 으능정이 <br />
                    페스티벌, 청소년 마임페스티벌, 문화예술거리축제 등 다양한
                    <br />
                    축제가 열린다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon4.png" />
                  <br></br>
                  <h2>장태산자연휴양림</h2>
                  <br></br>
                  <h4>
                    메타세쿼이아 숲이 울창해 이국적인 정취를 느낄 수 있고
                    <br /> 맑은 연못과 계곡, 울창한 숲이 어우러진 경관과 함께
                    편안한
                    <br /> 산책로가 조성돼 있어 산림욕을 즐기기 좋다.
                    <br /> 일상에 지친 몸과 마음을 힐링하기에 좋은 곳이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon5.png" />
                  <br></br>
                  <h2>둘러산길</h2>
                  <br></br>
                  <h4>
                    대전둘레산길은 약 300리에 달하는 대전둘레산잇기(133km)
                    코스를 12개 구간으로 나누어 대전의 참 모습을 볼 수 있도록
                    <br />한 명품길이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon6.png" />
                  <br></br>
                  <h2>엑스포과학공원</h2>
                  <br></br>
                  <h4>
                    엑스포과학공원의 상징탑인 한빛탑에서는 대전시 주요 지역을
                    <br />
                    한눈에 조망할 수 있고 여름이면 한빛탑 광장을 중심으로
                    <br /> 달밤 소풍 축제가 열린다. 거리공연, 포토존, 푸드트럭,
                    아트마켓 등<br /> 먹거리와 볼거리가 있어 젊은이들이 많이
                    찾아온다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon7.png" />
                  <br></br>
                  <h2>오-월드</h2>
                  <br></br>
                  <h4>
                    대전시에서 옛 대전동물원을 중심으로 놀이동산과 플라워랜드를
                    <br />
                    합쳐 만든 테마파크이다. 조이랜드에는 각종 놀이기구, 사계절
                    <br />
                    썰매장, 물놀이장이 있죠. 볼거리와 놀거리가 많아 가족과 함께
                    <br />
                    나들이하기 좋은 곳이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/daejeon/daejeon8.png" />
                  <br></br>
                  <h2>동춘당</h2>
                  <br></br>
                  <h4>
                    대덕구 송촌동에 위치한 동춘당은 조선 효종 때 대사헌,
                    이조판서, 병조판서를 지낸 동춘당 송준길 선생의 별당이다.
                    동춘당 주변으로는 연못과 잘 가꿔진 숲, 산책로가 있는 공원이
                    조성되어 있어 가족과 함께 여유롭게 둘러보기 좋은 곳이다.
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
