import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BlogCard = (props) => {
  const title = props.title;
  const id = props.id;
  const para = props.para;
  const src = props.src;
  const date = props.date;
  return (
    <Container>
      <Row className={`flex-column flex-md-row`}>
        <Col>
          <img src={src} alt="" />
        </Col>
        <Col className="pt-4">
          <h3>{title}</h3>
          <p>
            {para}, {date}
          </p>
          <h5>
            <Link to={`/blogs/${id}`}>Read More</Link>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogCard;
