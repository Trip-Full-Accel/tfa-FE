import axios from "axios";
import { Button } from "reactstrap";
import SockJs from "sockjs-client";
import StompJs from "stompjs";
//stomp와 sockjs 패키지로 깔고 임포트!!

const Chat = () => {
  const goChat = () => {
    console.log(1);
    axios.get("http://192.168.0.65:8081/chat/room").then((response) => {
      console.log(response);
      window.open(response.data);
      return <p dangerouslySetInnerHTML={{ __html: response.data }}></p>;
    });
  };

  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button onClick={goChat}>챗방연결</Button>
    </div>
  );
};
export default Chat;
