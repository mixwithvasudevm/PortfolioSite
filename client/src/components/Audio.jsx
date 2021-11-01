import React, { useState, useRef, useEffect } from "react";
import { FaBackward } from "react-icons/fa";
import { FaForward } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import { GiSpeaker, GiSpeakerOff } from "react-icons/gi";
import { Container, Row, Col } from "reactstrap";
import "./css/audio.css";
import i1 from "./img/main-small.jpg";

const AudioPlayer = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [audio, setAudio] = useState(true);

  console.log(audio);

  // references
  const audioPlayer = useRef(); // reference our audio component
  const progressBar = useRef(); // reference our progress bar
  const animationRef = useRef(); // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const audioOf = () => {
    const pre = audio;

    setAudio(!pre);
    console.log(audio);
    const x = document.getElementById("myAudio");
    x.muted = audio;
  };

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  };

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  };

  return (
    <Container className="full-container audioPlayer px-4">
      <Row className="mx-lg-4 audio-content">
        <Col className="mx-lg-4 mt-2">
          <img src={i1} className="audio-img" />
        </Col>
        <Col>
          <Container>
            <Row>
              <Col className="mt-4 audio-album-name">Overexposed</Col>
            </Row>
            <Row>
              <Col className="audio-album">Album by Maroon 5</Col>
            </Row>
          </Container>
        </Col>
        <audio
          id="myAudio"
          ref={audioPlayer}
          src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/af52a99b-88c0-4638-b120-d46e142d06d3/audio/500344fb-2e2b-48af-be86-af6ac341a6da/default_tc.mp3"
          preload="metadata"
        ></audio>
        <Col className="mt-4">
          <button className="forwardBackward" onClick={backThirty}>
            <FaBackward />
          </button>
        </Col>
        <Col className="mt-3">
          <button onClick={togglePlayPause} className="playPause">
            {isPlaying ? <FaPause /> : <FaPlay className="play" />}
          </button>
        </Col>
        <Col className="mt-4">
          <button className="forwardBackward" onClick={forwardThirty}>
            <FaForward />
          </button>
        </Col>
        {/* current time */}
        {/* progress bar */}
        <Col className="mt-3">
          <Row className="">
            <Col className="ml-3  d-flex align-items-center justify-content-center">
              <div className="currentTime">
                {calculateTime(currentTime)} &#47;
              </div>
              <div className="duration">
                {duration && !isNaN(duration) && calculateTime(duration)}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="">
                <input
                  type="range"
                  className="progressBar"
                  defaultValue="0"
                  ref={progressBar}
                  onChange={changeRange}
                />
              </div>
            </Col>
          </Row>
        </Col>
        {/* duration */}
        <Col className="mt-4  audio-speaker" onClick={audioOf}>
          {audio ? <GiSpeaker /> : <GiSpeakerOff />}
        </Col>
      </Row>
    </Container>
  );
};

export default AudioPlayer;
