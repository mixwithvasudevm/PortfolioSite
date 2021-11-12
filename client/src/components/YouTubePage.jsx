import React, { useEffect, useState } from "react";
import {
  Container,
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import youtube from "../api/youtube";
import Player from "./YoutubePlayer";



const YouTubePage = () => {
  const [user, setUser] = useState(null);
  const [url, setUrl] = useState("");
  const [page, setPage] = useState(1);
  const [load,setLoad]= useState(true);
  const [play, setPlay] = useState("");
  const [previous, setPrevious] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (user) {
      setUrl(user[0].snippet.resourceId.videoId);
      setLoad(false);
    }
  }, [user]);

  const fetchData = async () => {
    try {
      const res = await youtube.get("");
      // console.log(res.data)
      let loginData = res.data.items;
      let nexttoken = res.data.nextPageToken;

      // this will re render the view with new data

      setUser(loginData);
      setPlay(nexttoken);
    } catch (err) {
      console.log(err);
    }

    function changeUrl(index) {
      console.log(index);
      console.log(user[index].snippet.resourceId.videoId);
      setUrl(user[index].snippet.resourceId.videoId);
    }
  };

  const handleNext = async () => {
    setLoad(true);
    console.log(play);
    try {
      const current = page;
      const params={
        "pageToken":play
      }
      const res = await youtube.get("",{ 
       params
    })
        // console.log(res.data)
        let loginData = res.data.items;
        let nexttoken = res.data.nextPageToken;
        let prev= res.data.prevPageToken;
        // this will re render the view with new data
        setPrevious(prev);
        setUser(loginData);
        setPlay(nexttoken);
      setPage(current + 1);
    } catch (err) {
      console.log(err);
    }
  };

  const handlePrevious = async() => {
    const current = page;
    try{
    if (current > 1) {
      setLoad(true);
      const params={
        "pageToken":previous
      }
      const res = await youtube.get("",{ 
      params
    })
        // console.log(res.data)
        let loginData = res.data.items;
        let nexttoken = res.data.nextPageToken;
        let prev= res.data.prevPageToken;
        // this will re render the view with new data
        setPrevious(prev);
        console.log(previous)
        setUser(loginData);
        setPlay(nexttoken);
        setPage(current - 1);
    }
  }
  catch(err){
    console.log(err);
  }
  };
  return (
    <div>
      <Container fluid className=" mb-2">
      
      <Row className="mt-5 mb-4 ml-5">
         <Col className="mt-5 mb-4 ml-5" >
   
          <Container fluid className="album album-back mt-2 mb-2">
           
           <br/>
            <Player
              url={`https://www.youtube.com/watch?v=${url}`}
              cls="youtube-page-player-ytpage "
              clean="true"
            
            />
            </Container>
</Col>
        </Row>
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
        {!load&&
        <Row lg={3} className="youtube-page-thumb">
          {user &&
            user.map((item, index) => {
              // console.log(item.snippet.resourceId.videoId)
              // console.log(item.snippet.thumbnails.high.url)
              return (
                <Col className="mb-3 youtube-content" key={index}>
                  {/* {changeUrl(index)} */}
                  <Row>
                    <img
                      src={`${item.snippet.thumbnails.medium.url}`}
                      onClick={() => setUrl(item.snippet.resourceId.videoId)}
                    />
                  </Row>
                  <Row>
                    <Col> {`${item.snippet.title}`} </Col>
                  </Row>
                </Col>
              );
            })}
        </Row>
}
        <Row className="d-flex align-items-center justify-content-center mt-5">
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

export default YouTubePage;

//`${item.snippet.thumbnails.high.url}`
//onClick={setUrl(item.snippet.resourceId.videoId)}

{
  /* <Row lg={3} className="youtube-page-thumb">
{user &&
  user.map((item, index) => {
    // console.log(item.snippet.resourceId.videoId)
    // console.log(item.snippet.thumbnails.high.url)
    return (
      <Col className="mb-3 youtube-content" key={index}>
        {/* {changeUrl(index)} */
}
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
