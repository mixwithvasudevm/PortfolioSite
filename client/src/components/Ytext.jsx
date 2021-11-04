import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Ytext extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row>
          <Col className="d-flex align-items-center justify-content-center text-center font-weight-bold">
            It is a long established fact that a reader will be distracted by
            the readable
            <br />
            content of a page when looking at its layout.
          </Col>
        </Row>
        <Row className="mt-5 d-flex align-items-center justify-content-center">
          <Col
            className="d-flex align-items-center justify-content-center"
            xs="2"
          >
            <Link to="/aemp" className="dark-btn button-large">
              AEMP COURSES
            </Link>
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
