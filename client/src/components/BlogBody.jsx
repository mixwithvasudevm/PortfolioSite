import React, { Component, useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BlogCard from "./BlogCard";
import * as api from "../api";
import ShowBlogs from "./ShowBlogs";

const infoData = [];
const initialValue = [];

const BlogBody = (props) => {
  const [infoData, setInfoData] = useState(initialValue);
  const [page, setPage] = useState(1);
  useEffect(() => {
    api
      .fetchItems(page)
      .then((res) => {
        console.log(res.data.data);
        setInfoData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Container className="mt-5 py-3">
        <Row>
          <ShowBlogs />
        </Row>
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
                    id={item._id}
                  />
                </div>
                {/* </Fade> */}
              </Col>
            );
          })}
        </Row>
        <Row className="d-flex align-items-center justify-content-center mt-5">
          <Col className="d-flex align-items-center justify-content-center mt-5">
            <Pagination aria-label="Page navigation example" size="sm">
              <PaginationItem disabled>
                <PaginationLink href="#" previous />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">4</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">5</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" next />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BlogBody;
export { infoData };
