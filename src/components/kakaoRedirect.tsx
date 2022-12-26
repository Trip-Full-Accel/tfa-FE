// 리다이렉트될 화면
// KakaoRedirectHandeler.js

import axios from "axios";
import { useEffect } from "react";
import api from "axios";

const { Kakao } = window;

const KakaoRedirectHandler = () => {
  useEffect(() => {
    // let params = new URL(document.location.toString()).searchParams;
    let params = new URL(window.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    // let code2 = params2.get("code"); // 인가코드 받는 부분
    console.log(code);
    // console.log(code2);
    let grant_type = "authorization_code";
    let client_id = "82e8a356b706e9f7b99ef65f77a5fd43";
    let uri = "http://localhost:3000/kakao";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${uri}&code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        Kakao.Auth.setAccessToken(res.data.access_token);
        Kakao.API.request({
          url: "/v2/user/me",
          success: function (response: any) {
            console.log(response.properties.nickname);
            // response[0]
          },
          fail: function (error: any) {
            console.log(error);
          },
        });
        api
          .post("http://192.168.0.148:8081/users", {
            // accessToken: res.data.access_token,
            // client_id,
            nickname: "test2",
            userCode: "testcode2",
          })
          .then((res: any) => {
            console.log("res 데이터", res);
            localStorage.setItem("userId", res.data);
          });
      });

    // await axios
    //   .post(
    //     `https://kauth.kakao.com/oauth/token?
    //     grant_type="authorization_code"
    //     &client_id="82e8a356b706e9f7b99ef65f77a5fd43"
    //     &redirect_uri="http://localhost:3000/kakao"
    //     &code="Yx3cDj0ayzVU-hUYacyZlinFvLNVmXxpC3HQxz5bn89A1Pge-MZPvu5KR9lIiclOCsGhkQo9dNoAAAGE_QBB3w"
    //     `,
    //     {
    //       headers: {
    //         "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("res" + res);
    //     // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
    //   });
  }, []);

  return <div>카톡 로그인리다이렉트 페이지</div>;
};

export default KakaoRedirectHandler;
