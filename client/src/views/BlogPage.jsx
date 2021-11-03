import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import * as api from "../api";


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
  const src = data.selectedFile;
  const title = data.title;
  const para = data.body;
  var date = reverseString(`${data.createdAt}`);
  console.log(date);
  document.title = `${data.title} - Blogs`;

  return (
    <Container fluid className="mt-5 mb-5 events-page">
      <Row className="d-flex align-items-center justify-content-center event-page-heading">
        <Col
          xs="12"
          lg="9"
          xl="8"
          className="d-flex align-items-center justify-content-center"
        >
          <img className="events-page-image" src={src} alt={title} />
        </Col>
        <Col className="heading">
        <h1 >{title}</h1>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col className="text-right" xs="12" lg="9" xl="8">
          <p className="mt-4 content">{date}</p>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col className="text-center" xs="12" lg="9" xl="8">
          <p className="mt-4  content">{para}</p>
        </Col>
      </Row>
      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col xs="12" lg="9" xl="8">
          <h5>
            <a href="/blogs">Back</a>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
