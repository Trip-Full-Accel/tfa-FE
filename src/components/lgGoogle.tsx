import { GoogleLogin } from "@react-oauth/google";
import { GoogleOAuthProvider } from "@react-oauth/google";

const GLogin = () => {
  return (
    <GoogleOAuthProvider clientId="211887729069-e1tmdi51mma8bkhmd8b5k6rq29tf8s21.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GLogin;
