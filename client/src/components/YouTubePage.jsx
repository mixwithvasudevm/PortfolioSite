import React, { Component, useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import youtube from "../api/youtube";
import youtubePage from "../api/youtubePage"
import Player from "./YoutubePlayer";
import mix from "../components/img/mix.png";

const intialValue = [{}];

const YouTubePage = () => {
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1);
  const [play,setPlay]= useState("");
  var video;
  useEffect(() => {
    document.title = "YouTube-Mix With Vasudev";
    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      setUrl(user[0].snippet.resourceId.videoId);
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const res = await youtube.get("");
      // console.log(res.data)
      let loginData = res.data.items;
      let nexttoken= res.data.nextPageToken;
      
      // this will re render the view with new data

      setUser(loginData);
      setPlay(nexttoken);
      //  console.log(user[0].snippet.thumbnails.high.url)
      console.log(url);
    } catch (err) {
      console.log(err);
    }

    function changeUrl(index) {
      console.log(index);
      console.log(user[index].snippet.resourceId.videoId);
      setUrl(user[index].snippet.resourceId.videoId);
    }
  };

  const handleNext = async() => {
    try{
    const current = page;
    // let playdata= await youtubePage.get(`playlistItems?&playlistId=UUiU0DwnFdPN4hhnq2jKlEyw&pageToken=${play}&key=AIzaSyASk-OtQKcCa_0qWttUn-YB5WzFReT3ThM&maxResults=9`)
    // console.log(playdata);
    // console.log("hello");
    // setUser(playdata.data.items);
    // let nexttoken= playdata.data.nextPageToken;
      
    // // this will re render the view with new data
    // setPlay(nexttoken);
    setPage(current + 1);
    }
    catch(err){
      console.log(err);
    }

  };

  const handlePrevious=() =>{
    const current = page;
    if(current>1)
    {
    setPage(current-1);
    }
  }
  return (
    <div>
      <Container fluid className="mt-5 mb-2">
        <Row className="youtube-heading text-white">
          <Col className="d-flex align-items-center justify-content-center">
            <img src={mix} />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col className="mt-5">
            <Player
              url={`https://www.youtube.com/watch?v=${url}`}
              cls="youtube-page-player"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-center justify-content-center mt-5 mb-5">
          <Col className="d-flex align-items-center justify-content-center mt-5">
            <Pagination aria-label="Page navigation example" size="sm">
              <PaginationItem >
                <PaginationLink onClick={()=>handlePrevious()} previous />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink  onClick={()=>handleNext()} next />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
        <Row lg={3} className="youtube-page-thumb">
{user &&
  user.map((item, index) => {
    // console.log(item.snippet.resourceId.videoId)
    // console.log(item.snippet.thumbnails.high.url)
    return (
      <Col className="mb-3 youtube-content" key={index}>
        {/* {changeUrl(index)} */}
        <Row>
         <img src={`${item.snippet.thumbnails.medium.url}`}
             onClick={() => setUrl(item.snippet.resourceId.videoId)} />
      </Row>
      <Row>
        <Col> {`${item.snippet.title}`} </Col>
      </Row>
    </Col>
   );   })}
 </Row>
        <Row className="d-flex align-items-center justify-content-center mt-5">
          <Col className="d-flex align-items-center justify-content-center mt-5">
            <Pagination aria-label="Page navigation example" size="sm">
              <PaginationItem >
                <PaginationLink onClick={()=>handlePrevious()} previous />
              </PaginationItem>
              <PaginationItem active>
                <PaginationLink href="#">{page}</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink  onClick={()=>handleNext()} next />
              </PaginationItem>
            </Pagination>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default YouTubePage;

//`${item.snippet.thumbnails.high.url}`
//onClick={setUrl(item.snippet.resourceId.videoId)}






{/* <Row lg={3} className="youtube-page-thumb">
{user &&
  user.map((item, index) => {
    // console.log(item.snippet.resourceId.videoId)
    // console.log(item.snippet.thumbnails.high.url)
    return (
      <Col className="mb-3 youtube-content" key={index}>
        {/* {changeUrl(index)} */}
//         <Row>
//           {" "}
//           <img
//             src={`${item.snippet.thumbnails.medium.url}`}
//             onClick={() => setUrl(item.snippet.resourceId.videoId)}
//           />{" "}
//         </Row>
//         <Row>
//           <Col> {`${item.snippet.title}`} </Col>
//         </Row>
//       </Col>
//     );
//   })}
// </Row> */}
