import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i1 from "./img/About.jpg";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

class About extends Component {
  render() {
    return (
      <div>
        <Container className="mt-5 full-container mb-5">
          <Row>
            <Col xs="">
              <Container>
                <Row>
                  <Col className="mt-5 mx-lg-5 mb-4">
                    <h2>ARTIST BIO</h2>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-5 mx-lg-5 mb-3 about-quote">
                    <div>
                      "A quotation is the repetition of a sentence, phrase, or
                      passage from speech or text that someone has said or
                      written. In oral speech"
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3 mx-lg-5 mb-3 text-bold">
                    <div>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className="mt-3 mx-lg-5 about-icons">
                    <FaFacebookF />
                    &nbsp;&nbsp;&nbsp;
                    <FaInstagram /> &nbsp;&nbsp;&nbsp;
                    <FaTwitter /> &nbsp;&nbsp; <FaLinkedin />
                  </Col>
                </Row>
              </Container>
            </Col>
            <Col className="mt-5">
              <img src={i1} className="about-img" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
