import React, { useState, useEffect, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import axios from "axios";

const MapTest3 = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const [ref, inView] = useInView();

  // 서버에서 아이템을 가지고 오는 함수
  const getItems = useCallback(async () => {
    setLoading(true);
    await axios.get(`http://192.168.0.146:8080/tour/list`).then((res) => {
      setItems((prevState) => [...prevState, res.data]);
      console.log(res.data);
    });
    setLoading(false);
  }, [page]);

  console.log(items);
  // `getItems` 가 바뀔 때 마다 함수 실행
  useEffect(() => {
    getItems();
  }, [getItems]);

  useEffect(() => {
    // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
    if (inView && !loading) {
      setPage((prevState) => prevState + 1);
    }
  }, [inView, loading]);

  return (
    <div className="list">
      {items.map((el, idx) => {
        <div key={idx}>
          {items.length - 1 == idx ? <div>1111</div> : <div>22222</div>}
        </div>;
      })}
    </div>
  );
};

export default MapTest3;
