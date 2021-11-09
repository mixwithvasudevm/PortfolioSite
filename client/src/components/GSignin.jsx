import React from "react";
import { GoogleLogin } from "react-google-login";
import { useHistory } from "react-router-dom";
import {BsGoogle} from "react-icons/bs";
import * as api from "../api";
import {Container,Row,Col } from "reactstrap";
import {
  Button,
} from "@material-ui/core";

const Goin = (props) => {
  const history = useHistory();



  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;
    console.log(result);
    try {
      api
      .confirmUser(result)
      .then((response) => {
        console.log(response);
        if(response.data==="okay")
        {
          sessionStorage.setItem("googleId",result.googleId);
        history.push("/blogs/add");
        }
        else if(response.data==="not okay"){ 
          history.push("/blogs");
        }
      })
      .catch((error) => {
        console.log(error);
        history.push("/blogs");
      });
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = () => {
    console.log("Google Sign In was unsuccessful. Try again later");
  };
  return (
    <Container className="mt-5">
      <Row className="mt-5">
        <Col className="mt-5 mb-5 google d-flex align-items-center justify-content-center">
        <GoogleLogin
                  clientId={process.env.REACT_APP_GCLIENT}
                  render={(renderProps) => (
                    <Button
                      className="googleButton"
                      color="primary"
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      startIcon={<BsGoogle />}
                      variant="contained"
                    >
                     Sign in with Google
                    </Button>
                  )}
                  onSuccess={googleSuccess}
                  onFailure={googleFailure}
                  cookiePolicy="single_host_origin"
                />
  </Col>
  </Row>
  </Container>
  );
};

export default Goin;
