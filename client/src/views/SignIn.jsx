import React,{useEffect} from "react";
import Goin from "../components/GSignin";

const Auth = () => {
  useEffect(() => {
    document.title = "Alert!!!Only for Admin";
  }, []);
  return (
    <div>
      <div className="auth-back">
        <Goin/>
      </div>
    </div>
  );
};

export default Auth;
