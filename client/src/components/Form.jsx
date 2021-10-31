import React, { Component ,useMemo,useState} from "react";
import { Button, Container, Row, Col } from "reactstrap";
import {createEditor} from 'slate';
import {Slate, Editable, withReact} from 'slate-react';
import FormApp from "./FormApp";

const BlogForm =()=>{
    const editor=useMemo(() => withReact(createEditor()), [])
    // Add the initial value when setting up our state.
    const [value, setValue] = useState([
    {
         type: 'paragraph',
         children: [{ text: 'A line of text in a paragraph.' }],
    },
    
    ])
    return(
        <Slate
            editor={editor}
            value={value}
            onChange={newValue => setValue (newValue) }
        >
             <Editable />
        </Slate>
        
    )
}

class Form extends Component {
  render() {
      
    return (
      <div className="ShowBlogs mt-5 mx-lg-4 mb-5">
        <Container className="ml-5 mr-5 ">
          <Row className="mb-5">
            <Col className="mt-5 d-flex align-items-center justify-content-center h1">
              Add New Blog
            </Col>
          </Row>  

<Row>
<FormApp /> 
</Row>


         <Row>
         <Col className="d-flex align-items-center justify-content-center ">
                <a href="/blogs/add">
                <Button color="success" >Add Blog</Button>{' '}
                </a>
          </Col>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default Form;
