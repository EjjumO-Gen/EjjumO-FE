// ProfileItem.jsx
import React from "react";
import styled from "styled-components";
import ThumbsUpProfileSvg from "../assets/images/thumb_up_profile.svg?react";
import { useNavigate } from "react-router-dom";

const ProfileItemContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
`
const ProfilePic = styled.img`
    width: 200px;
    height: 200px;
    background-color: gray;
    margin-top: 32px;
    border-radius: 50%;
`
const UserName = styled.span`
    font-size: 24px;
    font-family: "Galmuri11";
    font-weight: bold;
    color: white;
    margin-top: 32px;
    text-align: center;
    width: 100%;
`
const Thumbs = styled.span`
    font-size: 16px;
    color: white;
`
const ThumbsContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 32px;
    width: 100%;
    justify-content: center;
    gap: 4px;
`

const ProfileItem = ({ userId, userName, profilePic, thumbs }) => {
    console.log(userName, thumbs, profilePic);
    return (
        <ProfileItemContainer>
            <ProfilePic src={profilePic} />
            <UserName >{userName}</UserName>
            <ThumbsContainer>
                <span>고인물 추천수</span>
                <ThumbsUpProfileSvg />
                <Thumbs>{thumbs}</Thumbs>
            </ThumbsContainer>
        </ProfileItemContainer>
    );
};

export default ProfileItem;