import React, { useEffect } from "react"; 
import { Row,Col } from "reactstrap";
import YouTubePage from "../components/YouTubePage";
import mix from "../components/img/mix.png";

const YouMain = () => {
  useEffect(() => {
    document.title = "Mix With Vasudev";
  }, []);
  return (
    <div>
        <Row className="youtube-heading text-white">
          <Col className="d-flex align-items-center justify-content-center">
            <img src={mix} />
          </Col>
        </Row>
        <Row>
          <YouTubePage/>
       </Row>
    </div>
  );
};


export default YouMain;