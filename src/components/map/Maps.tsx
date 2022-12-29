import { Root } from "@react-three/fiber/dist/declarations/src/core/renderer";
import { useEffect, useRef, useState } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Snowfall from "react-snowfall";
import { useReactToPrint } from "react-to-print";
import { Button } from "reactstrap";
import { fetchPostMapAlgorithm, fetchPostMapReal } from "store/map/mapReducer";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import "../../static/side.css";
import MapTest from "./maptest";
import Points from "./Points";
/*global kakao*/ //지우면 안됨

interface city {
  name: string;
  x: number;
}
interface travelPoint {
  city: string;
  name: string;
  x: number;
  y: number;
}

interface locationInEachRegion {
  cityCode: number;
  lat: number;
  lng: number;
}
const Maps = () => {
  const location = useLocation();
  const cityCode = location.state?.cityCode;

  const [markers, setMarkers] = useState([
    {
      // 서울 시청 좌표
      position: {
        lat: 37.5662952,
        lng: 126.9779451,
      },
    },
  ]);
  const locationInEachRegion = [
    { cityCode: 11, lat: 37.566535, lng: 126.9779692 }, // Seoul
    { cityCode: 41, lat: 37.4138, lng: 127.5183 }, // Gyeongi
    { cityCode: 42, lat: 37.8228, lng: 128.1555 }, //Gangwon
    { cityCode: 44, lat: 36.8, lng: 127.7 }, //Chungbuk
    { cityCode: 43, lat: 36.5184, lng: 126.8 }, //Chungnam
    { cityCode: 45, lat: 35.7175, lng: 127.153 }, //Jeonbuk
    { cityCode: 46, lat: 34.8679, lng: 126.991 }, //Jeonnam
    { cityCode: 47, lat: 36.4919, lng: 128.8889 }, //Gyeongbuk
    { cityCode: 48, lat: 35.4606, lng: 128.2132 }, //Gyeongnam
    { cityCode: 50, lat: 33.4996213, lng: 126.5311884 }, //Jeju
    { cityCode: 36, lat: 36.4802462, lng: 127.2892335 }, //Sejong
    { cityCode: 29, lat: 35.1650188, lng: 126.9080434 }, //Gwangju
    { cityCode: 26, lat: 35.1795543, lng: 129.0756416 }, //Busan
    { cityCode: 31, lat: 35.5383773, lng: 129.3113596 }, //Ulsan
    { cityCode: 27, lat: 35.8714354, lng: 128.601445 }, //Daegu
    { cityCode: 30, lat: 36.3504119, lng: 127.3845475 }, //Daejeon
    { cityCode: 28, lat: 37.4562557, lng: 126.7052062 }, //Incheon
  ];
  const city = [
    { name: "부산시청", x: 35.1795543 },
    { name: "대전시청", x: 36.3504119 },
    { name: "서울시청", x: 37.5666805 },
    { name: "대구시청", x: 35.8714354 },
    { name: "강릉시청", x: 37.751853 },
    { name: "제주시청", x: 33.4996213 },
    { name: "전주시청", x: 35.8242238 },
    { name: "광주시청", x: 35.1595454 },
  ];

  const travelPoint = [
    { city: "서울시청", name: "남산타워", x: 37.551343, y: 126.9881371 },
  ];

  useEffect(() => {
    if (location.state?.cityCode) {
      const findCity = locationInEachRegion.find(
        (city) => city.cityCode === Number(location.state.cityCode)
      );
      console.log("파인드시티", findCity);
      if (findCity)
        setMarkers([
          {
            position: {
              lat: findCity?.lat,
              lng: findCity?.lng,
            },
          },
        ]);
    }
    city.map((el) => {
      if (location.state?.x == el.x) {
        setAddr([{ name: el.name }]);
      }
    });
  }, [location]);

  const [isMarked, setIsMarked] = useState(false);
  const [isPolyline, setIsPolyline] = useState(false);
  const [addr, setAddr] = useState([{ name: "서울시청" }]);

  const getAddr = (lat: number, lng: number) => {
    let geocoder = new kakao.maps.services.Geocoder();

    let coord = new kakao.maps.LatLng(lat, lng);

    let callback = function (result: any, status: string) {
      if (status === kakao.maps.services.Status.OK) {
        setAddr([...addr, { name: result[0].address.address_name }]);
      }
    };
    geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);

    return addr;
  };

  const algorithm = useSelector(
    (state: RootState) => state.map.selectedTourList
  );
  console.log("알고리즘짤 보내줄 경로", algorithm[0]);

  const dispatch = useDispatch<AppDispatch>();

  const result = useSelector((state: RootState) => state.map.succuessAlgorithm);
  // console.log("result", result.courseResponseList);
  // const successAlgo = result.courseResponseList
  console.log("result", result);

  const [checkConfirm, setCheckConfirm] = useState(false);
  const createMaps = () => {
    if (selected.length < 6) {
      alert("6개의 여행지를 선택해주세요");
    } else {
      if (window.confirm("첫번째 여행지가 맞음?")) {
        dispatch(
          fetchPostMapAlgorithm({
            firstCourseName: algorithm[0].name,
            firstCourseLat: algorithm[0].lat,
            firstCourseLng: algorithm[0].lng,
            otherCourseNames: [
              algorithm[1].name,
              algorithm[2].name,
              algorithm[3].name,
              algorithm[4].name,
              algorithm[5].name,
            ],
            otherCourseLats: [
              algorithm[1].lat,
              algorithm[2].lat,
              algorithm[3].lat,
              algorithm[4].lat,
              algorithm[5].lat,
            ],
            otherCourseLngs: [
              algorithm[1].lng,
              algorithm[2].lng,
              algorithm[3].lng,
              algorithm[4].lng,
              algorithm[5].lng,
            ],
          })
        ).then((res: any) =>
          // res.payload.courseResponseList[0].lat
          res.payload?.courseResponseList?.map((el: any) => {
            console.log("then data", el);
            // setIsVisible(true);
          })
        );
        setCheckConfirm(true);
        setIsMarked(true);
      }
    }
  };
  const navigate = useNavigate();
  const courseId = useSelector((state: RootState) => state.map.courseId);
  console.log("리덕스에서 가져온 코스아이디", courseId.courseId);
  // console.log(
  //   "최종경로로 보내줄 값",
  //   result?.courseResponseList?.courseLats[0]
  // );

  const doneList = result?.courseResponseList?.map((el: any) => {
    return {
      lat: el.courseLngs,
      lng: el.courseLats,
      pathOrder: el.courseOrders,
      placeName: el.courseNames,
    };
  });

  const realCreateCourse = async () => {
    await dispatch(
      fetchPostMapReal({
        courseId: courseId.courseId,
        registerPlaceRequestList: [...doneList],
        userId: Number(localStorage.getItem("kakaoId")), //로컬스토리지 태워서 보내면됨,
      })
    );
    if (checkConfirm) {
      alert("당신의 여행지가 만들어졌습니다!");
      navigate("/");
    } else {
      alert("경로확정을 지으세요");
    }
  };

  const mapData = useSelector((state: RootState) => state.map.maps);
  // console.log(mapData);
  const selected = useSelector(
    (state: RootState) => state.map.selectedTourList
  );

  const mapRef = useRef<any>();
  const handlePDF = useReactToPrint({
    content: () => mapRef.current,

    documentTitle: "TFA-Course",
    onAfterPrint: () => alert("pdf 파일 생성완료! "),
  });

  const shareKakao = () => {
    window.Kakao.Link.sendCustom({
      templateId: 86680, // 내가 만든 템플릿 아이디를 넣어주면 된다
      templateArgs: {
        SHARE_CONTENT: "1231333333",
      },
    });
  };

  // const [realList, setRealList] = useState(result.courseResponseList);
  // setRealList(result.courseResponseList);
  const realList = result?.courseResponseList;
  console.log("object", realList);
  console.log("selected", selected);

  return (
    <MapPageDiv ref={mapRef}>
      <Snowfall
        // Changes the snowflake color
        color="#b5b0d0"
        // Applied to the canvas element
        // style={{ background: "#7c74ab" }}
        // Controls the number of snowflakes that are created (default 150)
        snowflakeCount={200}
      />
      <SelectListDiv>
        <div style={{ textAlign: "start" }}>
          날짜: {location.state?.date}
          <br /> 여행제목: {location.state?.title}
        </div>
        <SelectDiv>
          <Points markers={markers}></Points>
          {/* <PointsTest markers={markers}></PointsTest> */}
        </SelectDiv>
        <Button
          style={{ width: "80%", height: "50px", marginTop: "1rem" }}
          onClick={createMaps}
        >
          경로만들기
        </Button>
        <Button
          style={{ width: "80%", height: "50px", marginTop: "1rem" }}
          onClick={shareKakao}
        >
          카카오톡으로 경로 보내기
        </Button>
        <Button
          style={{ width: "80%", height: "50px", marginTop: "1rem" }}
          onClick={handlePDF}
        >
          PDF 생성하기
        </Button>
        {checkConfirm === true ? (
          <Button1
            style={{ width: "80%", height: "50px", marginTop: "1rem" }}
            onClick={realCreateCourse}
          >
            완료
          </Button1>
        ) : (
          <Button2
            style={{ width: "80%", height: "50px", margin: "1rem 0 1rem 0" }}
            onClick={realCreateCourse}
          >
            완료
          </Button2>
        )}
      </SelectListDiv>

      <MapDiv>
        <Map
          center={{
            lat: markers[0].position.lat,
            lng: markers[0].position.lng,
          }}
          style={{ width: "100%", height: "40rem" }}
          level={8} // 작을 수록 범위가 좁아짐
          // onClick={(_target, mouseEvent) => {
          //   setMarkers([
          //     ...markers,
          //     {
          //       position: {
          //         lat: mouseEvent.latLng.getLat(),
          //         lng: mouseEvent.latLng.getLng(),
          //       },
          //     },
          //   ]);
          //   getAddr(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
          // }}
        >
          {markers.map((marker, index) => (
            <div key={index}>
              <MapMarker
                image={{
                  src: "/img/mark2.png", // 마커이미지의 주소입니다
                  size: {
                    width: 50,
                    height: 60,
                  }, // 마커이미지의 크기입니다
                  options: {
                    offset: {
                      x: 27,
                      y: 69,
                    }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                  },
                }}
                key={`${marker.position}-${index}`}
                position={marker.position} // 마커를 표시할 위치
              />
            </div>
          ))}
          {result.courseResponseList !== undefined ? (
            <Polyline
              // path={[markers.map((data) => data?.position)]}
              path={[
                // 셀렉티드 찎어보고 알고리즘 받은 데이터 똑같이 세팅하든가 아니면 잘 뽑아서 쓰던가
                result?.courseResponseList?.map((data: any) => {
                  console.log(1);

                  // const { lat, lng } = data;
                  return {
                    lat: data?.courseLats,
                    lng: data?.courseLngs,
                  };
                }),
              ]}
              strokeWeight={6} // 두께
              strokeColor={"#000d16"} // 색
              strokeOpacity={0.6} // 불투명도
              strokeStyle={"solid"} // 스타일
            />
          ) : (
            <></>
          )}
        </Map>
      </MapDiv>
      <TourListTopDiv>
        <span className="">관광지 리스트</span>
        {/* {travelPoint.map((el, i) => {
          return (
            TourList로 분기하게되면 Mapmarker사용 불가능해서 분기못함 추후에 리덕스에서 가져오면 가능할지도..
            ex - BE에서 보내주는 값을 리덕스에 정리해서 TourList에서도 받고 Maps에서도 받아서 동시에 처리하도록

            <TourList
              key={el.name + el.x}
              name={el.name}
              x={el.x}
              y={el.y}
            ></TourList>
            <div key={i} style={{ marginTop: "1rem" }}>
            </div>
          );
        })} */}
        <MapTest
          setMarkers={setMarkers}
          markers={markers}
          cityCode={cityCode}
        ></MapTest>
      </TourListTopDiv>
      {/* {result?.courseResponseList?.map((el: any) => {
        return <div>{el.courseLats}</div>;
      })} */}
    </MapPageDiv>
  );
};

export default Maps;

const MapPageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectListDiv = styled.div`
  width: 20%;
  margin-left: 0.5rem;
`;

const SelectDiv = styled.div``;

const MapDiv = styled.div`
  width: 100%;
  margin: 0;
  padding: 0 1.5rem 0 1.5rem;
`;

const TourListTopDiv = styled.div`
  width: 20%;
  height: 600px;
  margin-right: 0.5rem;
  overflow: hidden;
  border-radius: 5px;
`;
const TListDiv = styled.div``;
const TNameDiv = styled.div``;
const TImgDiv = styled.div``;
const TContentDiv = styled.div``;

const Button1 = styled.button`
  :disabled {
    background-color: darkgrey;
  }
  margin-top: 40px;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  background-color: #7c74ab;
`;

const Button2 = styled.button`
  margin-top: 40px;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  border: none;
  color: white;
  background-color: #7c74ab;
`;
