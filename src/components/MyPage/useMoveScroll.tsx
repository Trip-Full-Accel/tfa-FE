import { useRef } from "react";

const UseMoveScroll = () => {
  const element1 = useRef<any>();
  const element2 = useRef<any>();
  const element3 = useRef<any>();
  const element4 = useRef<any>();
  const element5 = useRef<any>();
  const element6 = useRef<any>();
  const onMoveToElement = () => {
    element1.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const onMoveToElement2 = () => {
    element2.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const onMoveToElement3 = () => {
    element3.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const onMoveToElement4 = () => {
    element4.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const onMoveToElement5 = () => {
    element5.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  const onMoveToElement6 = () => {
    element6.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };
  return {
    element1,
    element2,
    element3,
    element4,
    element5,
    element6,
    onMoveToElement,
    onMoveToElement2,
    onMoveToElement3,
    onMoveToElement4,
    onMoveToElement5,
    onMoveToElement6,
  };
};

export default UseMoveScroll;
