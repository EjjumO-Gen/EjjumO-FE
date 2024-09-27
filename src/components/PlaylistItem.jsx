// PlaylistItem.jsx
import React, { useEffect, useState } from "react";
import ThumbsFillOffSvg from "../assets/images/thumbs_FillOff.svg?react";
import ThumbsFillOnSvg from "../assets/images/thumbs_FillOn.svg?react";
import ChatSvg from "../assets/images/chat.svg?react";
import PlayCircleSvg from "../assets/images/play_circle.svg?react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { getPlaylistById, updatePlaylistThumbs } from "../apis/playlist";

const PlaylistItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 32px;
    align-items: center;
`
const PlaylistInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 32px;
    margin-bottom: 8px;
`
const IconContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
`
const UserName = styled.span`
    font-size: 16px;
    text-align: center;
    margin-bottom: 12px;
`
const PlaylistImg = styled.img`
    width: 200px;
    height: 200px;
    background-color: gray;
`
const PlaylistName = styled.span`
    font-family: "Galmuri11";
    font-weight: bold;
    font-size: 24px;
    text-align: center;
`
const Description = styled.span`
    font-size: 16px;
    text-align: center;
`
const ThumbsCount = styled.span`
    font-size: 16px;
    color: white;
    margin-left: 8px;
`
const ThumbsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`
const CommentsCount = styled.span`
    font-size: 16px;
    color: white;
    margin-left: 8px;
`
const CommentsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 8px;
`

const PlaylistItem = ({ playlistId, userName, thumbnail, playlistName, description, thumbs, isThumbsup, comments, comment, handleThumbsClick }) => {
    const navigate = useNavigate();
    // const [isThumbsUp, setIsThumbsUp] = useState(false);
    // const [thumbsCount, setThumbsCount] = useState(thumbs);

    // useEffect(() => {
    //     const fetchPlaylist = async () => {
    //         const data = { isThumbsUp: false, thumbs: 99};
    //         setIsThumbsUp(data.isThumbsUp);
    //         setThumbsCount(data.thumbs);
    //     }
    //     fetchPlaylist();
    // }, [playlistId]);

    // const handleThumbsClick = async () => {
    //     try {
    //         const newThumbsData = { isThumbsUp: !isThumbsUp, thumbs: isThumbsUp ? thumbsCount - 1 : thumbsCount + 1 };
    //         setIsThumbsUp(newThumbsData.isThumbsUp);
    //         setThumbsCount(newThumbsData.thumbs);
    //     } catch (error) {
    //         console.error('Error updating thumbs:', error);
    //     }
    // };

    const handleCommentsClick = () =>{
        // navigate('/playlist/:playlistId/comment');
        navigate(`/playlist/${playlistId}/comment`);
    };

    return (
        <PlaylistItemContainer>
            <UserName>{userName}</UserName>
            <PlaylistImg src={thumbnail} />
            <PlaylistInfoContainer>
                <PlaylistName>{playlistName}</PlaylistName>
                <Description>{description}</Description>
            </PlaylistInfoContainer>
            {!comment ? (
                <IconContainer>
                    <ThumbsContainer onClick={handleThumbsClick}>
                        {isThumbsup ? <ThumbsFillOnSvg /> : <ThumbsFillOffSvg />}
                        <ThumbsCount>{thumbs}</ThumbsCount>
                    </ThumbsContainer>
                    <PlayCircleSvg />
                    <CommentsContainer onClick={handleCommentsClick}>
                        <ChatSvg />
                        <CommentsCount>{comments}</CommentsCount>
                    </CommentsContainer>
                </IconContainer>
            ) : null}
        </PlaylistItemContainer>
    );
};

export default PlaylistItem;