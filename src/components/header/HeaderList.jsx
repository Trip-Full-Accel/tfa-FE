import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";

const HeaderList = ({ value, name }) => {
  const navigate = useNavigate();
  const linkTo = (path) => {
    navigate(path);
  };
  return (
    <Nav.Link
      onClick={() => {
        linkTo(`/${value}`);
      }}
    >
      {name}
    </Nav.Link>
  );
};
export default HeaderList;
