import { useState } from "react";

interface props {
  name: string;
  x: number;
  y: number;
}

const TourList = ({ name, x, y }: props) => {
  const [addr, setAddr] = useState([{ name: "서울시청" }]);

  const [markers, setMarkers] = useState([
    {
      // 서울 시청 좌표
      position: {
        lat: 37.5666805,
        lng: 126.9784147,
      },
    },
  ]);
  return (
    <div key={name}>
      <div className="">
        <a
          href="#"
          className=""
          aria-current="true"
          onClick={() => {
            setMarkers([
              ...markers,
              {
                position: {
                  lat: x,
                  lng: y,
                },
              },
            ]);
            setAddr([{ name: name }]);
          }}
        >
          <div className="">
            <strong className="">{name}</strong>
            <small>사진넣을거임</small>
          </div>
          <div className="">관광지 설명</div>
        </a>
      </div>
    </div>
  );
};

export default TourList;
