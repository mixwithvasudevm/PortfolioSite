import React,{useEffect} from "react";
import Goin from "../components/GSignin";
import * as api from "../api";
import { useHistory, Link} from "react-router-dom";

const Auth = () => {
  const history = useHistory();
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
