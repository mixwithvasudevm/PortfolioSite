import React, { Component, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogCard from "./BlogCard";
import * as api from "../api";

const infoData = [];
const initialValue = [];
const BlogBody = (props) => {
  const [infoData, setInfoData] = useState(initialValue);
  api
    .fetchItems(1)
    .then((res) => {
      setInfoData(res.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <Container className="my-5 py-5">
        <Row className="d-flex align-items-center justify-content-center">
          {infoData.map((item, index) => {
            return (
              <Col key={index} xs="12" xl="10">
                {/* <Fade
                  timeout={500}
                  right={index & 1 ? true : false}
                  left={index & 1 ? false : true}
                > */}
                <div>
                  <BlogCard
                    title={item.title}
                    para={item.body}
                    src={item.src}
                    id={index}
                  />
                </div>
                {/* </Fade> */}
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default BlogBody;

export { infoData };
