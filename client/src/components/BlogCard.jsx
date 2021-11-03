import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";

const BlogCard = (props) => {
  const title = props.title;
  const id = props.id;
  const para = props.para;
  const src = props.src;
  const date = props.date;
  console.log({ title });
  return (
    <Container className="blog-card full-container mb-5 shadow bg-white rounded p-2">
      <Row className={`flex-column flex-md-row`}>
        <Col className="d-flex align-items-center justify-content-center ">
          <img src={src} alt="" className="blog-img" />
        </Col>
      </Row>
        <Row>
        <Col className=" mt-5">
          <Row>
            <Col>
          <h4>{title}</h4>
          </Col>
          <Col className="blog-date">
          {date}
          </Col>
          </Row>
          <Row>
            <Col className="blog-para">
            {para}
          </Col>
          </Row>
          <Row className="blog-read">
            <Link to={`/blogs/${id}`}>Read More <AiOutlineArrowRight/></Link>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogCard;
