import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import {Link} from "react-router-dom";
import * as api from "../api";

// this is for showing ShowBlogs
class ShowBlogs extends Component {
  render() {
    return (
      <div className="ShowBlogs mt-5 mx-lg-4 mb-5">
        <Container className="ml-5 mr-5 ">
          <Row className="mb-5">
            <Col className="mt-5 d-flex align-items-center justify-content-center h1">
              Our Blogs
            </Col>
          </Row>
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>...*/}
          <Row>
            <Col className="d-flex align-items-center justify-content-center ">
              <a href="/blogs/add">
                <Button color="success">Add Blog</Button>{" "}
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default ShowBlogs;
