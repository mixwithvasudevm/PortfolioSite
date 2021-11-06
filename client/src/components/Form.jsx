import React, { useMemo, useState } from "react";
import { Button, Container, Row, Col, Alert } from "reactstrap";
import FileBase from "react-file-base64";

import { useHistory } from "react-router-dom";
import * as api from "../api";
import "./css/blog.css";

// 

import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";


const CustomHeart = () => <span>♥</span>;

function insertHeart() {
  const cursorPosition = this.quill.getSelection().index;
  this.quill.insertText(cursorPosition, "♥");
  this.quill.setSelection(cursorPosition + 1);
}

/*
 * Custom toolbar component including the custom heart button and dropdowns
 */
const CustomToolbar = () => (
  <div id="toolbar">
    <select className="ql-font">
      <option value="arial" selected>
        Arial
      </option>
      <option value="comic-sans">Comic Sans</option>
      <option value="courier-new">Courier New</option>
      <option value="georgia">Georgia</option>
      <option value="helvetica">Helvetica</option>
      <option value="lucida">Lucida</option>
    </select>
    <select className="ql-size">
      <option value="extra-small">Size 1</option>
      <option value="small">Size 2</option>
      <option value="medium" selected>
        Size 3
      </option>
      <option value="large">Size 4</option>
    </select>
    <select className="ql-align" />
    <select className="ql-color" />
    <select className="ql-background" />
    <button className="ql-clean" />
    <button className="ql-insertHeart">
      <CustomHeart />
    </button>
  </div>
);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

/*
 * Editor component with custom toolbar and content containers
 */
class Editor extends React.Component {
 // state = { editorHtml: "" };
  
  handleChange = html => {
    //this.setState({ editorHtml: html });
    this.props.setValue(html);
    // console.log(this.props.value);
   // console.log(html);
  };

  static modules = {
    toolbar: {
      container: "#toolbar",
      handlers: {
        insertHeart: insertHeart
      }
    }
  };

  static formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "color"
  ];

  render() {
    return (
      <div className="text-editor">
        <CustomToolbar />
        <ReactQuill
          value={this.props.value}
          onChange={this.handleChange}
          placeholder={this.props.placeholder}
          modules={Editor.modules}
          formats={Editor.formats}
        />
      </div>
    );
  }
}

// 
// const initialValue = [
//   {
//     type: "paragraph",
//     children: [{ text: "" }],
//   },
// ];

const Form = () => {
  const [title, setTitle] = useState(null);
  const [body, setBody] = useState(null);
  const [selectedFile,setSelectedFile]=useState(null);
  const [alert, setAlert] = useState(false);

  const history = useHistory();
  const submitBlog = async (e) => {
    // e.preventDefault();

    // console.log(Editor.html);
    const values = {
      title: title,
      body: body,
      selectedFile: selectedFile.selectedFile,
    };

    console.log(values);
    api
      .createItem(values)
      .then((response) => {
        setTitle(null);
        setBody(null);
        setSelectedFile(null);
        history.push("/blogs");
      })
      .catch((error) => {
        console.log(error);
        setAlert(true);
      });
  };

  return (
    <div className=" mt-5 mx-lg-4 mb-5">
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
            <Editor value={body} setValue = {setBody} placeholder={"Write something or insert a heart ♥"}/>
              {/* <RichEditor value={body} setValue={setBody} /> */}
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
