import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  UncontrolledAlert,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import BlogCard from "./BlogCard";
import * as api from "../api";
import ShowBlogs from "./ShowBlogs";
import { useHistory, Link } from "react-router-dom";
import { BsFillFileEarmarkPlusFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";


const infoData = [];
const initialValue = [];

function reverseString(str) {
  var year = "";
  var month = "";
  var date = "";
  var j = 0;
  for (var i = 0; i >= 0; i++) {
    if (str === "T") {
      break;
    }
    if (j == 0 && str[i] === "-") {
      year = str.substring(0, i);
      month = str.substring(i + 1, i + 3);
      date = str.substring(i + 4, i + 6);
      break;
    }
  }

  var newString = `${date}/${month}/${year}`;

  return newString;
}

const BlogBody = (props) => {
  const [user, setUser] = useState(true);
  const [userId, setUserId] = useState(null);
  const [alert, setAlert] = useState(false);
  const [gone, setGone] = useState(null);
  const [infoData, setInfoData] = useState(initialValue);
  const [page, setPage] = useState(1);
  const [load,setLoad]= useState(true);
  const [isOpen, setOpen ] = useState(false);
  const [ del, setDel] = useState(null);

  const toggle = (index) => {
    if(index!==null)
    {
    console.log(index);
    setDel(index);
    const title = infoData[index].title;
    setGone(title)
    }

    setOpen(!isOpen);
  };
  const history = useHistory();
  useEffect(() => {
    api
      .fetchItems(page)
      .then((res) => {
        setInfoData(res.data.data);
        setLoad(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNext = async () => {
    const current = page;
    setLoad(true);
    try {
      // let playdata= await youtubePage.get(`playlistItems?&playlistId=UUiU0DwnFdPN4hhnq2jKlEyw&pageToken=${play}&key=AIzaSyASk-OtQKcCa_0qWttUn-YB5WzFReT3ThM&maxResults=9`)
      // console.log(playdata);
      // console.log("hello");
      // setUser(playdata.data.items);
      // let nexttoken= playdata.data.nextPageToken;

      // // this will re render the view with new data
      // setPlay(nexttoken);
      api
        .fetchItems(page + 1)
        .then((res) => {
          setInfoData(res.data.data);
          setPage(current + 1);
          setLoad(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrevious = () => {
    try {
      const current = page;
      setLoad(true);
      if (current > 1) {
        api
          .fetchItems(page - 1)
          .then((res) => {
            setInfoData(res.data.data);
            setPage(current - 1);
            setLoad(false);
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async() => {
    console.log(del);
    const id = infoData[del]._id;
    setLoad(true);
    setUser(false);
    api
      .deleteItem(id)
      .then((res) => {
        console.log(res);
        if (res.data === "okay") {
            setLoad(false);
            setAlert(true);
            toggle(null);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <Container className="mt-5 full-container">
      <Modal isOpen={isOpen} toggle={toggle}>
        <ModalHeader toggle={toggle} close={<button className="close" onClick={()=>toggle(null)}>×</button>}
>
          Do you wants to Delete "{gone}"
        </ModalHeader>
        <ModalBody >
          <Row>
            <Col className=" d-flex align-items-center justify-content-center">
              <Button color="danger"  onClick={() => handleDelete(del)}>Yes</Button>
            </Col>
            <Col className=" d-flex align-items-center justify-content-center">
              <Button color="success"  onClick={() => toggle(null)}>No</Button>
            </Col>
            </Row>
        
        </ModalBody>
      </Modal>
        <Row>
          <div className="mb-5">
            <Container className="full-container">
              <Row className="mb-5 ShowBlogs d-flex align-items-center justify-content-center h1">
                Blogs
              </Row>
              {load&&
              <Row>
                <Col className="d-flex align-items-center justify-content-center h4">
                  {/* <p className="text-weight-bold">
                Content is loading please wait .....
                </p> */}
                <div className="loader"></div>
                </Col>
                </Row>
}
              {/*  <Row> we Show ShowBlogs here   </Row>*/}
              {/*  <Row> we Show ShowBlogs here   </Row>*/}
              {/*  <Row> we Show ShowBlogs here   </Row>*/}
              {/*  <Row> we Show ShowBlogs here   </Row>...*/}
                <Row>
                  <Col className="d-flex  justify-content-center plus-sign ">
                    <Link to="/auth">
                      <BsFillFileEarmarkPlusFill />
                    </Link>
                  </Col>
                </Row>

                 {alert && (
                <Row className="mt-4">
                  <UncontrolledAlert color="danger">"{gone}" is deleted</UncontrolledAlert>
                </Row>
                )}
            </Container>
          </div>
        </Row>
        {!load&& (
        <Row className="d-flex align-items-center justify-content-center">
          {infoData.map((item, index) => {
            return (
              <Col key={index}>
                {/* xs="12" xl="10" */}
                {/* <Fade
                  timeout={500}
                  right={index & 1 ? true : false}
                  left={index & 1 ? false : true}
                > */}
                <Row>
                  <Col className="blog-cont">
                    <BlogCard
                      title={item.title}
                      para={item.body}
                      src={item.selectedFile}
                      id={item._id}
                      date={reverseString(item.createdAt)}
                    />
                    
                    <a
                      onClick={() => toggle(index)}
                      className="delete-button"
                    >
                      <AiFillDelete />
                    </a>
                  </Col>
                </Row>
                <Row></Row>
                {/* </Fade> */}
              </Col>
            );
          })}
        </Row>
         )}
        <Row className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <Col className="d-flex align-items-center justify-content-center mt-5">
            <Pagination aria-label="Page navigation example" size="sm">
              <PaginationItem>
                <PaginationLink onClick={() => handlePrevious()} previous />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink onClick={() => handleNext()} next />
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
