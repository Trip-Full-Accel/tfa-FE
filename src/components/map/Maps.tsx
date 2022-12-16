import { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import "../../static/side.css";
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

const Maps = () => {
  const location = useLocation();
  const [markers, setMarkers] = useState([
    {
      // 서울 시청 좌표
      position: {
        lat: 36.38,
        lng: 127.51,
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

  return (
    <MapPageDiv>
      <SelectListDiv>
        {addr.map((el, i) => {
          return <Points key={el.name} idx={i} name={el.name}></Points>;
        })}
      </SelectListDiv>
      <MapDiv>
        <Map
          center={{
            lat: markers[0].position.lat,
            lng: markers[0].position.lng,
          }}
          style={{ width: "40rem", height: "40rem" }}
          level={8} // 작을 수록 범위가 좁아짐
          onClick={(_target, mouseEvent) => {
            setMarkers([
              ...markers,
              {
                position: {
                  lat: mouseEvent.latLng.getLat(),
                  lng: mouseEvent.latLng.getLng(),
                },
              },
            ]);
            getAddr(mouseEvent.latLng.getLat(), mouseEvent.latLng.getLng());
          }}
        >
          {isVisible &&
            markers.map((marker, index) => (
              <MapMarker
                key={`${marker.position}-${index}`}
                position={marker.position} // 마커를 표시할 위치
              />
            ))}
        </Map>
      </MapDiv>

      <TourListTopDiv>
        <span className="">관광지 리스트</span>
        {travelPoint.map((el) => {
          return (
            // TourList로 분기하게되면 Mapmarker사용 불가능해서 분기못함 추후에 리덕스에서 가져오면 가능할지도..
            // ex - BE에서 보내주는 값을 리덕스에 정리해서 TourList에서도 받고 Maps에서도 받아서 동시에 처리하도록

            // <TourList
            //   key={el.name + el.x}
            //   name={el.name}
            //   x={el.x}
            //   y={el.y}
            // ></TourList>

            <TListDiv key={el.x}>
              <TNameDiv>
                <a
                  href="#"
                  className=""
                  aria-current="true"
                  onClick={() => {
                    setMarkers([
                      ...markers,
                      {
                        position: {
                          lat: el.x,
                          lng: el.y,
                        },
                      },
                    ]);

                    setAddr([{ name: el.name }]);
                  }}
                >
                  <strong className="">{el.name}</strong>
                </a>
              </TNameDiv>
              <TImgDiv>
                <small>사진넣을거임</small>
              </TImgDiv>
              <TContentDiv>관광지 설명</TContentDiv>
            </TListDiv>
          );
        })}
      </TourListTopDiv>
    </MapPageDiv>
  );
};

export default Maps;

const MapPageDiv = styled.div`
  display: flex;
  flex-direction: row;
`;

const SelectListDiv = styled.div``;
const MapDiv = styled.div``;

const TourListTopDiv = styled.div``;
const TListDiv = styled.div``;
const TNameDiv = styled.div``;
const TImgDiv = styled.div``;
const TContentDiv = styled.div``;
