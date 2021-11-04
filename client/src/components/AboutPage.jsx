import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import i1 from "./img/main.jpg";
import i2 from "./img/AboutMePage.jpg";
import i3 from "./img/z.jpg";
import i4 from "./img/jo.jpg";
import i5 from "./img/ha.jpg";
import i6 from "./img/tvf.jpg";
import i7 from "./img/ab.jpg";
import Player from "./YoutubePlayer";
class AboutPage extends Component {
  render() {
    return (
        
      <div>
           <div className="landing mt-5">
            <img src={i1} />
            </div>
        <Container className="mt-5 mb-5">
          <Row className="mb-5">
            <Col xs="">            
                    <h2 className="mt-3 mx-lg-5 mb-3">ABOUT ME</h2>
                    <Row>
                    <Col className="mt-3 mx-lg-5 mb-3">
                    <div className="mb-5">
                    I dropped out of my college, DTU (formerly Delhi College Of Engineering) 
                    to follow my passion for Audio Engineering. I have been a part of 
                    the industry for a while now and have credits from brands like 
                    T-Series, The Viral Fever, Netflix, Astitva The Band and a few 
                    more. I also have a passion for teaching and have been teaching 
                    since 4 years now.
                    </div>
                    <strong> My aim is to spread awareness about Audio 
                    Engineering & Music Production and therefore
                    I started my own YouTube Channel named “Mix With Vasudev”
                     where I talk about AEMP in Hindi 
                    to help the people for whom language is a barrier.
                    </strong>
                  </Col> 
                    <Col>
                        <img src={i2} className="about-img-page" />
                    </Col>
                          
                </Row>              
            </Col>          
          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
