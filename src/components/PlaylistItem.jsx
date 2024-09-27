// PlaylistItem.jsx
import React, { useEffect, useState } from "react";
import ThumbsFillOffSvg from "../assets/images/thumbs_FillOff.svg?react";
import ThumbsFillOnSvg from "../assets/images/thumbs_FillOn.svg?react";
import ChatSvg from "../assets/images/chat.svg?react";
import PlayCircleSvg from "../assets/images/play_circle.svg?react";
import EditButtonSvg from "../assets/images/edit_button.svg?react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


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
const PlaylistImgContainer = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
`
const EditButton = styled(EditButtonSvg)`
    position: absolute;
    right: 12px;
    bottom: 12px;
    cursor: pointer;
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

const PlaylistItem = ({ playlistId, userName, thumbnail, playlistName, description, thumbs, isThumbsup, comments, comment, handleThumbsClick, handlePlayClick }) => {
    const navigate = useNavigate();

    const handleCommentsClick = () =>{
        navigate(`/playlist/${playlistId}/comment`);
    };

    const handleEditClick = () => {
        navigate(`edit`);
    }
    
    return (
        <PlaylistItemContainer>

            <UserName>{userName}</UserName>
            <PlaylistImgContainer>
                <PlaylistImg src={thumbnail} />
                <EditButton onClick={handleEditClick}/>
            </PlaylistImgContainer>
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

                    <PlayCircleSvg onClick={handlePlayClick} />

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