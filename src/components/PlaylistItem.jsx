// PlaylistItem.jsx
import React from "react";
import ThumbsFillOffSvg from "../assets/images/thumbs_FillOff.svg?react";
import ChatBubbleSvg from "../assets/images/chat_bubble.svg?react";
import PlayCircleSvg from "../assets/images/play_circle.svg?react";
import styled from "styled-components";

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

const PlaylistItem = ({ userName, thumbnail, playlistName, description, thumbs, comments }) => {
    return (
        <PlaylistItemContainer>
            <UserName>{userName}</UserName>
            <PlaylistImg src={thumbnail} />
            <PlaylistInfoContainer>
                <PlaylistName>{playlistName}</PlaylistName>
                <Description>{description}</Description>
            </PlaylistInfoContainer>
            <IconContainer>
                <ThumbsContainer>
                    <ThumbsFillOffSvg />
                    <ThumbsCount>{thumbs}</ThumbsCount>
                </ThumbsContainer>
                <PlayCircleSvg />
                <CommentsContainer>
                    <ChatBubbleSvg />
                    <CommentsCount>{comments}</CommentsCount>
                </CommentsContainer>
            </IconContainer>
        </PlaylistItemContainer>
    );
};

export default PlaylistItem;