import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Ytext extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="d-flex align-items-center justify-content-center text-center">
            It is a long established fact that a reader will be distracted by
            the readable
            <br />
            content of a page when looking at its layout.
          </Col>
        </Row>
        <Row className="mt-5">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs="2"
          >
            <div className="dark-btn">YOUTUBE</div>
          </Col>
          <Col>
            <div className="dark-btn">AEMP COURSES</div>
          </Col>
        </Row>
        <Row>
          <br />
          <br />
          <br />
        </Row>
      </Container>
    );
  }
}

export default Ytext;
