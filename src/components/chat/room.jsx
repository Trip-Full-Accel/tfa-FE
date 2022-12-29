import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const ChatRoom = () => {
  const [data, setData] = useState("");
  const [chatRoom, setChatRoom] = useState([]);

  useEffect(() => {
    findAll();
  }, []);
  const location = useParams();
  //   const loc = useLocation();
  const findAll = () => {
    axios.get("http://192.168.0.65:8081/chat/rooms").then((response) => {
      setChatRoom(response.data);
    });
  };

  const createRoom = () => {
    if (data === "") {
      alert("방제목입력");
      return;
    } else {
      const body = { ...location, name: data };
      axios
        .post("http://192.168.0.65:8081/chat/room?name=" + data)
        .then((response) => {
          alert(response.data.name + " 방생성 성공");
          setData("");
          findAll();
        })
        .catch((reponse) => alert("fail"));
    }
  };
  const navigate = useNavigate();
  const enterRoom = (roomId) => {
    const kakaoId = localStorage.getItem("kakaoId");
    localStorage.setItem("roomId", roomId);
    navigate("/chat/room/enter/" + roomId);
  };
  return (
    <div class="container" id="app">
      <div class="row">
        <div class="col-md-12">
          <h3>채팅방 리스트</h3>
        </div>
      </div>
      <div class="input-group">
        <div class="input-group-prepend">
          <label class="input-group-text">방제목</label>
        </div>
        <input
          type="text"
          class="form-control"
          onChange={(e) => setData(e.target.value)}
        />
        <div class="input-group-append">
          <button class="btn btn-primary" onClick={createRoom}>
            채팅방 개설
          </button>
        </div>
        <ul class="list-group">
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          {chatRoom?.map((el) => {
            return (
              <li key={el.id} onClick={() => enterRoom(el.roomId)}>
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ChatRoom;
