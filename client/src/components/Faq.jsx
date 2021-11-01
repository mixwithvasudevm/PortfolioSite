import React from "react";
import FaqCard from "./Faqcard";
import { Container, Row, Col } from "reactstrap";
import "./css/faq.css";

const question = [
  {
    ques: "fghkkguhgkvu,vu dgoignweg  oefoeigoiwnw wmeknfkewgnklew ?",
    answer:
      "fyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvhjvcjhxtyxuts56fyuffvuiviuytxytyitickiiytvitttcuxttxrfuiybkggyuuycuftyftytycuu",
  },
  {
    ques: "fghkkguhgkvu,vu",
    answer:
      "fyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvhjvcjhxtyxuts56fyuffvuiviuytxytyitickiiytvitttcuxttxrfuiybkggyuuycuftyftytycuu",
  },
  {
    ques: "fghkkguhgkvu,vu",
    answer:
      "fyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvhjvcjhxtyxuts56fyuffvuiviuytxytyitickiiytvitttcuxttxrfuiybkggyuuycuftyftytycuu",
  },
  {
    ques: "fghkkguhgkvu,vu",
    answer:
      "fyuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvhjvcjhxtyxuts56fyuffvuiviuytxytyitickiiytvitttcuxttxrfuiybkggyuuycuftyftytycuu",
  },
];

const Faq = () => {
  return (
    <Container className="full-container faq-head">
      <Row className="faq-heading mb-5">
        <Col>
          <Container>
            <Row>
              <Col className="faq-text-main mb-4">
                <h1>Want to Ask questions</h1>
              </Col>
            </Row>
            <Row>
              <Col>
                <h3>We have collected a few for you </h3>
              </Col>
            </Row>
          </Container>
        </Col>
        <Col className="d-flex align-items-right justify-content-center">
          {/* <img src={F} className="faq-image" alt="" /> */}
        </Col>
      </Row>
      {question.map((item, index) => {
        return (
          <Row key={index}>
            <Col className="d-flex align-items-center justify-content-center">
              <FaqCard ques={item.ques} answer={item.answer} />
            </Col>
          </Row>
        );
      })}
    </Container>
  );
};

export default Faq;
