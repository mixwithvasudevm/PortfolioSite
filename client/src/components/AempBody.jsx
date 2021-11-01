import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import "./css/pricing-plan.css";

class AempBody extends Component {
  render() {
    return (
      <div className="AempBody mt-5 mx-lg-4 mb-5 ">
        <Container className="ml-5 mr-5 ">
       
      <div className="row">       
        <div className="col-md-4 firstprice" >
          <div className="card pricing-card pricing-card-highlighted  pricing-plan-pro">
            <div className="card-body">
                <i className="mdi mdi-trophy pricing-plan-icon"></i>
              <p className="pricing-plan-title">3-MONTH ONLINE COURSE</p>
              <p>(TWICE A WEEK)</p>
              <h4 className="pricing-plan-cost ml-auto ">Rs. 40,000/- + GST</h4>
             <Row>
              <Col>
              <ul className="pricing-plan-features pricingli">
                <li>Music Theory</li>
                <li>Sound Theory</li>
                <li>MIDI</li>
                <li>Recording</li>
                <li>Editing</li>
                <li>Equalisation</li>
                <li>Compression</li>
                </ul>
                </Col>
                <Col>
              
              <ul className="pricing-plan-features pricingli" >              
                <li>FX & Automation</li>
                <li>Mastering</li>
                <li>3rd Party Plugins</li>
                <li>Advanced Mixing Techniques</li>
                <li>Guest Lecture By Industry Professionals</li>
              </ul>
              </Col>
              </Row>
              <div className="dark-btn registernowbtn">Register Now</div>
            </div>
          </div>
        </div>
        <div className="col-md-4 secondprice">
          <div className="card pricing-card pricing-card-highlighted pricing-plan-basic">
            <div className="card-body">
              <i className="mdi mdi-cube-outline pricing-plan-icon"></i>
              <p className="pricing-plan-title">6-MONTH ONLINE COURSE</p>
              <p>(TWICE A WEEK)</p>
              <h4 className="pricing-plan-cost ml-auto mb-1">Rs. 85,000/- + GST</h4>
              <p className="pricing-plan-title mt-0 mb-4 text-danger">(Rockschool, London Affiliated)</p>
                 <Row>
                  <Col>
              <ul className="pricing-plan-features pricingli">
                  
                  <li>Music Theory</li>
                    <li>Sound Theory</li>
                    <li>MIDI</li>
                    <li>Recording</li>
                    <li>Editing</li>
                    <li>Equalisation</li>
                    <li>Compression</li>
                    <li>FX & Automation</li>
                    <li>Mastering</li>
                   
                    </ul>
                    </Col>
                    <Col>
                  <ul className="pricing-plan-features pricingli">
                  <li>3rd Party Plugins</li>
                    <li>Advanced Mixing Techniques</li>
                    <li>Studio Ethics</li>
                    <li>Music Business</li>
                    <li>Foley Sounds</li>
                    <li>Monthly Quizzes</li>
                    <li>Guest Lecture By Industry Professionals</li>
                 </ul>
                    </Col>                 
            </Row>
              <div className="dark-btn registernowbtn">Register Now</div>
            </div>
          </div>
        </div>
    </div>  
           
        </Container>        
      </div>
    );
  }
}

export default AempBody;
