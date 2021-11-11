import React, { useState,useRef } from "react";
import { Container, Row, Col,Alert} from "reactstrap";
import PhoneInput from 'react-phone-number-input/input';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_rMDdfwdCqLatxLl0oXIVO");


const Newsletter = () => {
  const [values, setValues] = useState({
    number: '',
    email: '',
});
  const [alert,setAlert]=useState(false);
  const [done,setDone]=useState(false);
  const [submit, setSubmit] = useState("SUBSCRIBE");
  const [wrong, setWrong] = useState(null);


  const handleChange = (name)=> (e) => {
    setValues({ ...values, [e.target.id]: e.target.value });
};


const isFormValid = () => {
  const Phone_REGEX = /^[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-/\s.]?[0-9]{4}$/;
  const EMAIL_REGEX = /^\S+@\S+\.\S+$/;
  if (!values.email || !values.number) {
    setWrong(null);
  setAlert(true);
return false;}
else {
  if (!EMAIL_REGEX.test(values.email)) {
    setWrong("your email");
    setAlert(false);
return false;
  }
  if (!Phone_REGEX.test(values.number)) {
    setWrong("your number");
    setAlert(false);
return false;
  }
return true;}

};

  const sendEmail = (e) => {
    e.preventDefault();
        setAlert(false);
        setDone(true);
        console.log(e.target);
        emailjs.send('service_oq6btam', 'template_slyydrq',{
          email: values.email,
          number: values.number,
          }, 'user_rMDdfwdCqLatxLl0oXIVO')
        .then((result) => {
            setSubmit("Done");
            setAlert(false);
            console.log(result.text);
        }, (error) => {
             setAlert(true);
            console.log(error.text);
        });
        
     };


     const handleSubmit = (e) => {
      // HERE: you always want to prevent default, so do this first
      e.preventDefault()
        if (!isFormValid()) {
           console.log('falta algo')
        } else{ 
          sendEmail(e)
        }
    };

  return (
    <div>
        <Container>
        <form onSubmit={(e) => handleSubmit(e)} >
        {alert && (
                <Row className="mt-4">
                  <Alert color="danger"> Kindly fill all fields</Alert>
                </Row>
                )}
                   {wrong && (
                <Row className="mt-4">
                  <Alert color="danger"> Kindly enter {wrong} correctly</Alert>
                </Row>
                )}
                <Row>
                  <Col className="d-flex align-items-center justify-content-center">
      <input type="email" className="newsletter-input" id='email'
                      value={values.email}
                      type="email" placeholder="email"
            onChange={handleChange()}/>
      &nbsp;&nbsp;&nbsp;
      <input
             country="IND"
             className="newsletter-input"
             placeholder="contact no."
             id="number"
             value={values.number}
             isValidPhoneNumber={true}
             onChange={handleChange()}
              />
              </Col>
              </Row>
              <Row className="mt-3">
             <Col className="d-flex align-items-center justify-content-center">

             <input className="newsletter-button" type="submit" value={submit} />
                </Col>
                </Row>
          </form>
        </Container>
    </div>
  );
}

export default Newsletter;
