import { BrowserRouter, Route, Routes } from "react-router-dom";
import Template from "../components/Template";
import Photo from "../components/photo/Photo";
import TfaInfo from "./../components/infomation/TfaInfo";
import MyPage from "./../components/MyPage/MyPage";
import Maps from "./../components/map/Maps";
import Main from "./../components/main/Main";

const MyRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Template></Template>}>
          <Route path="" element={<Main></Main>}></Route>
          <Route path="maps" element={<Maps></Maps>}></Route>
          {/* <Route path="login" element={""}></Route> */}
          <Route path="mypage" element={<MyPage></MyPage>}></Route>
          <Route path="tfaInfo" element={<TfaInfo></TfaInfo>}></Route>
          <Route path="photo" element={<Photo></Photo>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default MyRoute;
