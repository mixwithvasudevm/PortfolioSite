import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
// import "./css/pricing-plan.css";
import { AiOutlineDoubleRight } from "react-icons/ai";
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
                  <p className="">(ONLINE)</p>
                  <p className=" pricing-plan-title"> Rs. 40,000/- + GST</p>
                  <br/>
                  <Row>
                    <Col>
                      <ul className="pricing-plan-features pricingli">
                      <i class="fas fa-angle-double-right"></i>
                      
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Music Theory</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Sound Theory</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> MIDI</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Recording</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Editing</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Equalisation</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Compression</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className="text-align-right pricing-plan-features pricingli">
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> FX & Automation</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Mastering</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> 3rd Party Plugins</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Advanced Mixing Techniques</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Guest Lecture By Professionals</li>
                      </ul>
                    </Col>
                  </Row>
                  <a href="https://api.whatsapp.com/send?phone=917678427715&text=Welcome%20to%20Mix%20With%20Vasudev"> <div className="dark-btn registernowbtn aemp_registernow"> Register Now </div></a>
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
                      <ul className=" text-align-right pricing-plan-features pricingli">
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Music Theory</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Sound Theory</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> MIDI</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Recording</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Editing</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Equalisation</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Compression</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> FX & Automation</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Mastering</li>
                      </ul>
                    </Col>
                    <Col>
                      <ul className=" text-align-right pricing-plan-features pricingli">
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> 3rd Party Plugins</li>
                       
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Advanced Mixing Techniques</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Studio Ethics</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Music Business</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Foley Sounds</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Monthly Quizzes</li>
                        <li className="aempLiTextAlign"><div className="aempLiColor"><AiOutlineDoubleRight/></div> Guest Lecture By Industry Professionals</li>
                      </ul>
                    </Col>
                    
                  </Row>
                <a href="https://api.whatsapp.com/send?phone=917678427715&text=Welcome%20to%20Mix%20With%20Vasudev"> <div className="dark-btn registernowbtn aemp_registernow"> Register Now </div></a>
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
                      <ul className=" text-align-right pricing-plan-features pricingli">
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
                      <ul className=" text-align-right pricing-plan-features pricingli">
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                         <li></li>      <br/>
                        <li></li>      <br/>
                      </ul>
                    </Col>
                   
                  </Row>
                  <a href="https://api.whatsapp.com/send?phone=917678427715&text=Welcome%20to%20Mix%20With%20Vasudev"> <div className="dark-btn aemp_registernow registernowbtn"> Know More </div></a>
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