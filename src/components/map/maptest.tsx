import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

const MapTest = () => {
  const [items, setItems] = useState({
    items: Array.from({ length: 20 }),
    hasMore: true,
  });

  const fetchMoreData = () => {
    if (items.items.length >= 700) {
      setItems({ ...items, hasMore: false });
      return;
    }
    setTimeout(() => {
      setItems({
        ...items,
        items: items.items.concat(Array.from({ length: 20 })),
      });
    }, 500);
  };

  return (
    <TourListDiv>
      <InfiniteScroll
        dataLength={items.items.length}
        next={fetchMoreData}
        hasMore={items.hasMore}
        loader={<h6>Loading</h6>}
        height={600}
        endMessage={<p style={{ textAlign: "center" }}></p>}
      >
        {items.items.map((i, index) => (
          <TourContentDiv key={index}>관광지 -#{index}</TourContentDiv>
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
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin-top: 3px;
  margin-bottom: 3px;
`;
