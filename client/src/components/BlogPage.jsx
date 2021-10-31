import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const BlogPage = (props) => {
  const src = props.infoData?.src;
  const title = props.infoData?.title;
  const para = props.infoData?.para;
  const date = props.infoData?.date;

  useEffect(() => {
    // if (props.infoData === undefined)
    //   return <Error404 msg="Unexisting Event" />;
      
    document.title = `${title} - Blogs`;
  }, []);

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
            <Link to="/blog">Back</Link>
          </h5>
        </Col>
      </Row>
    </Container>
  );
};

export default BlogPage;
