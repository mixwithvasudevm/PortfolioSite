import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";
import parse from 'html-react-parser';
const BlogCard = ({title,id,para,src,date}) => {

  const content=para.substring(0, 20)+"....";

  return (
    
    <Container className="blog-card full-container mb-5 shadow bg-white rounded p-2">
      <Row className={`flex-column flex-md-row`}>
        <Col className="d-flex align-items-center justify-content-center ">
          <img src={src} alt="blog image" className="blog-img" />
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
             {parse(content)}
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
