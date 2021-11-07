import React from "react";

import { FaLinkedin, FaInstagram, FaYoutube, FaTwitter } from "react-icons/fa";

import { Container, Row, Col } from "reactstrap";
import Newsletter from "./Newsletter";

const Footer = (props) => {
  return (
    <section className="footer">
      <footer className="text-white">
        <Container className="full-container">
          <Row>
            <Col className="mt-5 d-flex align-items-center justify-content-center">
              <Container>
                <Row>
                  <Col className="mt-5 d-flex align-items-center justify-content-center">
                    <h1>Stay in Touch</h1>
                  </Col>
                </Row>
                <Row>
                  <Col className="d-flex align-items-center justify-content-center footer-content">
                    <p>
                      <br />
                      Subscribe our newsletter and stay uploaded on latest music
                      albums,live albums,
                      <br />
                      live show and music release
                    </p>
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col>
              <Newsletter />
            </Col>
          </Row>
          <Row className="mt-5 footer-bottom px-4 d-flex align-items-center justify-content-center">
            <Col xs="3" className="align-content-left">
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Copyright © 2021
            </Col>
            <Col xs="3"></Col>
            <Col
              xs="3"
              className="d-flex align-items-right justify-content-right footer-icons px-4"
            >
            
              <a href=" https://www.linkedin.com/in/mix-with-vasudev" className="text-white"><FaLinkedin /></a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href=" https://instagram.com/mixwithvasudev?utm_medium=copy_link" className="text-white"><FaInstagram /></a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href=" https://youtube.com/c/MixWithVasudev" className="text-white"><FaYoutube /></a>&nbsp;&nbsp;&nbsp;&nbsp;
              <a href=" https://twitter.com/MixWithVasudev?s=20" className="text-white"><FaTwitter /></a>&nbsp;&nbsp;&nbsp;&nbsp;            
            </Col>
          </Row>
        </Container>
      </footer>
    </section>
  );
};

export default Footer;
