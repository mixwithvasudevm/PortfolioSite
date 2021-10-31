import React, { Component, useMemo, useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { createEditor } from "slate";
import { Slate, Editable, withReact } from "slate-react";
import RichEditor from "./RichEditor";
import ReadOnly from "./ReadOnly";
import * as api from "../api";
import "./css/blog.css";
// import FormApp from "./FormApp";

const BlogForm = () => {
  const editor = useMemo(() => withReact(createEditor()), []);
  // Add the initial value when setting up our state.
  const [value, setValue] = useState([
    {
      type: "paragraph",
      children: [{ text: "A line of text in a paragraph." }],
    },
  ]);
  return (
    <Slate
      editor={editor}
      value={value}
      onChange={(newValue) => setValue(newValue)}
    >
      <Editable />
    </Slate>
  );
};

const initialValue = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

const Form = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(initialValue);

  const submitBlog = async () => {
    console.log(body);
    const values = {
      title: title,
      body: body,
    };
    api
      .createItem(values)
      .then((response) => {
        setTitle(null);
        setBody(initialValue);
      })
      .catch((error) => {
        console.log(error);
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
