import axios from "axios";
import { useState, useEffect, useRef, useCallback } from "react";
import { TourList } from "store/map/mapType";

const MapTest2 = () => {
  const [list, setList] = useState<TourList[]>([]);
  const [page, setPage] = useState<any>(1);
  const [load, setLoad] = useState<any>(1);
  const preventRef = useRef<any>(true);
  const obsRef = useRef<any>(null);

  useEffect(() => {
    getDog();
    const observer = new IntersectionObserver(obsHandler, { threshold: 0.5 });
    if (obsRef.current) observer.observe(obsRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  const obsHandler = (entries: any) => {
    const target = entries[0];
    if (target.isIntersecting && preventRef.current) {
      preventRef.current = false;
      setPage((prev: any) => prev + 1);
    }
  };

  const getDog = useCallback(async () => {
    //글 불러오기
    console.log("투어리스트 불러오기 시작");
    setLoad(true); //로딩 시작
    const res = await axios({
      method: "GET",
      url: `http://192.168.0.146:8080/tour/list`,
    });
    console.log(res.data);
    if (res.data) {
      setList((prev: any) => [...prev, { ...res.data }]); //리스트 추가
      preventRef.current = true;
    } else {
      console.log(res); //에러
    }
    setLoad(false); //로딩 종료
  }, [page]);
  //   console.log(JSON.stringify(list));
  return (
    <>
      <div className="wrap min-h-[100vh]">
        {list && (
          <>
            {list.map(
              (li: any, i) => {
                return <div key={i}>{li[0].city}</div>;
              }

              //   <img
              //     key={li.id}
              //     className="opacity-100 mx-auto mb-6"
              //     src={li.url}
              //     alt={li.dke}
              //     width={"500px"}
              //     height={"300px"}
              //   />
            )}
          </>
        )}
        {load ? (
          <div className="py-3 bg-blue-500 text-center">로딩 중</div>
        ) : (
          <></>
        )}
        <div ref={obsRef} className="py-3 bg-red-500 text-white text-center">
          옵저버 Element
        </div>
      </div>
    </>
  );
};

export default MapTest2;
