import { TextField } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import PanoramaOutlinedIcon from '@mui/icons-material/PanoramaOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';
import { ButtonBase } from "@mui/material";
import "./FeedModalContents.css";
import FeedModalHashtags from "./FeedModalHashtags";
import './Emoji.css';

const FeedModalContents = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [files, setFiles] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [imageSrc, setImageSrc] = useState("");
  const [hashArr, setHashArr] = useState([""]);

  useEffect(() => {
    console.log(hashArr);
  }, [hashArr]);

  // 사진 미리보기
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt="preview-img"
            style={{ width: "100px", padding: "10px" }}
          />
        )}
        <TextField
          style={{ display: "flex", padding: "5", flex: "1" }}
          multiline
          rows={5}
          placeholder="내용을 입력해주세요."
          variant="outlined"
        ></TextField>
      </div>

      <FeedModalHashtags hashArr={hashArr} setHashArr={setHashArr} />

      <div className="FeedModalContents">
        <div className="FeedModalContents__bottom">
          <div className="FeedModalContents__option">
            <ButtonBase variant="contained" component="label">
              <input
                type="file"
                hidden
                onChange={(e) => encodeFileToBase64(e.target.files[0])}
              />
              <PanoramaOutlinedIcon style={{ color: "#61b3ff" }} />
              &nbsp;&nbsp;<h3>사진</h3>
            </ButtonBase>
          </div>

          <div className="FeedModalContents__option">
            <ButtonBase variant="contained" component="label">
              <input
                type="file"
                hidden
                accept="img/*"
                onChange={(e) => encodeFileToBase64(e.target.files[0])}
              />
              <SmartDisplayOutlinedIcon style={{ color: "#8ee673" }} />
              &nbsp;&nbsp;<h3>동영상</h3>
            </ButtonBase>
          </div>

          <div className="FeedModalContents__option">
            <ButtonBase variant="contained" component="label">
              <SentimentSatisfiedAltOutlinedIcon style={{ color: "orange" }}  />
            
              &nbsp;&nbsp;<h3>좋아요</h3>
            </ButtonBase>
          </div>


          <div className="FeedModalContents__option">
            <ButtonBase variant="contained" component="label">
              <RateReviewOutlinedIcon style={{ color: "#fa81c0"}} />
              &nbsp;&nbsp;<h3>올리기</h3>
            </ButtonBase>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedModalContents;
