import React from "react";
import aboutVideo from "../../assets/images/skvideo.mp4"; 

function LazyVideo() {
  return (
    <div className="video-wrapper">
      <video
        src={aboutVideo}
        className="about-video"
        loop
        autoPlay
        muted
        loading="lazy"
      />
      
    </div>
  );
}

export default LazyVideo;
