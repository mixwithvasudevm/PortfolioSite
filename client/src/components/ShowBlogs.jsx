import React, { useEffect,useState} from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {BsFillFileEarmarkPlusFill} from "react-icons/bs";
import * as api from "../api";

// this is for showing ShowBlogs
const ShowBlogs =() =>{
  const [user,setUser]=useState(false);
  const getUser = async () => {
    let id= sessionStorage.getItem('id');
    await api
      .confirmUser(id)
      .then((res) => {
          if(res)
          {
            setUser(res);
          }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);
    return (
      <div className="mb-5">
        <Container className="full-container">
          <Row className="mb-5 ShowBlogs d-flex align-items-center justify-content-center h1">
              Our Blogs
          </Row>
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>...*/}
        { !user&& (<Row>
           <Col className="d-flex  justify-content-center plus-sign ">
              
              <Link to="/auth">
               <BsFillFileEarmarkPlusFill/>
              </Link>
            </Col>
          </Row>)}
        </Container>
      </div>
    );
}

export default ShowBlogs;
