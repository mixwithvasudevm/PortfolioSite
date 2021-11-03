import React, { Component, useEffect, useState } from "react";
import { Container,Row,Col } from "reactstrap";
import youtube from '../api/youtube';
import Player from "./YoutubePlayer";

const intialValue=[
  {
    
  }
];

const YouTubePage =()=>{
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
     <Container fluid className="mt-5 mb-5">
       <Row className="mt-5">
         <Col  className="mt-5">
         <Player url={`https://www.youtube.com/watch?v=${url}`} cls="youtube-page-player"/>
          </Col>
         </Row>
         <Row lg={3} className="youtube-page-">
        {user &&                       
          user.map((item,index)=>{
            // console.log(item.snippet.resourceId.videoId)
            // console.log(item.snippet.thumbnails.high.url)
                return(
                <Col  key={index}>
                {/* {changeUrl(index)} */}
               <img  src={`${item.snippet.thumbnails.medium.url}`} onClick={()=>setUrl(item.snippet.resourceId.videoId)}/>
               </Col>
           );
           })
          }
          </Row>
    </Container>
    </div>
    );
  }


export default YouTubePage;

//`${item.snippet.thumbnails.high.url}`
//onClick={setUrl(item.snippet.resourceId.videoId)}