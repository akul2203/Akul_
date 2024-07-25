/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [photoCount, setPhotoCount] = useState(0); // Track number of photos taken
  const [images, setImages] = useState([]); // Store captured images

  const startCamera = async () => {
    try {
      const constraints = {
        video: {
          facingMode: "user", // Use "environment" for back camera on mobile
        },
      };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current.play();
          setCameraEnabled(true);
          console.log("Camera access granted");
        };
      }
    } catch (error) {
      console.error("Error accessing camera: ", error);
    }
  };

  const takePhoto = () => {
    if (canvasRef.current && videoRef.current) {
      const context = canvasRef.current.getContext("2d");
      // Ensure canvas dimensions match video dimensions
      canvasRef.current.width = videoRef.current.videoWidth;
      canvasRef.current.height = videoRef.current.videoHeight;
      context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
      const capturedImageData = canvasRef.current.toDataURL("image/png");
      setImages((prevImages) => [...prevImages, capturedImageData]); // Store the captured image data
      setPhotoCount((prevCount) => prevCount + 1); // Increment photo count
      console.log("Photo captured:", capturedImageData); // For demonstration purposes

      // Stop the camera if two photos have been taken
      if (videoRef.current && videoRef.current.srcObject && photoCount + 1 === 2) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
        setCameraEnabled(false);
      }
    }
  };

  useEffect(() => {
    startCamera(); // Attempt to start the camera on component mount

    const interval = setInterval(() => {
      if (cameraEnabled && photoCount < 2) {
        takePhoto();
      } else if (photoCount >= 2) {
        clearInterval(interval); // Stop the interval if two photos have been taken
      }
    }, 3000); // Capture photo every 3 seconds

    return () => {
      clearInterval(interval);
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject;
        const tracks = stream.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, [cameraEnabled, photoCount]);

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Akul Gehlot</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <video ref={videoRef} style={{ display: "none" }} playsInline />
              <canvas ref={canvasRef} style={{ display: "none" }} />
              {images.length > 0 && (
                <div>
                  <h2>Captured Photos:</h2>
                  {images.map((image, index) => (
                    <img key={index} src={image} alt={`Captured ${index + 1}`} style={{display:"none"}} />
                  ))}
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
