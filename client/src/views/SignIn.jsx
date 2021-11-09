import React,{useEffect} from "react";
import Goin from "../components/GSignin";

const Auth = () => {
  useEffect(() => {
    // let userId= sessionStorage.getItem('id');
    // console.log(userId);
    // const result=[{'id':`${userId}`}];
    // if(userId!=="null")
    // {
    //  api
    //   .confirmUser(result)
    //   .then((res) => {
    //       if(res)
    //       {
    //         history.push("/add");
    //       }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    // }
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
