import React from "react";

const MessageParser = ({ children, actions }: any) => {
  const parse = (message: any) => {
    console.log(message);
    if (message.includes("안녕")) {
      actions.handleHello();
    } else if (message.includes("설명")) {
      actions.handleTFA();
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
