import React from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: any) => {
    console.log(message);
    if (message.includes("안녕")) {
      actions.handleHello();
    } else if (message.includes("문의")) {
      actions.questionHandler();
    } else if (message.includes("장소등록")) {
      actions.placeHandler();
    } else if (message.includes("내경로")) {
      actions.myRouteHandler();
    } else if (message.includes("사용방법")) {
      actions.howToUseHandler();
    } else if (message.includes("추천")) {
      actions.suggestHandler();
    } else if (message.includes("게시판")) {
      actions.boardHandler();
    } else if (message.includes("고객센터")) {
      actions.customerCenterHandler();
    } else {
      actions.handleJoke();
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions: {},
        });
      })}
    </div>
  );
};

export default MessageParser;
