import { useEffect, useRef } from "react";
import { ReactComponent as Info2 } from "../../svg/icon.svg";
import { ReactComponent as Info22 } from "../../svg/icon2.svg";
import { ReactComponent as Info23 } from "../../svg/icon3.svg";
import { ReactComponent as Info24 } from "../../svg/icon4.svg";
import "./info2.css";

import "./info2.css";
const TfaInfo2 = () => {
  useEffect(() => {
    const content1 = document.querySelector(".content1");
    const content2 = document.querySelector(".content2");
    const content3 = document.querySelector(".content3");

    console.log(content1, content2, content3);

    const path1 = document.querySelector(".path2");
    const path2 = document.querySelector(".path3");
    const path3 = document.querySelector(".path4");
    // // console.log(path1, path2, path3);

    // const path1 = useRef(null);

    // const path1Length = path1.getTotalLength();
    // const path2Length = path2.getTotalLength();
    // const path3Length = path3.getTotalLength();
    // path1.style.strokeDasharray = path1Length + " " + path1Length;
    // path1.style.strokeDashoffset = calcDashoffset(
    //   window.innerHeight * 0.8,
    //   content1,
    //   path1Length
    // );

    // path2.style.strokeDasharray = path2Length + " " + path2Length;
    // path2.style.strokeDashoffset = path2Length;

    // path3.style.strokeDasharray = path3Length + " " + path3Length;
    // path3.style.strokeDashoffset = path3Length;

    // function calcDashoffset(scrollY: any, element: any, length: any) {
    //   const ratio = (scrollY - element.offsetTop) / element.offsetHeight;
    //   const value = length - length * ratio;
    //   return value < 0 ? 0 : value > length ? length : value;
    // }

    // function scrollHandler() {
    //   const scrollY = window.scrollY + window.innerHeight * 0.8;
    //   path1.style.strokeDashoffset = calcDashoffset(
    //     scrollY,
    //     content1,
    //     path1Length
    //   );
    //   path2.style.strokeDashoffset = calcDashoffset(
    //     scrollY,
    //     content2,
    //     path2Length
    //   );
    //   path3.style.strokeDashoffset = calcDashoffset(
    //     scrollY,
    //     content3,
    //     path3Length
    //   );
    // }

    // window.addEventListener("scroll", scrollHandler);
  });

  return (
    <div>
      인포2테스트
      <Info2></Info2>
      <Info22></Info22>
      <Info23></Info23>
      <Info24></Info24>
    </div>
  );
};
export default TfaInfo2;
