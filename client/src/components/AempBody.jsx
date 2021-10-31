import React, { Component } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import "./css/pricing-plan.css";

class AempBody extends Component {
  render() {
    return (
      <div className="AempBody mt-5 mx-lg-4 mb-5">
        <Container className="ml-5 mr-5 ">
        <div class="container ">
      <div class="row">       
        <div class="col-md-4">
          <div class="card pricing-card pricing-card-highlighted  pricing-plan-pro">
            <div class="card-body">
                <i class="mdi mdi-trophy pricing-plan-icon"></i>
              <p class="pricing-plan-title">3-month online course (TWICE A WEEK)</p>
              <h3 class="pricing-plan-cost ml-auto">Rs. 40,000/- + GST</h3>
             <Row>
              <Col>
              <ul class="pricing-plan-features">
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
              
              <ul class="pricing-plan-features">              
                <li>FX & Automation</li>
                <li>Mastering</li>
                <li>3rd Party Plugins</li>
                <li>Advanced Mixing Techniques</li>
                <li>Guest Lecture By Industry Professionals</li>
              </ul>
              </Col>
              </Row>
              <div className="dark-btn">Register Now</div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card pricing-card pricing-card-highlighted pricing-plan-basic">
            <div class="card-body">
              <i class="mdi mdi-cube-outline pricing-plan-icon"></i>
              <p class="pricing-plan-title">6-month online course (TWICE A WEEK)</p>
              <h3 class="pricing-plan-cost ml-auto">Rs. 85,000/- + GST</h3>
              
              <Row>
                  <Col>
              <ul class="pricing-plan-features">
                  
                  <li>Music Theory</li>
                    <li>Sound Theory</li>
                    <li>MIDI</li>
                    <li>Recording</li>
                    <li>Editing</li>
                    <li>Equalisation</li>
                    <li>Compression</li>
                    <li>FX & Automation</li>
                    <li>Mastering</li>
                    <li>3rd Party Plugins</li>
                    </ul>
                    </Col>
                    <Col>
                  <ul class="pricing-plan-features">
                    <li>Advanced Mixing Techniques</li>
                    <li>Studio Ethics</li>
                    <li>Music Business</li>
                    <li>Foley Sounds</li>
                    <li>Monthly Quizzes</li>
                    <li>Guest Lecture By Industry Professionals</li>
                 </ul>
                    </Col>                 
            </Row>
              <div className="dark-btn">Register Now</div>
            </div>
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
