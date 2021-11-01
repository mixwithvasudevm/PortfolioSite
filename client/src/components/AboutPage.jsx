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

          <Row > 
            <Col className="few-of-my-work mb-5">
            <h2 className="mt-5 mx-lg-5 mb-5 ">FEW OF MY WORK</h2>
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs="15" lg="4" className="mb-2">
              <Player url="https://youtu.be/cfasOCv2l9o" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player url="https://youtu.be/pl25ygcgvBk" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player url="https://youtu.be/vBYnLndh8Lw" />
            </Col>
          </Row>

          <Row className="mb-5">
            <Col xs="15" lg="4" className="mb-2 ">
              <Player url="https://youtu.be/KXw4039z20E" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player url="https://youtu.be/KaTrliDK4DM" />
            </Col>
            <Col xs="15" lg="4" className="mb-2">
              <Player url="https://youtu.be/6tT_xxfE304" />
            </Col>
          </Row>
          <br/><br/><br/><br/>

          <Row>
          <h2 className="mt-5 mx-lg-5 mb-4">MY CLIENTS</h2>
          </Row>
          <br/>
         <Row className="mb-5">
           <Col className="mb-5">
             <Row>
            <img src={i3} className="about-page-clients" />
             </Row>
             <Row className="mt-2 text-center">
            <p className=""> ZAMAN KHAN</p>
            </Row>
           </Col>

           <Col className="mt-5 mb-5">
             <Row>
            <img src={i4} className="about-page-clients" />
             </Row>
             <Row className="mt-2 text-center">
                <p className=""> JOHN OINAM <br/>
                  Stage 2, Indian Idol
                </p>
            </Row>
           </Col>

             <Col className="mb-5">
             <Row>
            <img src={i5} className="about-page-clients-square" />
             </Row>
             <Row className="mt-2 text-center">
            <p className="">HATTKE</p>
            </Row>
           </Col>

            <Col className="mb-5 mt-5">
             <Row>
            <img src={i6} className="about-page-clients-square" />
             </Row>
             <Row className="mt-2 text-center">
            <p className="">THE VIRAL FEVER</p>
            </Row>
           </Col>

            <Col className="mb-5">
             <Row>
            <img src={i7} className="about-page-clients" />
             </Row>
             <Row className="mt-2 text-center">
            <p className="">Astitva Band</p>
            </Row>
           </Col>

          </Row>
        </Container>
      </div>
    );
  }
}

export default AboutPage;
