import { React, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { AiOutlineMinus } from "react-icons/ai";
import { Container, Row, Col } from "reactstrap";
import { Toast, ToastBody, ToastHeader, Collapse } from "reactstrap";

const FaqCard = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const ques = props.ques;
  const answer = props.answer;

  return (
    <div className="p-3 my-2 rounded">
      <Toast className="faq-card">
        <ToastHeader onClick={toggle} className="faq-card-header">
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">{ques}</div>
            <div className="d-flex align-items-center p-3">
              {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
          </div>
        </ToastHeader>
        <Collapse isOpen={isOpen}>
          <ToastBody>{answer}</ToastBody>
        </Collapse>
      </Toast>
    </div>
  );
};

export default FaqCard;
