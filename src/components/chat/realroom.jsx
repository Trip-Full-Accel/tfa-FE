import * as StompJs from "@stomp/stompjs";
import axios from "axios";
import { useEffect, useState } from "react";
import SockJS from "sockjs-client";
// import { client } from "stompjs";

const RealRoom = () => {
  const socket = new WebSocket("ws://192.168.0.65:8081/ws");
  //   const sock = new SockJS("http://192.168.0.65:8081/ws");
  // sock.
  const client = new StompJs.Client({
    brokerURL: "ws://192.168.0.65:8081/ws",
    // connectHeaders: {
    //   login: "user",
    //   passcode: "password",
    // },
    debug: function (str) {
      console.log(str);
    },
    reconnectDelay: 5000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });
  socket.onopen = () => {
    console.log("sy");
  };
  //   client.webSocketFactory = () => {
  //     return new SockJS("http://192.168.0.65:8081/ws");
  //   };
  //   client.publish({});

  //   const ws = Stomp.over();
  const [roomId, setRoomId] = useState("");
  const [room, setRoom] = useState({});
  const [sender, setSender] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setRoomId(localStorage.getItem("roomId"));
    //    const id =localStorage.getItem("roomId")
    setSender("id");
    findRoom();
  }, []);

  useEffect(() => {
    if (roomId && sender) {
      console.log("커넥됨");
      //   connect();
      //   client.onConnect(function (frame) {
      //     console.log({ frame });
      //     client.subscribe(
      //       "/sub/chat/rooms/" + localStorage.getItem("roomId"),
      //       function (message) {
      //         const recv = JSON.parse(message.body);
      //         receiveMessage(recv);
      //       }
      //     );
      //     client.publish({
      //       destination: "/pub/chat/message/",
      //       body: {
      //         type: "ENTER",
      //         roomId: localStorage.getItem("roomId"),
      //         sender: "id",
      //       },
      //     });
      //   });
      //   = function (frame) {
      //     console.log({ frame });
      //     client.subscribe(
      //       "/sub/chat/rooms/" + localStorage.getItem("roomId"),
      //       function (message) {
      //         const recv = JSON.parse(message.body);
      //         receiveMessage(recv);
      //       }
      //     );
      //     client.publish({
      //       destination: "/pub/chat/message/",
      //       body: {
      //         type: "ENTER",
      //         roomId: localStorage.getItem("roomId"),
      //         sender: "id",
      //       },
      //     });
      //   };
      //   client.activate();
      console.log(sender);
    }
  }, [roomId, sender]);
  const findRoom = () => {
    axios.get("/chat/room/" + roomId).then((res) => setRoom(res.data));
  };
  const sendMessage = () => {
    // const ws = Stomp.over(sock);
    client.publish({
      destination: "/pub/chat/message/",
      body: { type: "TALK", roomId, sender, message },
    });
    setMessage("");
  };
  const receiveMessage = (recv) => {
    // const ws = Stomp.over(sock);
    setMessages([
      ...messages,
      {
        type: recv.type,
        sender: recv.type == "ENTER" ? "[알림]" : recv.sender,
        message: recv.message,
      },
    ]);
    client.publish(
      {
        destination: "/pub/chat/message/",
        body: { type: "TALK", roomId, sender, message },
      }

      //   {},
      //   JSON.stringify({ type: "TALK", roomId, sender, message })
    );
    setMessage("");
  };

  //   const connect = () => {
  //     // const ws = Stomp.over(sock);
  //     client.connect({});
  //   };
  return (
    <div>
      <div class="container" id="app">
        <div>
          <h2>{roomId}</h2>
        </div>
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text">내용</label>
          </div>
          <input
            type="text"
            class="form-control"
            onChange={(e) => setMessage(e.target.value)}
          />
          <div class="input-group-append">
            <button class="btn btn-primary" onClick={sendMessage}>
              보내기
            </button>
          </div>
        </div>
        <ul class="list-group">
          {messages.map((el) => {
            return (
              <li>
                {el.sender} - {el.message}
              </li>
            );
          })}
        </ul>
        <div></div>
      </div>
    </div>
  );
};
export default RealRoom;
