// src/components/VideoBackground/VideoBackground.jsx
import React from "react";
import "./VideoBackground.css";

const VideoBackground = ({ videoSrc, children }) => {
  return (
    <div className="video-background-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="video-content">{children}</div>
    </div>
  );
};

export default VideoBackground;
