import { createChatBotMessage } from "react-chatbot-kit";

const config = {
  initialMessages: [
    createChatBotMessage(
      "안녕하세요, TripFullAccel입니다. 원하시는 키워드를 작성해주시면 안내해드리겠습니다."
    ),
    createChatBotMessage("[문의] [장소등록] [내경로] [사용방법] [고객센터]"),
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
