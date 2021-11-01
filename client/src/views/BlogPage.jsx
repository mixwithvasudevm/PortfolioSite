import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import * as api from "../api";

const intialValue = [];

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

  const src = data.src;
  const title = data.title;
  const para = data.body;
  const date = data.date;
  document.title = `${data.title} - Blogs`;

  return (
    <Container className="mt-5 mb-5 events-page">
      <Row className="d-flex align-items-center justify-content-center">
        <Col
          xs="12"
          lg="9"
          xl="8"
          className="d-flex align-items-center justify-content-center"
        >
          <img className="events-page-image" src={src} alt={title} />
        </Col>
      </Row>

      <Row className="mt-5 d-flex align-items-center justify-content-center">
        <Col className="text-center" xs="12" lg="9" xl="8">
          <h1 className="heading">{title}</h1>

          <p className="mt-4  content">{para}</p>
          <p className="mt-4 content">{date}</p>
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
