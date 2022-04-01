import React, { useEffect, useState } from "react";
import "./Post.css";
import { Avatar, Box } from "@material-ui/core";
//import ThumbUpIcon from "@material-ui/icons/ThumbUp";

import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import { AvatarGroup, Button, TextField } from "@mui/material";
import "./Feed.css";
import PostReply from "./PostReply";
import { Link } from "react-router-dom";

import SentimentSatisfiedAltOutlinedIcon from '@mui/icons-material/SentimentSatisfiedAltOutlined';
import { color } from "@mui/system";



function Post({ profilePic, image, username, timestamp, message, hashtag }) {
  console.log(profilePic);

  const [isShow, setIsShow] = useState(false);
  useEffect(() => {
    console.log(isShow);
  }, []);

  const onClick = () => {
    setIsShow(!isShow);
  };

	//const [emoji, setEmoji] = useState("");
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          {/* just use when you need to update time */}
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
          <p>{timestamp}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
        {hashtag.split("#").map((data) => (
          <Link style={{ paddingRight: 5 }} to={`/feed/hashtag/${data}`}>
            #{data}
          </Link>
        ))}
      </div>

      <div className="post__image">
        <img src={image} alt="" />
      </div>

      <div>
        <AvatarGroup/> 123
      </div>

      <div className="post__options">
        <div className="post__option">
          
          <SentimentSatisfiedAltOutlinedIcon />
          <p>좋아요</p>
       
        </div>

        <div className="post__option comment" onClick={onClick}>
          <ChatOutlinedIcon />
          <p>댓글</p>
        </div>

        <div className="post__option">
          <NearMeIcon />
          <p>공유</p>
        </div>

        {/* <div className="post__option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
        </div> */}
      </div>

      <div className="reply">
        <Box
          sx={{
            width: 550,
            maxWidth: "100%",
          }}
        >
          {isShow && (
            <>
              <Box sx={{ height: 100 }}>
                <div>
                  <TextField fullWidth />
                </div>

                <div>
                  <Button className="button" style={{float: "right", color:"#61b3ff"}}><WbSunnyOutlinedIcon/>댓글달기</Button>
                </div>
              </Box>

              <div>
                <PostReply
                  profile_url="https://raw.githubusercontent.com/emilyoun/Facebook-Clone-with-REACT/main/Screen%20Shot%202021-01-02%20at%206.03.01%20PM.png"
                  writer="테스트1"
                  contents={
                    "안녕하세요!!안녕하세요!!안녕하세요!!안녕하세요!!안녕하세요!!안녕하세요!! 안녕하세요!!안녕하세요!!안녕하세요!!안녕하세요!!안녕하세요!!안녕하세요!! "
                  }
                />
              </div>
            </>
          )}
          <div>
            {isShow && (
              <PostReply
                profile_url=""
                writer={"테스트2"}
                contents={"감사합니다."}
              />
            )}
          </div>
        </Box>
      </div>
    </div>
  );
}

//export default React.memo(Post);
export default Post;
