import React from "react";
import ReactPlayer from "react-player/youtube";
import { Container, Row, Col } from "reactstrap";

const YouTube = () => {
  return (
    <Container className="full-container ">
      <Row className="">
        <Col>
          <br />
          <br /> <br /> <br />
          <div className="yt-player-wrapper">
            <ReactPlayer
              className="yt-player"
              url="https://www.youtube.com/watch?v=iHB76-kIreA"
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

export default YouTube;
