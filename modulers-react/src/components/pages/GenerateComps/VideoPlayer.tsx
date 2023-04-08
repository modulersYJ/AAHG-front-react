// VideoPlayer.tsx
import React, { useRef, useEffect } from "react";
import styled from "styled-components";

interface VideoPlayerProps {
  videoSrc: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = videoSrc;
    }
  }, [videoSrc]);

  return (
    <StyledVideoOutlet>
      <video
        style={{ width: "600px" }}
        ref={videoRef}
        title="비디오임"
        autoPlay
        loop
        controlsList="nodownload noremoteplayback"
      ></video>
    </StyledVideoOutlet>
  );
};

const StyledVideoOutlet = styled.div`
  width: 600px;
  height: 300px;
  background-color: orange;
`;

export default VideoPlayer;
