import Nav from "react-bootstrap/Nav";
import { useLocation, useNavigate } from "react-router-dom";
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

  // locaion
  const location = useLocation();
  const loc = location.pathname;

  const locFunction = () => {
    if (loc == "/tfaInfo") {
      return "info_header_list";
    } else if (loc == "/photo") {
      return "info_header_list";
    } else if (loc == "/maps") {
      return "info_header_list";
    } else if (loc == "/") {
      if (scrollPosition < 10) {
        return "original_header_list";
      } else {
        return "change_header_list";
      }
    }
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
        // loc == "/tfaInfo"
        //   ? "info_header_list"
        //   : scrollPosition < 10
        //   ? "original_header_list"
        //   : "change_header_list"
        locFunction()
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
