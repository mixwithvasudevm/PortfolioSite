import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import * as api from "../api";
import parse from 'html-react-parser';

const intialValue = [];

function reverseString(str) {
  var year = "";
  var month="";
  var date="";
  for (var i = 0;i >= 0; i++) { 
    if(str==="T"){
      break;
    }
    if(str[i] === undefined) {return}
    if(str[i]==="-")
    {
      year=str.substring(0,i);
      month=str.substring(i+1,i+3);
      date=str.substring(i+4,i+6);
      break;
    }
}

var newString=`${date}/${month}/${year}`

return newString

}

const BlogPage = (props) => {
  console.log("lets go");
  const id = props.match.params.id;
  const [data, setData] = useState(intialValue);
  useEffect(() => {
    api
      .fetchItem(id)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  var date = reverseString(`${data.createdAt}`);
  console.log(date);
  document.title = `${data.title} - Blogs`;

  return (
    <div>
      <div className="blog-page-head">
        <br/>
        <br/> <br/> <br/> <br/>  <br/> <br/> <br/> 
      <Container className="shadow p-4 mb-5 rounded blog-events-page">
        <Row className="d-flex align-items-center justify-content-center">
        <Col className="mt-3" xs="12" lg="9" xl="8">
        <p className="font-weight-bold h2">{data.title}</p>
        </Col>
      </Row>
      <Row className="d-flex align-items-center justify-content-center event-page-heading">
        <Col
          xs="12"
          lg="9"
          xl="8"
          className="d-flex align-items-center justify-content-center mt-5"
        >
          <img className="events-page-image" src={data.selectedFile} alt={data.title} />
        </Col>
        </Row>
      <Row className="d-flex align-items-center justify-content-center">
        <Col className="d-flex flex-row-reverse" xs="12" lg="9" xl="8">
          <p className="mt-4 content text-right">{date}</p>
        </Col>
      </Row>
      <Row className=" d-flex align-items-center justify-content-center">
        <Col className="mt-5" xs="12" lg="9" xl="8">
          <p className="mt-4">
         
            {
              data.body && parse(data.body)
            }
            </p>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col xs="12" lg="9" xl="8">
          <p>
            <a href="/blogs">Back</a>
          </p>
        </Col>
      </Row>
    </Container>
      </div>
   
    </div>
  );
};

export default BlogPage;
