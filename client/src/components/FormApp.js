import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import RichEditor from "./RichEditor";
// import ReadOnly from "./ReadOnly";
//by importing more we can add title and pics also

const FormApp = () => {
  const [body, setBody] = useState(initialValue);
  console.log(JSON.stringify(body));
  return (
    <Container>
      <Row>
        <Col>
        <h3>BODY</h3>
        </Col>
        </Row>
      <Row>
        <RichEditor value={body} setValue={setBody} />
      </Row>
      {/* <ReadOnly initialValue={initialValue} /> */}
    </Container>
  );
};

export default FormApp;

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];
