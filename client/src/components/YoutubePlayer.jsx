import React from "react";
import ReactPlayer from "react-player/youtube";

const Player= (props) => {

const url=props.url;
const cls=props.cls;
  return (
    <div className={`${cls}`}>
            <ReactPlayer
              className="yt-player"
              url={url}
              controls={true}
              width="100%"
              height="100%"
              pip={true}
            />
    </div>
  );
};

export default Player;
