import { useEffect, useState } from "react";
import "./Pagenation.css";

interface props {
  totalPosts: any;
  postsPerPage: any;
  setCurrentPage: any;
  currentPage: any;
}

const Pagenation = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}: props) => {
  // let pages = [];
  const [pages, setPages] = useState<number[]>([]);
  const pagefunction = () => {
    let temp = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
      temp.push(i);
    }
    setPages(temp);
  };

  useEffect(() => {
    pagefunction();
  }, [totalPosts, postsPerPage]);

  return (
    <div className="pagination">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            onClick={() => setCurrentPage(page)}
            className={page == currentPage ? "active" : ""}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagenation;
