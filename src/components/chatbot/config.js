import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "Trup Full Accel에 방문하신걸 환영합니다. 궁금하신게 있다면 '설명' 이라고 입력해주세요."
    ),
  ],
  createChatBotMessage,
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
    },
    chatButton: {
      backgroundColor: "#7c74ab",
    },
  },
};

const message = createChatBotMessage("Hello world!");

const messageWithProperties = createChatBotMessage("Hello world!", {
  widget: "my-widget",
  payload: {}, // any value I want to send to the given widget or message
  delay: 1000,
});
export default config;
