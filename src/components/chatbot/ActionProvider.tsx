import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const ActionProvider = ({ createChatBotMessage, setState, children }: any) => {
  const handleHello = () => {
    const botMessage = createChatBotMessage("안녕하세요");

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const jokeFunc = () => {
    var jokeList = [];
    jokeList.push("뭐라는거야");
    jokeList.push("알아듣게질문해라");
    jokeList.push("질문좀 똑바로....");
    jokeList.push("알수없네;;");
    jokeList.push("설명, 정보, 추천 이런걸로 물어봐 좀!");
    jokeList.push("못해먹겠네 진짜..");
    jokeList.push("답답하네... ");
    jokeList.push("다음 질문");
    jokeList.push("제발..");
    jokeList.push("뭐하는거야");
    jokeList.push("그만!!!!!");
    jokeList.push("잠깐만..");
    jokeList.push("please");
    jokeList.push("살려주라좀...");
    jokeList.push("나도 좀 먹고살자");
    let random = Math.round(Math.random() * 14 + 1);
    let jokeRandom = jokeList[random - 1];
    return jokeRandom;
  };
  const handleJoke = () => {
    const botMessage = createChatBotMessage(jokeFunc());

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const questionHandler = () => {
    const botMessage = createChatBotMessage(
      "TripFullAccel 고객센터에서 연락드리겠습니다. 문의내용과 연락처를 남겨주세요"
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const placeHandler = () => {
    const botMessage = createChatBotMessage(
      "새로 추가된 관광지 이름과 주소를 알려주세요. 추후 업데이트에 반영해드릴게요 :)"
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  const myRouteHandler = () => {
    const greeting =
      "<span><a style=font-size:16px;color:#faaf88;font-weight:bold href=mypage>[마이페이지]</a> 버튼 을 누르면 갈 수 있어요 </span>";
    const botMessage = createChatBotMessage(
      <p dangerouslySetInnerHTML={{ __html: greeting }}></p>
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const howToUseHandler = () => {
    const botMessage = createChatBotMessage(
      "info 페이지로 안내드릴게요. info페이지에 자세하게 설명되어 있어요 :D"
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };
  const customerCenterHandler = () => {
    const botMessage = createChatBotMessage(
      "TFA 고객센터에서 연락드리겠습니다. 문의내용과 연락처를 남겨주세요"
    );

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleJoke,
            questionHandler,
            placeHandler,
            myRouteHandler,
            howToUseHandler,
            customerCenterHandler,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
