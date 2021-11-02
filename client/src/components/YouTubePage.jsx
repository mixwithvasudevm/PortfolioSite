import React, { Component, useEffect, useState } from "react";
import { Container,Row,Col } from "reactstrap";
import youtube from '../api/youtube';
import AudioPlayer from "./Audio";
import i1 from "./img/main.jpg";
import Player from "./YoutubePlayer";

const intialValue=[];

const YouTubePage =()=>{
    const [data,setData]=useState(intialValue);
    const [loading,setLoading]=useState(true);
    useEffect(() => {
        document.title = "YouTube-Mix With Vasudev";
        var API_key = "AIzaSyASk-OtQKcCa_0qWttUn-YB5WzFReT3ThM";
        var Id = "UUiU0DwnFdPN4hhnq2jKlEyw";
        var maxResults = 10;
        var url =
          "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+
          Id+
          "&key="+
          API_key+
          "&maxResults=" +
          maxResults;
         
          console.log(url);
          fetch(url)
          .then(function(response) {
            if (response.status >= 400) {
              throw new Error("Bad response from server");
            }
            return response.json();
          })
          .then(function(video) {
            setData(video.items);
            console.log(data);
            setLoading(false);
          })
          .catch(error => {
            console.error(error);
          });

      }, []);

          return(
    //   const fetchData=async()=>{

    //     let loginData = await youtube.get('')
    //   .then((response) => response.json())
    //   .then(data => {
    //     return data['retrieve-agent'];
    // });
    // console.log('loginData ===>', loginData.agent);
    // return {
    //   type: 'GET_AGENT_DETAILS',
    //   payload: loginData
    // }
    //     //  youtube.get('').then((res)=>{
    //     //      console.log(res.data.items)
    //     //      setData(res.data.items);
    //     //      {res.data.items.map((item, index) => {     

    //     //             setData({url:item.snippet.resourceId.videoId})
    //     //         })
    //     //        }
    //     //  });
    //     // setData(youtube.get(''));
    //     // console.log(youtube.get(''));
    //     // console.log(data);
    //   }
    <div>
    {!loading&&
     <Container>
     hello
         </Container>
    }
    </div>
    );
  }


export default YouTubePage;