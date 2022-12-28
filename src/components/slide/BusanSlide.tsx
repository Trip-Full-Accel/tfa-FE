import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class BusanSlide extends Component {
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
                  <ImgTag src="/img/busan/busan1.png" />
                  <br></br>
                  <h2>엑스더스카이</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    국내 두번째 높이(411.6m)인 ‘해운대 엘시티 랜드마크타워’에
                    <br />
                    위치하고 있으며, 해운대 해변과 도시 야경, 광안대교,
                    부산항대교, 이기대, 달맞이 고개, 동백섬 등 부산의 명소를
                    조망할 수 있는 <br />
                    ‘파노라믹 오션뷰’를 자랑한다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan2.png" />
                  <br></br>
                  <h2>캐비네 드 쁘아쏭(미디어 갤러리)</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    아난티가 추구하는 자연에 대한 존중, 인문학을 향한 사랑
                    그리고 공존의 가치를 미디어 테크놀로지 아트로 표현했다. 전혀
                    다른 성격의 시설들이 한데 모여 지금까지 없었던 새로운 가치를
                    창조한다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan3.png" />
                  <br></br>
                  <h2>아미산 전망대</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    낙동강과 바다가 한 몸이 되는 지점을 내려다볼 수 있는 아미산
                    <br />
                    전망대는 선선한 바람을 느끼며 황금빛 낙조를 직관 할 수 있고
                    <br />
                    낙동강이 청명한 바다와 만나 이루어낸 풍경을 볼 수 있는
                    곳이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan4.png" />
                  <br></br>
                  <h2>감천문화마을</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    1950년대 6.25 시작되어 현재에 이르기까지 부산의 역사를
                    <br />
                    그대로 간직하고 있는 곳이다. 산비탈을 따라 계단식으로 들어선
                    <br />
                    아름다운 파스텔톤의 집들과 미로와 같은 골목길이 있어 한국의
                    <br />
                    마추픽추, 산토리니로 불린다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan5.png" />
                  <br></br>
                  <h2>용궁사</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    부처님오신날에는 여느 절처럼 연등을 켜는데 바다 풍경과
                    <br />
                    어우러져 장관을 이루고, 동해 바닷가이므로 부산 안에서 1월
                    1일 <br />
                    일출 명소로도 유명하다. 따라서 새해 첫날에는 많은 사람들이
                    <br />
                    해돋이를 보러 찾아온다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan6.png" />
                  <br></br>
                  <h2>스카이캡슐</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    해운대 해안절경을 7~10m 공중에서 관람하는 낭만적인 <br />
                    체험시설 해운대 스카이캡슐은 신비로운 해안절경을 7~10m
                    <br /> 공중 레일에서 관람하면서 해운대 미포에서 청사포까지
                    <br />
                    2Km구간을 자동으로 운행하는 낭만적인 캡슐이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan7.png" />
                  <br></br>
                  <h2>송도해상케이블카</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    바다 위를 가로질러 운행함으로써 부산 송도일대의 빼어난
                    풍광을 즐길 수 있다. 이 밖에 국내 최초의 케이블카 뮤지엄
                    <br />
                    '송도 도펠마이어 월드', 아시아 최초의 공중그네 '스카이스윙'.
                    <br />
                    테마파크 포토서비스 등 다양한 테마시설과 볼거리를 제공한다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/busan/busan8.png" />
                  <br></br>
                  <h2>더베이101</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    아름다운 바다와 산 그리고 현대적인 건물들이 공존하는
                    세계적인 휴양지, 해운대. 문화와 예술을 위한 공간, 바다가
                    주는 흥분을 조금 더 느낄 수 있는 공간, 누구나 머물 수 있는
                    재미있는 공간.
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
