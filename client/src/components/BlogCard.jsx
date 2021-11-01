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
    <Container className="blog-card full-container mb-5 shadow bg-white rounded">
      <Row className={`flex-column flex-md-row`}>
        <Col className="d-flex align-items-center justify-content-center">
          <img src={src} alt="" className="blog-img" />
        </Col>
        <Col className=" mt-3 pt-4">
          <h3>{title}</h3>
          <p>
            {para}, {date}
          </p>
          <p>
            <Link to={`/blogs/${id}`}>Read More <AiOutlineArrowRight/></Link>
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogCard;
