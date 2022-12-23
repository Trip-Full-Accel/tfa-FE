import React from "react";
import { useState, useEffect } from "react";
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

  const handleTFA = () => {
    const botMessage = createChatBotMessage(
      "여행 경로를 짜주는 웹사이트 입니다. "
    );

    const botMessage2 = createChatBotMessage(
      "info페이지에는 자세한 설명이 있어요"
    );
    const botMessage3 = createChatBotMessage(
      "suggest페이지에는 여행지 추천이있어요"
    );
    const botMessage4 = createChatBotMessage(
      "photo페이지에는 여행지별로 자세한 사진이 있어요"
    );
    const botMessage5 = createChatBotMessage(
      "board페이지에는 이용한 여행지 후기와 모집글들이있어요"
    );
    const botMessage6 = createChatBotMessage(
      "Join을 누르고 회원가입을 진행하시면 최단경로 여행지를 추천받아보실수있어요!"
    );
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage],
    }));
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage2],
    }));

    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage3],
    }));
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage4],
    }));
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage5],
    }));
    setState((prev: any) => ({
      ...prev,
      messages: [...prev.messages, botMessage6],
    }));
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleHello,
            handleJoke,
            handleTFA,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
