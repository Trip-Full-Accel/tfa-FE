import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroller";

interface props {
  name: string;
  x: string;
  y: string;
}

const TourList = ({ name, x, y }: props) => {
  const [addr, setAddr] = useState([{ name: "서울시청" }]);

  const [markers, setMarkers] = useState<any[]>([
    {
      // 서울 시청 좌표
      position: {
        lat: parseInt(x),
        lng: parseInt(y),
      },
    },
  ]);
  useEffect(() => {
    setMarkers([
      {
        position: {
          lat: x,
          lng: y,
        },
      },
    ]);
  }, [setMarkers]);

  const fetchItems = () => {};

  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={fetchItems}
      hasMore={true || false}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
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
                    lat: parseInt(x),
                    lng: parseInt(y),
                  },
                },
              ]);
              setAddr([{ name: name }]);
            }}
          >
            <p>dd</p>
            <strong className="">{name}</strong>
          </a>
          <div className="">
            <small>사진넣을거임</small>
          </div>
          <div className="">관광지 설명</div>
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default TourList;
