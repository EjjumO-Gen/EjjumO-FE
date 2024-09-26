// CommentItem.jsx
import React from "react";
import styled from "styled-components";

const CommentItemContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
    flex-direction: row;
    text-decoration: none;
    color: white;
`
const ProfilePic= styled.img`
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 50%;
`
const CommentInfo = styled.div`
    flex-direction: column;
    margin-left: 14px;
`;
const Content = styled.span`
    font-size: 14px;
`
const CommentDetail = styled.span`
    display: flex;
    flex-direction: row;
`
const UserName = styled.span`
    font-size: 14px;
    color: gray;
`
const CreatedAt = styled.span`
    font-size: 14px;
    color: gray;
`
const Separator = styled.span`
    margin: 0 4px; // 양쪽에 8px 마진
`

const CommentItem = ({ content, userName, profilePic, createdAt }) => {
    const getTimeAgo = (dateString) => {
        const date = new Date(dateString);
        const today = new Date();
        const timeDiff = Math.abs(today - date);
        const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        
        if (daysDiff === 0) {
            return "최근";
        }
        return `${daysDiff}일 전`;
    }
    
    return (
        <CommentItemContainer>
            <ProfilePic src={profilePic}/>
            <CommentInfo>
                <CommentDetail>
                    <UserName>{userName}</UserName>
                    <Separator>・</Separator>
                    <CreatedAt>{getTimeAgo(createdAt)}</CreatedAt>
                </CommentDetail>
                <Content>{content}</Content>
            </CommentInfo>
        </CommentItemContainer>
    );
};

export default CommentItem;