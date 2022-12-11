import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/Template";
import Photo from "../components/photo/Photo";
import TfaInfo from "../components/infomation/TfaInfo";
import MyPage from "../components/MyPage/MyPage";
import Maps from "../components/map/Maps";
import Main from "../components/main/Main";
import Kakao from "components/kakao";
import KakaoRedirectHandler from "components/kakaoRedirect";
import NaverLogin from "components/naver";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template></Template>}>
          <Route path="" element={<Main></Main>}></Route>
          <Route path="maps" element={<Maps></Maps>}></Route>
          <Route path="mypage" element={<MyPage></MyPage>}></Route>
          {/* 마이페이지도 나중에 로케이션 펑션에 태워야함 */}

          <Route path="tfaInfo" element={<TfaInfo></TfaInfo>}></Route>
          <Route path="photo" element={<Photo></Photo>}></Route>
          <Route
            path="/kakao"
            element={<KakaoRedirectHandler></KakaoRedirectHandler>}
          ></Route>
          <Route path="/naver" element={<NaverLogin></NaverLogin>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
