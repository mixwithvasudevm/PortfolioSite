import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Player from "./YoutubePlayer";
class StudentBody extends Component {
  render() {
    return (
      <div className="StudentBody mt-5 mb-5">
        <Container className=" ml-4 mr-4">
          <Row className="mb-4">
            <Col className="mt-5 d-flex align-items-center justify-content-center h1">
              <h2 className="courses-offered">STUDENT'S WORK</h2>
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/SFjmkB8uFmQ" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/1hufWL6oCzw" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/BBfog24cHv8" />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/q1WwLOCkmiw" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/Rpwsoh6XnV4" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/YfzCOvIzrYY" />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/klnaxkaVubY" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/swh6Kp40J7s" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/RWaBZCACIsQ" />
            </Col>
          </Row>

          <Row className="mb-2">
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/y1jICpIlbfk" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/wP66iDiQvNM" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/0zG4YAK28Yc" />
            </Col>
          </Row>
          <Row className="mb-2">
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/8bTfGfH0FFc" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/v27mnauBE18" />
            </Col>
            <Col xs="15" lg="4" className="mb-2 ">
              <Player cls="student-video"url="https://youtu.be/TiqU1J-e5WY" />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default StudentBody;
