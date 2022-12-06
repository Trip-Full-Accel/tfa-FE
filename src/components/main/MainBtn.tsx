import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

interface props {
  name: string;
  x: string;
  y: string;
}

const MainBtn = ({ name, x, y }: props) => {
  const navigate = useNavigate();
  const tripStart = (path: string) => {
    navigate(path);
    //, { state: { x: x, y: y } }
  };

  return (
    <Button
      key={name}
      style={{
        backgroundColor: "#fafafa",
        color: "black",
        border: "0px",
        fontSize: "30px",
      }}
      onClick={() => tripStart("/maps")}
    >
      {name}
    </Button>
  );
};
export default MainBtn;
