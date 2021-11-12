import React from "react";
import { Container,Row,Col } from "reactstrap";
import i3 from "./img/z.jpg";
import i4 from "./img/jo.jpg";
import i5 from "./img/ha.jpg";
import i6 from "./img/tvf.jpg";
import i7 from "./img/ab.jpg";

const Client=()=>{

return(
<Container>
<Row className="mt-5">
    <h2 className="mt-3 mb-4">MY CLIENTS</h2>
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
);
}

export default Client;