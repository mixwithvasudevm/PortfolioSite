import React, { useMemo, useState } from "react";
import { Button, Container, Row, Col, Alert } from "reactstrap";
import FileBase from "react-file-base64";
import RichEditor from "./RichEditor";
import { useHistory } from "react-router-dom";
import * as api from "../api";
import "./css/blog.css";
// import FormApp from "./FormApp";

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const Form = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(initialValue);
  const [selectedFile,setSelectedFile]=useState(null);
  const [alert, setAlert] = useState(false);

  const history = useHistory();
  const submitBlog = async (e) => {
    // e.preventDefault();
    console.log(selectedFile);
    const values = {
      title: title,
      body: "xyz",
      selectedFile: selectedFile.selectedFile,
    };

    console.log(values);
    api
      .createItem(values)
      .then((response) => {
        setTitle(null);
        setBody(initialValue);
        history.push("/blogs");
      })
      .catch((error) => {
        console.log(error);
        setAlert(true);
      });
  };

  return (
    <div className="ShowBlogs mt-5 mx-lg-4 mb-5">
      <Container className="ml-5 mr-5 ">
        <Row className="mb-5">
          <Col className="mt-5 d-flex align-items-center justify-content-center h1">
            Add New Blog
          </Col>
        </Row>
        {alert && (
          <Row className="mt-4">
            <Alert color="danger">Please fill all fields</Alert>
          </Row>
        )}
        <Row>
          <h3>TITLE</h3>
        </Row>
        <Row className="mx-lg-1">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="blog-title-input"
            placeholder="Enter Title "
          />
        </Row>

        <Row>
          <Container className="mt-5">
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
        </Row>
        <Row>
        <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setSelectedFile({ selectedFile: base64 })
            }
          />
          </Row>

        <Row>
          <Col className="d-flex align-items-center justify-content-center ">
            <Button class="dark-btn" onClick={submitBlog}>
              Create
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;
