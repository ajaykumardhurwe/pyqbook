import React from "react";
import "./App.css";
import backgroundVideo from "../src/videos/homeBgVideo.mp4";

function App() {
  return (
    <div className="App">
      <div className="video-container">
        <video autoPlay loop muted className="background-video">
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="content">
        <h1 className="title">
          {/* Welcome to My Page */}

        </h1>
        <p className="description">
          {/* This is a simple single-page app with a full-screen background video. */}
        </p>
      </div>
    </div>
  );
}

export default App;
