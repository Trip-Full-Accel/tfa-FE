import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BoardList } from "store/board/boardType";
import { AppDispatch, RootState } from "store/store";
import styled from "styled-components";

const BList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [boardList, setBoardList] = useState<BoardList[]>([]);
  const bList = useSelector((state: RootState) => state.board.board);

  const lastPage =
    bList.length % 10 === 0 ? bList.length / 10 : bList.length / 10 + 1; // 마지막 페이지
  const [page, setPage] = useState(1); // 처음 페이지는 1이다.
  //   const [data, setData] = useState(9);

  useEffect(() => {
    // console.log(bList);
    // setBoardList(bList);
    // setData(/* fetch(또는 전체 데이터에서 slice)로 현재 page의 데이터를 가져온다. */);
    // 한 페이지에 10개씩 보여준다.
    if (page === lastPage) {
      // 마지막 페이지는 데이터가 10개보다 부족할 수도 있다.
      setBoardList(bList.slice(10 * (page - 1)));
    } else {
      setBoardList(bList.slice(10 * (page - 1), 10 * (page - 1) + 9));
    }
  }, [bList, page]);

  const handlePage = (e: any) => {
    const nowPageInt = parseInt(e.target.outerText);
    setPage(nowPageInt);
  };

  return (
    <>
      {boardList.map((el: any) => {
        return (
          <ContentDiv key={el.id}>
            <TitleDiv>{el.title}</TitleDiv>
            {/* <div>{el.content}</div> */}
            {/* <div>{el.writer}</div> */}
            {/* <div>{el.regdate}</div> */}
            <LikeDiv>{el.like}</LikeDiv>
          </ContentDiv>
        );
      })}
      <div>
        {/* <ReactPaginate
          pageCount={boardList.length}
          pageRangeDisplayed={9}
          previousLabel={"이전"}
          nextLabel={"다음"}
          onPageChange={(e) => handlePage(e)}
        /> */}
      </div>
    </>
  );
};

export default BList;

const ContentDiv = styled.div`
  width: 350px;
  height: 300px;
  background-color: #bcb8bcaa;
  margin: 1.5rem;
  border-radius: 40px;

  position: relative;
  &:hover {
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%) !important;
    background-color: #bcb8bcaa;
    cursor: pointer;
  }
`;

const TitleDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
`;

const LikeDiv = styled.div`
  float: right;
  padding: 30px;
`;
