// UserItem.jsx
import React from "react";
import styled from "styled-components";
import ThumbsUpSvg from "../assets/images/thumb_up.svg?react";
import { useNavigate } from "react-router-dom";

const UserItemContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right: 16px;
    cursor: pointer;
    width: 100px;
`
const ProfilePic = styled.img`
    width: 100px;
    height: 100px;
    background-color: gray;
    margin-top: 16px;
    border-radius: 50%;
`
const UserName = styled.span`
    font-size: 16px;
    color: white;
    margin-top: 16px;
    text-align: center;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
`
const Thumbs = styled.span`
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
const UserItem = ({ userId, userName, profilePic, thumbs }) => {
    const navigate = useNavigate();

    const handleUserClick = () => {
        navigate(`/profile/${userId}`);
    };

    return (
        <UserItemContainer onClick={handleUserClick}>
            <ProfilePic src={profilePic} />
            <UserName >{userName}</UserName>
            <ThumbsContainer>
                <ThumbsUpSvg />
                <Thumbs>{thumbs}</Thumbs>
            </ThumbsContainer>
        </UserItemContainer>
    );
};

export default UserItem;