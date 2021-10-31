import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Album extends Component {
  render() {
    return (
      <Container className="mt-5">
        <Row className="mt-5">
          <Col className="mt-5 album-sub">New Album</Col>
        </Row>
        <Row className="mb-5">
          <Col className="mb-5 album-heading">Written in The Stars</Col>
        </Row>
        <Container className="mt-4 d-flex align-items-center justify-content-center album">
          <Row>
            <Col >
            </Col>
            <Col>
              <Container>
                <Row>
                  <Col></Col>
                  <Col>
                    <Container>
                      <Row>
                        <Col></Col>
                      </Row>
                    </Container>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Album;
