import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import BlogCard from "./BlogCard";
import * as api from "../api";
import ShowBlogs from "./ShowBlogs";
import { useHistory, Link} from "react-router-dom";
import {BsFillFileEarmarkPlusFill} from "react-icons/bs";

const infoData = [];
const initialValue = [];

function reverseString(str) {
  var year = "";
  var month="";
  var date="";
  var j=0;
  for (var i = 0;i >= 0; i++) { 
    if(str==="T"){
      break;
    }
    if(j==0&&str[i]==="-")
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

const BlogBody = (props) => {
  const [user,setUser]=useState(true);
  const [userId,setUserId]=useState(null);
  const [infoData, setInfoData] = useState(initialValue);
  const [page, setPage] = useState(1);
  const history = useHistory();
  useEffect(() => {
    api
      .fetchItems(page)
      .then((res) => {
        setInfoData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Container className="mt-5 full-container">
        <Row>
        <div className="mb-5">
        <Container className="full-container">
          <Row className="mb-5 ShowBlogs d-flex align-items-center justify-content-center h1">
              Our Blogs
          </Row>
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>*/}
          {/*  <Row> we Show ShowBlogs here   </Row>...*/}
        { user&& (<Row>
           <Col className="d-flex  justify-content-center plus-sign ">
              
              <Link to="/auth">
               <BsFillFileEarmarkPlusFill/>
              </Link>
            </Col>
          </Row>)}
        </Container>
      </div>
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
                    src={item.selectedFile}
                    id={item._id}
                    date={reverseString(item.createdAt)}
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
