import React, { useState } from "react";
import "./css/contact.css";
import { Container, Row, Col } from "reactstrap";
import {HiMailOpen} from "react-icons/hi";
import {BsTelephoneForwardFill} from "react-icons/bs";
import {AiFillCopy} from "react-icons/ai";

const ContactMain = () => {
 const [mail,setMail]=useState(false);

  return (
    <div className="contact-page mt-5">
      <Container className="mt-5 py-4">
        <Row className="mt-5">
          <Col className="contact-heading-x">
            <p>CONTACT</p>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="contact-subheading mt-5 d-flex align-items-center justify-content-center">
         <a href="mailto:mixwithvasudev@gmail.com" className="text-white">  <HiMailOpen/> </a> &nbsp;&nbsp;&nbsp;&nbsp;mixwithvasudev@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;
          </Col>
        </Row>
        <Row>
          <Col className="contact-subheading d-flex align-items-center justify-content-center"><a href="tel:+917011615551" className="text-white"><BsTelephoneForwardFill/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
           7011-615-551</Col>
        </Row>
        <Row>
          <Col className="contact-subheading d-flex align-items-center justify-content-center" ><a href="tel:+919555524892" className="text-white">&nbsp;&nbsp;&nbsp;<BsTelephoneForwardFill/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9555-524-892&nbsp;&nbsp;&nbsp;&nbsp;</Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactMain;
