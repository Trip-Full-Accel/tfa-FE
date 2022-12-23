import { useEffect, useState } from "react";
import { Map, MapMarker, Polyline } from "react-kakao-maps-sdk";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { Button } from "reactstrap";
import { fetchPostMap } from "store/map/mapReducer";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
import "../../static/side.css";
import MapTest from "./maptest";
import MapTest2 from "./maptest2";
import MapTest3 from "./maptest3";
import Points from "./Points";
import PointsTest from "./PointsTest";
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

const Maps = () => {
  const location = useLocation();
  const days = location.state.days;
  const [markers, setMarkers] = useState([
    {
      // 서울 시청 좌표
      position: {
        lat: 37.5662952,
        lng: 126.9779451,
      },
    },
  ]);

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
    if (location.state?.x && location.state?.y)
      setMarkers([
        {
          position: {
            lat: location.state.x,
            lng: location.state.y,
          },
        },
      ]);
    city.map((el) => {
      if (location.state?.x == el.x) {
        setAddr([{ name: el.name }]);
      }
    });
  }, [location.state]);

  const [isVisible, setIsVisible] = useState(true);
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

  const dispatch = useDispatch<AppDispatch>();
  const createMaps = () => {
    dispatch(
      fetchPostMap({
        firstCourseName: "서울",
        otherCourseNames: ["경기", "대구", "속초", "대전"],
        firstCourseLat: 37.56070556,
        firstCourseLng: 126.9105306,
        otherCourseLats: [37.65590833, 35.82692778, 35.80361, 37.39444],
        otherCourseLngs: [126.7770556, 128.5350639, 126.88083, 126.95556],
      })
    );
    alert("첫번째 여행지가 x 맞음?");
  };

  const mapData = useSelector((state: RootState) => state.map.maps);
  // console.log(mapData);
  const selected = useSelector(
    (state: RootState) => state.map.selectedTourList
  );
  const onLoadMore = () => {};
  return (
    <MapPageDiv>
      <SelectListDiv>
        <div style={{ textAlign: "start" }}>
          날짜: {location.state.date}
          <br /> 여행제목: {location.state.title}
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
          {isVisible &&
            markers.map((marker, index) => (
              <div style={{ height: "100px" }} key={index}>
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
                ></MapMarker>
              </div>
            ))}
          <Polyline
            // path={[markers.map((data) => data?.position)]}
            path={[
              selected.map((data) => {
                // const { lat, lng } = data;
                return { lat: Number(data.lat), lng: Number(data.lng) };
              }),
            ]}
            strokeWeight={10} // 두께
            strokeColor={"#1296ef"} // 색
            strokeOpacity={0.6} // 불투명도
            strokeStyle={"longdash"} // 스타일
          />
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
        <MapTest setMarkers={setMarkers} markers={markers}></MapTest>
      </TourListTopDiv>
    </MapPageDiv>
  );
};

////////////
// {travelPoint.map((el) => {
//       return (
//         // TourList로 분기하게되면 Mapmarker사용 불가능해서 분기못함 추후에 리덕스에서 가져오면 가능할지도..
//         // ex - BE에서 보내주는 값을 리덕스에 정리해서 TourList에서도 받고 Maps에서도 받아서 동시에 처리하도록

//         // <TourList
//         //   key={el.name + el.x}
//         //   name={el.name}
//         //   x={el.x}
//         //   y={el.y}
//         // ></TourList>
//         <div style={{ marginTop: "1rem" }}>
//           {/* <MapTest></MapTest> */}
//           {/* <MapTest3></MapTest3> */}
//           </div>
//           );
//         })}

///////////
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
