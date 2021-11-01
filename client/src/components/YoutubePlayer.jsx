import React from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col } from "reactstrap";

const Player= (props) => {

const url=props.url;
  return (
    <Container className="full-container ">
      <Row className="">
        <Col>
          <div className="">
            <ReactPlayer
              className="yt-player"
              url={url}
              controls={true}
              width="100%"
              height="100%"
              pip={true}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Player;
