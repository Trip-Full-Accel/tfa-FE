import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
// import HeaderList from './HeaderList';
type Props = {
  value: string;
  name: string;
};
const HeaderList = ({ value, name }: Props) => {
  const navigate = useNavigate();
  const linkTo = (path: string) => {
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
