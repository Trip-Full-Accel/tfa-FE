import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import "./Pagenation.css";
const BList = (props: any) => {
  const { data, keyword, searchKey, select } = props;
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 6;
  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    console.log(select);
    console.log(searchKey);
    console.log(keyword);
    if (select === "리뷰") {
      setCurrentItems(
        data
          .filter((el: any) => el.selected === "리뷰")
          .slice(itemOffset, endOffset)
      );
    } else if (select === "모집") {
      setCurrentItems(
        data
          .filter((el: any) => el.selected === "모집")
          .slice(itemOffset, endOffset)
      );
    } else if (searchKey === "title") {
      setCurrentItems(
        data
          .filter((el: any) => el.title.includes(keyword))
          .slice(itemOffset, endOffset)
      );
    } else if (searchKey === "content") {
      setCurrentItems(
        data
          .filter((el: any) => el.content.includes(keyword))
          .slice(itemOffset, endOffset)
      );
    } else if (searchKey === "writer") {
      setCurrentItems(
        data
          .filter((el: any) => el.writer.includes(keyword))
          .slice(itemOffset, endOffset)
      );
    } else if (keyword === null) {
      setCurrentItems(
        data
          // .filter((el: any) => el.writer.includes(keyword))
          .slice(itemOffset, endOffset)
      );
    }
    setPageCount(Math.ceil(data.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, data, keyword, select, searchKey]);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % data.length;
    setItemOffset(newOffset);
  };
  const navigate = useNavigate();
  const goDetail = (id: number) => {
    console.log(id);
    navigate(`/boardDetail/${id}`, {
      state: id,
    });
  };
  const [isSelect, setSelect] = useState([false, false]);
  return (
    <div>
      <MainDiv>
        {keyword
          ? currentItems
              // .filter((el: any) => el.title.includes(keyword))
              // .slice(itemOffset, itemOffset + itemsPerPage)
              .map((el: any, i) => {
                return (
                  <ContentDiv onClick={() => goDetail(el.id)} key={i}>
                    <img
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "40px",
                        opacity: "0.5",
                      }}
                      src="/img/seoul/seoul3.jpg"
                    />
                    <TitleDiv>{el.title}</TitleDiv>
                    {/* <div>{el.content}</div> */}
                    {/* <div>{el.writer}</div> */}
                    {/* <div>{el.regdate}</div> */}
                    <LikeDiv>
                      <i className="xi-heart xi-x" />
                      <tr></tr>1{el.like}
                    </LikeDiv>
                  </ContentDiv>
                );
              })
          : currentItems.map((el: any) => {
              return (
                <ContentDiv onClick={() => goDetail(el.id)} key={el.title}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: "40px",
                      opacity: "0.5",
                    }}
                    src="/img/seoul/seoul3.jpg"
                  />
                  <TitleDiv>{el.title}</TitleDiv>
                  {/* <div>{el.content}</div> */}
                  {/* <div>{el.writer}</div> */}
                  {/* <div>{el.regdate}</div> */}
                  <LikeDiv>
                    <i className="xi-heart xi-x" />
                    <tr></tr>1{el.like}
                  </LikeDiv>
                </ContentDiv>
              );
            })}
      </MainDiv>
      <div
        style={{
          lineHeight: "37px",
        }}
      >
        <ReactPaginate
          //   breakLabel="..."
          nextLabel="다음 >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< 이전"
          // renderOnZeroPageCount={null}
          breakLabel={"~"}
          /////////
          activeClassName={"item active "}
          breakClassName={"item break-me "}
          containerClassName={"pagination"}
          disabledClassName={"disabled-page"}
          marginPagesDisplayed={1}
          nextClassName={"item next "}
          pageClassName={"item pagination-page "}
          previousClassName={"item previous"}
        />
      </div>
    </div>
  );
};
export default BList;
const MainDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 40px;
`;
const ContentDiv = styled.div`
  width: 350px;
  height: 300px;
  background-color: #bcb8bcaa;
  margin: 1.5rem;
  border-radius: 40px;
  position: relative;
  &:hover {
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 25%), 0 2px 10px 0 rgb(0 0 0 / 25%) !important;
    background-color: #bcb8bcaa;
    cursor: pointer;
  }
`;
const TitleDiv = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  font-size: 32px;
  font-weight: bold;
`;
const LikeDiv = styled.div`
  padding: 30px;
  position: absolute;
  top: 0;
  right: 0;
`;
