import React from 'react';
import { useState, useEffect, useRef } from "react";
import "./scan.css"

function WebcamCapture() {
  const [stream, setStream] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const getVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        setStream(stream);
      } catch (error) {
        console.log("Something went wrong!");
      }
    };

    getVideo();
  }, []);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const freezeVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPaused(true);
    }
  };

  const resumeVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPaused(false);
    }
  };

  // const handleFile = (file) => {
  //   console.log("File uploaded:", file);
  // };
  

  return (
    <div>
      <div>
        <video autoPlay id="webcam" ref={videoRef} ></video>
      </div>
      <div className='buttonContainer'>
      {isPaused && (
        <button className="button" id="capture" onClick={resumeVideo}>Resume Camera</button>
      )}
      {!isPaused && (
        <button className="button" id="capture" onClick={freezeVideo}>Capture</button>
        )}
        <button className="button" id="continue" onClick={() => {
          setTimeout(() => {window.location.href = "/process"}, 2500);
          
        }}>Continue</button>
        </div>
    </div>
  );
}

export default WebcamCapture;