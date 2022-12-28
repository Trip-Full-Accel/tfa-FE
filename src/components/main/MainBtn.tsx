import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const MainBtn = ({ name, x, y }: any) => {
  const navigate = useNavigate();
  const tripStart = (path: string) => {
    navigate(path);
    //, { state: { x: x, y: y } }
  };
  return (
    <Button
      key={name}
      style={{
        backgroundColor: "#FAFAFA",
        color: "black",
        border: "0px",
        fontSize: "30px",
        height: "100px",
      }}
      onClick={() => tripStart("/maps")}
    >
      {name}
    </Button>
  );
};
export default MainBtn;
