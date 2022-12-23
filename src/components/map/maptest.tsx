import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { fetchGetTourList, mapTest, pointTest } from "store/map/mapReducer";
import { TourList } from "store/map/mapType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";
interface setType {
  setMarkers: React.Dispatch<
    React.SetStateAction<
      {
        position: {
          lat: number;
          lng: number;
        };
      }[]
    >
  >;
  markers: {
    position: {
      lat: number;
      lng: number;
    };
  }[];
}
const MapTest = ({ setMarkers, markers }: setType) => {
  const dispatch = useDispatch<AppDispatch>();

  // 추천여행지 불러오는 메서드
  const reduxTourList = useSelector((state: RootState) => state.map.tourList);
  useEffect(() => {
    const result = dispatch(fetchGetTourList())
      .unwrap()
      .then((res) => setTourListTest({ ...tourListTest, ...res }));
  }, [dispatch]);

  const [tourListTest, setTourListTest] = useState<TourList[]>([
    {
      city: "",
      lat: "",
      content: "",
      lng: "",
      img: "",
    },
  ]);
  const [hasMore, setHasMore] = useState<boolean>(false);

  const TourListTest = () => {
    if (hasMore) {
      setTourListTest(reduxTourList);
      setHasMore(true);
      return;
    }
    setTimeout(() => {
      setTourListTest(reduxTourList);
      setHasMore(false);
    }, 500);
  };

  // 리덕스 전에 set 시키는 state // 마지막에 지울것
  const [selectedData, setSelectedData] = useState<any>([
    {
      city: "",
      lat: "",
      lng: "",
      img: "",
    },
  ]);
  // 리덕스에 보내기위해 set 시키는 state // 마지막에 지울것
  const [selectedDataGoRedux, setSelectedDataGoRedux] = useState<any>([
    {
      city: "",
      lat: "",
      lng: "",
      img: "",
    },
  ]);

  const [div, setDiv] = useState("");

  // let check = false;
  const clickTour = (tourList: any) => {
    setDiv(tourList.id);

    if (div === tourList.id) {
      alert("이미 추가된 경로 입니다!");
    } else {
      setMarkers([
        ...markers,
        {
          position: {
            lat: Number(tourList.lat),
            lng: Number(tourList.lng),
          },
        },
      ]);
      dispatch(mapTest(tourList));
    }

    // setMarkers([
    //   ...markers,
    //   {
    //     position: {
    //       lat: Number(tourList.lat),
    //       lng: Number(tourList.lng),
    //     },
    //   },
    // ]);
    console.log("관광지 이름 : ", tourList.city);
    console.log(tourList.city, "의 위도", tourList.lat);
    console.log(tourList.city, "의 경도", tourList.lng);
    // setSelectedData([{ city: city, lat: lat, lng: lng, img: img }]);
    // console.log(selectedData);
    // // console.log(img);
    // setSelectedDataGoRedux([...selectedDataGoRedux, selectedData]);
    // setSelectedData("");
    // dispatch(pointTest(tourList));
    //
    // setSelectedDataGoRedux([]);
    // setSelectedDataGoRedux([]);
  };
  // const refdd = useRef()
  return (
    <TourListDiv>
      <InfiniteScroll
        dataLength={tourListTest.length}
        next={TourListTest}
        hasMore={hasMore}
        loader={<h6>Loading</h6>}
        height={600}
        endMessage={<p style={{ textAlign: "center" }}></p>}
      >
        {reduxTourList.map((i, index) => (
          <TourContentDiv key={index}>
            <div
              onClick={() => {
                clickTour(i);
              }}
            >
              <div>
                <img
                  style={{ width: "50px", height: "50px" }}
                  src={`${i.img}`}
                ></img>
                {i.city}
              </div>
              <div>{i.content}</div>
            </div>
          </TourContentDiv>
        ))}
      </InfiniteScroll>
    </TourListDiv>
  );
};

export default MapTest;

const TourListDiv = styled.div`
  width: 100%;
`;

const TourContentDiv = styled.div`
  border-radius: 5px;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
  background-color: #fafafa;
  border: 1px rgba(0, 0, 0, 0.2) solid;

  /* 그림자 부분 */
  box-shadow: 20px 20px 20px gray;
`;
