import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

const Newsletter = () => {
  const [email, setEmail] = useState(null);
  const [submit, setSubmit] = useState("SUBSCRIBE");
  const submitForm = () => {};
  return (
    <div>
      <form onSubmit={submitForm}>
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mb-3 mt-3 ">
              <input
                className="newsletter-input"
                placeholder="ENTER YOUR EMAIL"
              />
            </Col>
          </Row>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mb-5 mt-2 text-white">
              <button
                className="newsletter-button"
              >
              {submit}
              </button>
            </Col>
          </Row>
        </Container>
      </form>
    </div>
  );
};

export default Newsletter;
