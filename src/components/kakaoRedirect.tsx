// 리다이렉트될 화면
// KakaoRedirectHandeler.js

import axios from "axios";
import { useEffect } from "react";

const KakaoRedirectHandler = () => {
  useEffect(() => {
    let params = new URL(document.location.toString()).searchParams;
    let code = params.get("code"); // 인가코드 받는 부분
    console.log(code);
    let grant_type = "authorization_code";
    let client_id = "82e8a356b706e9f7b99ef65f77a5fd43";
    let uri = "http://localhost:3000/";

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?
        grant_type=${grant_type}
        &client_id=${client_id}
        &redirect_uri=${uri}
        &code=${code}`,
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res) => {
        console.log(res);
        // res에 포함된 토큰 받아서 원하는 로직을 하면된다.
      });
  }, []);

  return (
    <div>
      사실 이페이지는 크게 의미 없다. 첫화면으로 로직이 끝나면 이동시켜주면
      된다.
    </div>
  );
};

export default KakaoRedirectHandler;
