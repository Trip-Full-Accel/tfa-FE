const BoardDetail = () => {
  return (
    <>
      <div style={{ display: "flex", padding: "2rem" }}>
        <div>제목</div>
        <div>작성자</div>
        <div>작성일</div>
        <div>조회수</div>
      </div>
      <div style={{ height: "500px" }}>내용</div>
      <div>좋아요 </div>
    </>
  );
};

export default BoardDetail;
