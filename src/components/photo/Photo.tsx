import Slide from "components/slide/Slide";
import { useEffect, useRef, useState } from "react";

const Photo = () => {
  const slideRef = useRef();
  const [count, setCount] = useState(1);
  const [slideList, setSlideList] = useState([]);

  useEffect(() => {
    const interval = setTimeout(() => {
      // setCount(() => {
      // if (count < slideList.length) {
      //   setCount(count + 1);
      // } else {
      //   setCount(1);
      // }
    });

    handleSlider(count);

    //   return () => clearTimeout(interval);
    // }, 6000);
  });

  const handleSlider = (count: any) => {
    // if (count === 5) {
    //   slideRef.current.style.transform = "translateX(0)";
    // } else {
    //   slideRef.current.style.transform = `translateX(-${
    //     window.innerWidth * count
    //   }px)`;
    // }
  };

  return (
    <main className="main">
      <div className="mainSlide">
        <Slide
        // slideRef={slideRef}
        // count={count}
        // slideList={slideList}
        // handleCount={handleCount}
        // handleSlider={handleSlider}
        />
      </div>
    </main>
  );
};

export default Photo;
