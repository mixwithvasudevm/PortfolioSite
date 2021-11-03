import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import YouTubeMainPage from "./YouTubeMainPage";

class Album extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-5">
          <Col className="mt-5 album-sub">New Album</Col>
        </Row>
        <Row className="">
          <Col className="album-heading">Written in The Stars</Col>
        </Row>
        <Container className="d-flex align-items-center justify-content-center">
        <YouTubeMainPage/>
        </Container>
      </Container>
    );
  }
}

export default Album;
