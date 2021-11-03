import React, { Component, useEffect, useState } from "react";
import { Container,Row,Col } from "reactstrap";
import youtube from '../api/youtube_main_page';
import Player from "./YoutubePlayer";
//

const intialValue=[
  {
    
  }
];

const YouTubeMainPage =()=>{
    const [user,setUser]=useState(null);
    const [url,setUrl]=useState("");
    var video;
    useEffect(() => {
        document.title = "YouTube-Mix With Vasudev";
        fetchData();

      }, []);


      useEffect(() => {
        if(user)
        {
        setUrl(user[0].snippet.resourceId.videoId)
        }
      }, [user]);

      const fetchData=async()=>{
        try {
          const res = await youtube.get('');
          let loginData = res.data.items;
          // this will re render the view with new data
          console.log(res.data);
         setUser(loginData);
        //  console.log(loginData)
        //  console.log(user[0].snippet.thumbnails.high.url)
        console.log(url);
        } catch (err) {
          console.log(err);
        }

      

    function changeUrl(index){
          console.log(index)
                console.log((user[index].snippet.resourceId.videoId))
                setUrl(user[index].snippet.resourceId.videoId)
        }
        
    
      }

     return(
    <div>
     <Container fluid className="mb-5 album">
       <Row className="mt-5 mb-4 ml-5">
         <Col className="mt-5 mb-4 ml-5" >
         <Player url={`https://www.youtube.com/watch?v=${url}`} cls="main-page-player"/>
          </Col>
       
       <Col className="white-text mb-4 mt-5 mr-5">
        {user &&                       
          user.map((item,index)=>{
            // console.log(item.snippet.resourceId.videoId)
            // console.log(item.snippet.thumbnails.high.url)
                return(
                <Col  key={index}>
                {/* {changeUrl(index)} */}
               <p onClick={()=>setUrl(item.snippet.resourceId.videoId)}>
               {`${item.snippet.title}`}
               </p>
               </Col>
           );
           })
          }
          </Col>
          </Row>
    </Container>
    </div>
    );
  }


export default YouTubeMainPage;

//`${item.snippet.thumbnails.high.url}`
//onClick={setUrl(item.snippet.resourceId.videoId)}