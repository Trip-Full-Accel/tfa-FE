import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
// import HeaderList from './HeaderList';
import { useCallback, useState } from "react";
import { useEffect } from "react";

import "./Header.css";

type Props = {
  value: string;
  name: string;
};
const HeaderList = ({ value, name }: Props) => {
  const [lgShow, setLgShow] = useState(false);
  // const [isOpenModal, setOpenModal] = useState<boolean>(false);

  // const onClickToggleModal = useCallback(() => {
  // setOpenModal(!isOpenModal);
  // console.log("모달 실행됨");
  // }, [isOpenModal]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });
  const navigate = useNavigate();
  const linkTo = (path: string) => {
    navigate(path);
  };
  return (
    <ul
      style={{
        listStyle: "none",
        fontSize: "16px",
        margin: "0",
        color: "white",
        justifyContent: "space-between",
      }}
      className={
        scrollPosition < 10 ? "original_header_list" : "change_header_list"
      }
    >
      <li
        // listStyle:"none",
        style={{ padding: "0 10px" }}
      >
        <a
          onClick={() => {
            linkTo(`/${value}`);
          }}
        >
          {name}
        </a>
      </li>
    </ul>
  );
};
export default HeaderList;
