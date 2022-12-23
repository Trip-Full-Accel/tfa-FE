import Account from "components/account/account";
import BoardDetail from "components/board/boardDetail";
import Edit from "components/board/boardEditor";
import BoardModify from "components/board/boardModify";
import Regist from "components/board/Regist";
import ForgotPw from "components/forgotPw/forgotPw";
import KakaoRedirectHandler from "components/kakaoRedirect";
import GLogin from "components/lgGoogle";
import NaverLogin from "components/naver";
import Suggest from "components/suggest/suggest";
import BusanSlide from "components/slide/BusanSlide";
import DaeguSlide from "components/slide/DaeguSlide";
import DaejeonSlide from "components/slide/DaejeonSlide";
import GangwondoSlide from "components/slide/GangwondoSlide";
import JejuSlide from "components/slide/JejuSlide";
import PohangSlide from "components/slide/PohangSlide";
import SeoulSlide from "components/slide/SeoulSlide";
import YeosuSlide from "components/slide/YeosuSlide";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TfaInfo from "../components/infomation/TfaInfo";
import Main from "../components/main/Main";
import Maps from "../components/map/Maps";
import MyPage from "../components/MyPage/MyPage";
import Photo from "../components/photo/Photo";
import Template from "../components/Template";
import Board from "./../components/board/board";
import MapTest from "./../components/map/maptest";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template></Template>}>
          <Route path="" element={<Main></Main>}></Route>
          <Route path="account" element={<Account></Account>}></Route>
          <Route path="maps" element={<Maps></Maps>}></Route>
          <Route path="mypage" element={<MyPage></MyPage>}></Route>
          {/* 마이페이지도 나중에 로케이션 펑션에 태워야함 */}
          <Route path="tfaInfo" element={<TfaInfo></TfaInfo>}></Route>
          <Route path="/edit" element={<Edit></Edit>}></Route>
          <Route path="photo" element={<Photo></Photo>}></Route>
          <Route path="photo/busan" element={<BusanSlide></BusanSlide>}></Route>
          <Route path="photo/seoul" element={<SeoulSlide></SeoulSlide>}></Route>
          <Route path="photo/daegu" element={<DaeguSlide></DaeguSlide>}></Route>
          <Route
            path="photo/daejeon"
            element={<DaejeonSlide></DaejeonSlide>}
          ></Route>
          <Route
            path="photo/gangwondo"
            element={<GangwondoSlide></GangwondoSlide>}
          ></Route>
          <Route path="photo/yeosu" element={<YeosuSlide></YeosuSlide>}></Route>
          <Route
            path="photo/pohang"
            element={<PohangSlide></PohangSlide>}
          ></Route>
          <Route path="photo/jeju" element={<JejuSlide></JejuSlide>}></Route>
          <Route path="board" element={<Board></Board>}></Route>
          <Route
            path="/kakao"
            element={<KakaoRedirectHandler></KakaoRedirectHandler>}
          ></Route>
          <Route path="/naver" element={<NaverLogin></NaverLogin>}></Route>
          <Route path="/google" element={<GLogin></GLogin>}></Route>
          <Route path="/regist" element={<Regist></Regist>}></Route>
          <Route path="/account" element={<Account></Account>}></Route>
          <Route path="/forgotPw" element={<ForgotPw></ForgotPw>}></Route>
          <Route path="/suggest" element={<Suggest></Suggest>}></Route>
          {/* <Route path="/maptest" element={<MapTest></MapTest>}></Route> */}
          <Route
            path="/boardModify/:boardId"
            element={<Regist></Regist>}
          ></Route>
          <Route
            path="/boardDetail/:boardId"
            element={<BoardDetail></BoardDetail>}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
