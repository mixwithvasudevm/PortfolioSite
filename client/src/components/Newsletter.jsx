import React, { useState,useRef } from "react";
import { Container, Row, Col,Alert} from "reactstrap";
import PhoneInput from 'react-phone-number-input/input';
import emailjs from 'emailjs-com';


const Newsletter = () => {
  const [email, setEmail] = useState(null);
  const [number,setNumber]=useState(null);
  const [alert,setAlert]=useState(false);
  const [done,setDone]=useState(false);
  const [submit, setSubmit] = useState("SUBSCRIBE");

  const form = useRef();


  const onValidate = (email) => {
    const errors = {};
    const EMAIL_REGEX = /\S+@\S+\.\S+/;

    if (!EMAIL_REGEX.test(email)) {
      errors.email = "Please enter a valid email";
    }
    return errors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
        setAlert(false);
        setDone(true);
        emailjs.sendForm('service_oq6btam', 'template_slyydrq', form.current, 'YOUR_USER_ID')
        .then((result) => {
            setSubmit("Done");
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        
     };

  return (
    <div>
        <Container>
        <form ref={form} onSubmit={sendEmail} onValidate={onValidate} >
        {alert && (
                <Row className="mt-4">
                  <Alert color="danger"> Kindly fill all fields</Alert>
                </Row>
                )}
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
      <input type="email" className="newsletter-input"  placeholder="ENTER YOUR Email"name="user_email" />
      &nbsp;&nbsp;&nbsp;
      <input
             country="IND"
             className="newsletter-input"
             placeholder="ENTER YOUR NUMBER"
             isValidPhoneNumber={true}
              />
              </Col>
              </Row>
              <Row className="mt-3">
             <Col className="d-flex align-items-center justify-content-center">

               <input  className="newsletter-button"type="submit" value={submit} />
                </Col>
                </Row>
          </form>
        </Container>
    </div>
  );
}

export default Newsletter;
