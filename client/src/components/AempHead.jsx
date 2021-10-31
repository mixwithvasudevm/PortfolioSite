import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";

class AempHead extends Component {
  render() {
    return (
      <div className="AempHead mt-5 mx-lg-4 mb-5">
        <Container className="ml-5 mr-5 ">
          <Row className="mb-5">
            <Col className="mt-5 d-flex align-items-center justify-content-center h1">
            COURSES OFFERED
            </Col>
          </Row>     
          <Row className="mb-1">
            <Col className="mt-5 d-flex align-items-center justify-content-center h1">
           <h2 className="courses-offered">RATES</h2> 
            </Col>
          </Row>  
          <Row className="mb-1">
            <Col className="mt-1 d-flex align-items-center justify-content-center">
           <p>* Registration fee is non-refundable. It is included in the total fee given below.</p> 
            </Col>
          </Row> 
        </Container>        
      </div>
    );
  }
}

export default AempHead;
