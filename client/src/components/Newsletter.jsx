import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import PhoneInput from 'react-phone-number-input/input'


const Newsletter = () => {
  const [email, setEmail] = useState(null);
  const [number,setNumber]=useState(null);
  const [alert,setAlert]=useState(false);
  const [done,setDone]=useState(false);
  const [submit, setSubmit] = useState("SUBSCRIBE");
  const submitForm = () => {
     if(email===null||number===null)
     {
        setAlert(true);
     }
     else
     {
        setAlert(false);
        setDone(true);
        
     }

  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <Container>
          <Row>
            <Col className="d-flex align-items-center justify-content-center mb-3 mt-3 ">
              <input
                className="newsletter-input"
                placeholder="ENTER YOUR EMAIL"
                value={email}
                onchange={value => {
                  setEmail(value)
                 console.log(value)
               }}
              />
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <PhoneInput
             country="IND"
             className="newsletter-input"
             placeholder="ENTER YOUR NUMBER"
             value={number}
             onchange={value => {
               setNumber(value)
              console.log(value)
            }}
             isValidPhoneNumber={true}
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
