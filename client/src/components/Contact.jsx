import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Platform from "./SocialPlatform";

class Contact extends Component {
  render() {
    return (
      <div className="contact mt-5">
        <Platform/>
        <Container className="main-contact full-container">
          <Row className="mt-5 mx-lg-4">
            <Col className="mt-5 mx-lg-4 h2 font-weight-bold">Contact Us</Col>
          </Row>
          <Row className="mx-lg-4">
            <Col className="mt-2 mx-lg-4">
              <p>Or come and drink coffee in comfy space</p>
            </Col>
          </Row>
          <Row className="mt-5 mx-lg-4">
            <Col>
              <Container>
                <Row>
                  <Col className="contact-heading font-weight-bold">
                    Booking
                  </Col>
                </Row>
                <Row>
                  <Col>Jeff Anderson</Col>
                </Row>
                <Row>
                  <Col>bussiness@gmail.com</Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container>
                <Row className="">
                  <Col className="contact-heading font-weight-bold">
                    Booking
                  </Col>
                </Row>
                <Row>
                  <Col>Jeff Anderson</Col>
                </Row>
                <Row>
                  <Col>bussiness@gmail.com</Col>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container>
                <Row className="">
                  <Col className=" contact-heading font-weight-bold">
                    Booking
                  </Col>
                </Row>
                <Row>
                  <Col>Jeff Anderson</Col>
                </Row>
                <Row>
                  <Col>bussiness@gmail.com</Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="mt-5 mx-lg-4">
            <Col sm={8}>
              <Container className="mt-5">
                <Row>
                  <Col className="contact-heading font-weight-bold">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its
                  </Col>
                </Row>
                <Row>
                  <Col>Jeff Anderson</Col>
                </Row>
                <Row>
                  <Col>info@gmail.com</Col>
                </Row>
              </Container>
            </Col>
            <Col sm={4}>
              <Container className="mt-5">
                <Row>
                  <Col className="contact-heading font-weight-bold">
                    Our Music Studio
                  </Col>
                </Row>
                <Row>
                  <Col>Jeff Anderson</Col>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Contact;
