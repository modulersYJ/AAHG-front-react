import React, { useRef, useState, useEffect } from "react";
import { OutletDefault } from "../common/Outlet";
import styled from "styled-components";
import { RoundButton } from "../common/Buttons";
import { Link } from "react-router-dom";
import axios from "axios";
import VideoPlayer from "./GenerateComps/VideoPlayer";

type StyledImgOutletProps = {
  imageUrl: string;
};

const Match = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [fileState, setFileState] = useState<File | null>(null);
  const [isWaiting, setIsWaiting] = useState(false);
  const [warning, setWarning] = useState(false);
  const [imageUrl, setImageUrl] = useState("");
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const localServerUrl = "http://127.0.0.1:8000";

  // useEffect(() => {
  //   if (videoRef.current && videoRef.current.readyState >= 3) {
  //     setVideoLoaded(true);
  //   }

  // }, [videoRef]);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setFileState(selectedFile);
      setImageUrl(URL.createObjectURL(selectedFile));
    }
  };

  const sendFile = async () => {
    if (!fileState) {
      setWarning(true);
      return;
    }

    setIsWaiting(true);
    const formData = new FormData();
    formData.append("image", fileState);
    try {
      console.log(`${localServerUrl}/core/gen_obj_temp/`);
      const res = await axios.post(
        `${localServerUrl}/core/gen_obj_temp/`,
        formData,
        {
          responseType: "blob", // blob변환
        }
      );
      if (res.status === 200) {
        console.log("Video received");
        setWarning(false);
        const videoUrl = URL.createObjectURL(res.data);
        setVideoSrc(videoUrl); // 수정
        // if (videoRef.current) {
        //   videoRef.current.src = videoSrc;
        // }
      } else {
        console.log("Error receiving video!");
      }
    } catch (err) {
      console.log("Error receiving video", err);
    }
    setIsWaiting(false);
  };

  return (
    <OutletDefault>
      <h1 style={{ textAlign: "center" }}>OBJ 만들기</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {videoSrc ? (
          <VideoPlayer videoSrc={videoSrc} />
        ) : (
          // <StyledVideoOutlet>
          //   <video ref={videoRef} title="비디오임"></video>
          // </StyledVideoOutlet>
          <StyledImgOutlet title="이미지임" imageUrl={imageUrl} />
        )}

        <StyledButtonsOutlet>
          <input
            type="file"
            id="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleFileInput}
          />
          <label
            htmlFor="file"
            style={{
              margin: "10px",
              width: "100px",
              height: "50px",
              borderRadius: "20px",
              backgroundColor: "blue",
              color: "white",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            업로드
          </label>
          {warning && <h3 style={{ color: "red" }}>이미지를 업로드하세요!</h3>}
          {isWaiting ? (
            <h3>스피너</h3>
          ) : (
            <RoundButton onClick={sendFile}>만들기!</RoundButton>
          )}

          <Link to={"/match"}>
            <RoundButton>매칭</RoundButton>
          </Link>
        </StyledButtonsOutlet>
      </div>
    </OutletDefault>
  );
};

export default Match;

const StyledImgOutlet = styled.div<StyledImgOutletProps>`
  width: 600px;
  height: 300px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.imageUrl});
  background-color: orange;
`;

const StyledVideoOutlet = styled.div`
  width: 600px;
  height: 400px;
  background-color: orange;
`;

const StyledButtonsOutlet = styled.div`
  width: 520px;
  padding-left: 40px;
  padding-right: 40px;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
`;
