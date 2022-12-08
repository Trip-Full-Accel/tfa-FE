import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
// import HeaderList from './HeaderList';
import { useState } from "react";
import { useEffect } from "react";
import "./Header.css";
type Props = {
  value: string;
  name: string;
};
const HeaderList = ({ value, name }: Props) => {
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
    <div
      style={{
        fontSize: "16px",
        margin: "0",
        color: "white",
        justifyContent: "space-evenly",
      }}
      className={
        scrollPosition < 100 ? "original_header_list" : "change_header_list"
      }
    >
      <a
        onClick={() => {
          linkTo(`/${value}`);
        }}
      >
        {name}
      </a>
    </div>
  );
};
export default HeaderList;
