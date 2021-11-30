import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import "./css/pricing-plan.css";

class AempBody extends Component {
  render() {
    return (
      <div className="AempBody mt-5 mx-lg-4 mb-5 ">
        <Container className="ml-5 mr-5 ">
          <div className="row">
            <div className="col-md-4 firstprice">
              <div className="card pricing-card pricing-card-highlighted  pricing-plan-pro">
                <div className="card-body">
                  <i className="mdi mdi-trophy pricing-plan-icon"></i>
                
                
                  <h4 className="d-flex align-items-center justify-content-center pricing-plan-cost ml-auto mb-1">
                  MIXING & MASTERING COURSE
                  </h4>
                  <p className="d-flex align-items-center justify-content-center">(ONLINE)</p>
                  <p className=" d-flex align-items-center justify-content-center pricing-plan-title"> Rs. 40,000/- + GST</p>
                  <br/>
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
                      <ul className="pricing-plan-features pricingli">
                        <li>FX & Automation</li>
                        <li>Mastering</li>
                        <li>3rd Party Plugins</li>
                        <li>Advanced Mixing Techniques</li>
                        <li>Guest Lecture By Industry Professionals</li>
                      </ul>
                    </Col>
                  </Row>
                  <a href="https://api.whatsapp.com/send?phone=917678427715&text=Welcome%20to%20Mix%20With%20Vasudev"> <div className="dark-btn registernowbtn"> Register Now </div></a>
                </div>
              </div>
            </div>
            <div className="col-md-4 secondprice">
              <div className="card pricing-card pricing-card-highlighted pricing-plan-basic">
                <div className="card-body">
                  <i className="mdi mdi-cube-outline pricing-plan-icon"></i>
                 
              
                  <h4 className="pricing-plan-cost ml-auto mb-1">
                  AEMP COURSES
                  </h4>
                  <p>(ONLINE)</p>
                  <p className="pricing-plan-title"> Rs. 85,000/- + GST</p>
                  <br/>
                  {/* <p className="pricing-plan-title mt-0 mb-4 text-danger">
                    (Rockschool, London Affiliated)
                  </p> */}
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
                <a href="https://api.whatsapp.com/send?phone=917678427715&text=Welcome%20to%20Mix%20With%20Vasudev"> <div className="dark-btn registernowbtn"> Register Now </div></a>
                </div>
              </div>
            </div>
            {/*  */}
              <div className="col-md-4 thirdprice">
              <div className="card pricing-card pricing-card-highlighted  pricing-plan-pro">
                <div className="card-body">
                  <i className="mdi mdi-trophy pricing-plan-icon"></i>
                  <h4 className="pricing-plan-cost ml-auto mb-1">
                    OFFLINE COURSE
                  </h4>
                  <p className="pricing-plan-title"> Coming Soon!!</p>
                 
                   
                  <Row>
                 
                     <Col>
                      <ul className="pricing-plan-features pricingli">
                        <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="pricing-plan-features pricingli">
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                        <li></li>      <br/>
                      </ul>
                    </Col>
                   
                  </Row>
                  <a href="https://api.whatsapp.com/send?phone=917678427715&text=Welcome%20to%20Mix%20With%20Vasudev"> <div className="dark-btn registernowbtn"> Know More </div></a>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
           <br/><br/>
          <div className="d-flex align-items-center justify-content-center">
         
          <iframe
            scrolling="no"
            className="map-cont"
            src="https://maps.google.com/maps?q=Oracle%20Studios%20%26%20Academy&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near"
            title="Oracle Studios &amp; Academy"
            aria-label="Oracle Studios &amp; Academy"
          ></iframe>
          </div>
        </Container>
      </div>
    );
  }
}

export default AempBody;
