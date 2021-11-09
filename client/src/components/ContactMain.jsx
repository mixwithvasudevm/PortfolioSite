import React from "react";
import "./css/contact.css";
import { Container, Row, Col } from "reactstrap";
import {HiMailOpen} from "react-icons/hi";
import {BsTelephoneForwardFill} from "react-icons/bs";

const ContactMain = () => {

  return (
    <div className="contact-page mt-5">
      <Container className="mt-5 py-4">
        <Row className="mt-5">
          <Col className="contact-heading-x">
            <p>CONTACT</p>
          </Col>
        </Row>
        <Row className="mt-5">
        <Row className=" mt-5 contact-subheading d-flex align-items-center justify-content-center">
          <Col>
        <p className="text-left"> <a href="mailto:mixwithvasudev@gmail.com" className="text-white"> <HiMailOpen/> </a>&nbsp;&nbsp;&nbsp;mixwithvasudev@gmail.com</p> 
          </Col>
        </Row>
        <Row className="contact-subheading d-flex align-items-center justify-content-center">
          <Col  > <p className="text-left"> <a href="tel:+917011615551" className="text-white"><BsTelephoneForwardFill/></a>
          &nbsp;&nbsp;&nbsp;7011-615-551 </p></Col>
        </Row>
        <Row className="contact-subheading d-flex align-items-center justify-content-center">
          <Col ><p className="text-left"><a href="tel:+919555524892" className="text-white"><BsTelephoneForwardFill/></a>&nbsp;&nbsp;&nbsp;9555-524-892</p></Col>
        </Row>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMain;
