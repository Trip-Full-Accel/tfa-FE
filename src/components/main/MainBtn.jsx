import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
const MainBtn = ({ name, x, y }) => {
  const navigate = useNavigate();
  const tripStart = (path, x, y) => {
    navigate(path, { state: { x: x, y: y } });
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
      onClick={() => tripStart("/maps", x, y)}
    >
      {name}
    </Button>
  );
};
export default MainBtn;
