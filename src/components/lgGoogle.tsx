// import * as React from "react";
// import GoogleLogin from "react-google-login";
import { useState } from "react";
const lgGoogle = () => {
  //클라이언트 ID (환경변수)
  let googleClientId: string =
    "211887729069-e1tmdi51mma8bkhmd8b5k6rq29tf8s21.apps.googleusercontent.com";
  //사용자 정보를 담아둘 userObj
  const [userObj, setUserObj] = useState({
    email: "",
    name: "",
  });
  //로그인 성공시 res처리
  const onLoginSuccess = (res: any) => {
    setUserObj({
      ...userObj,
      email: res.profileObj.email,
      name: res.profileObj.name,
    });
  };
  return (
    <div>
      {/* <GoogleLogin
        clientId={googleClientId}
        buttonText="Google"
        onSuccess={(result) => onLoginSuccess(result)}
        onFailure={(result) => console.log(result)}
      /> */}
      asdf
    </div>
  );
};
export default lgGoogle;
