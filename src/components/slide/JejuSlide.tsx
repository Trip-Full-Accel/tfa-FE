import React, { Component } from "react";
import Slider from "react-slick";
import "./slider.css";
import styled from "styled-components";
import AreaName from "./AreaName";

export default class JejuSlide extends Component {
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
                  <ImgTag src="/img/jeju/jeju1.png" />
                  <br></br>
                  <h2>한라산</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    해발 1,950m로 우리나라에서 가장 높은 산인 한라산은 제주
                    <br />
                    여행에 있어 빼놓을 수 없는 곳이에요. 신비로운 백록담과
                    <br />
                    계절마다 색다른 아름다움을 간직한 한라산 탐방으로 오랫동안
                    <br />
                    잊지 못할 추억을 만들어 보세요.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju2.png" />
                  <br></br>
                  <h2>성산일출봉</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    성산일출봉은 제주를 대표하는 자연경관 중 하나로 제주의 많은
                    <br />
                    분화구 중 드물게 바다에서 분출한 화산이에요. 분화구의 <br />
                    가장자리가 성벽처럼 보인다고 하여 성산, 정상에서 보는 일출이
                    <br />
                    장관이라고 하여 일출봉이라 해요.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju3.png" />
                  <br></br>
                  <h2>만장굴</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    화산섬인 제주에는 용암동굴이 많은데 만장굴은 그를 대표하는
                    <br />
                    세계 최장 용암동굴로 유네스코 세계유산으로 등록되어있다.
                    <br />
                    만장굴 내부 관람은 왕복 1시간 정도 소요됩니다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju4.png" />
                  <br></br>
                  <h2>소정방폭포</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    소정방폭포는 정방폭포에서 동쪽으로 300m 떨어진 해안에 있는
                    곳으로 물줄기와 바위 병풍이 어우러진 곳이다. 소정방폭포는
                    <br />
                    정방폭포보다 규모는 작지만 바로 가까이에서 폭포를 볼 수 있을
                    뿐만 <br /> 아니라 주변 풍경이 소담하고 아름답다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju5.png" />
                  <br></br>
                  <h2>우도</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    우도는 제주에 있는 섬 안의 섬이다. 서귀포 성산항에서 15분
                    정도 배를 타고 들어가는 곳으로 우도는 제주도와 마찬가지로
                    용암지대 <br /> 특유의 지형을 갖고 있고 우도팔경이라 불리는
                    아름다운 자연경관을
                    <br />
                    자랑하는 곳이이다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju6.png" />
                  <br></br>
                  <h2>섭지코지</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    섭지코지의 코지는 바다로 돌출되어 나온 지형을 뜻하는 곶의
                    <br />
                    제주 방언이다. 섭지코지 끝에 있는 언덕의 등대에 오르면
                    <br /> 성산 일출봉을 배경으로 펼쳐진 푸른 바다와
                    기암괴석으로
                    <br /> 덮인 해안 절경을 감상할 수 있다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju7.png" />
                  <br></br>
                  <h2>미니랜드</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    제주미니랜드는 한국 최초의 세계 미니어처 박물관이며 세계 7대
                    미니어처 테마파크이다. 제주미니랜드는 해외여행을 좋아하는
                    <br />
                    관람객들에게는 세계여행을 하는 듯한 즐거움과 설렘을
                    <br /> 느낄 수 있는 공간입니다.
                  </h4>
                </div>
                <div>
                  <ImgTag src="/img/jeju/jeju8.png" />
                  <br></br>
                  <h2>테디베어뮤지엄</h2>
                  <br></br>
                  <br></br>
                  <h4>
                    제주 테디베어뮤지엄에는 세계 각국의 진귀한 테디베어들이
                    <br />
                    전시되어 있다. 엘비스 프레슬리의 유명 공연이나 세계적인
                    명화를 테디베어로 패러디하는 등 흥미롭고 다채로운 구성으로
                    남녀노소 모두 재미있게 관람할 수 있는 공간이다.
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
  margin: 10px;
  margin: 0;
`;
