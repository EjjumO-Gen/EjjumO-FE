// CommentAdd.jsx
import React, { useState } from "react";
import styled from "styled-components";
import ArrowCircleUpSvg from "../assets/images/arrow_circle_up.svg?react";
import ArrowCircleUpGreenSvg from "../assets/images/arrow_circle_up_green.svg?react";
import { postComment, getCommentByPlaylistId } from "../apis/comment";

const CommentContainer = styled.div`
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 74px;
    padding: 12px 16px 12px 16px;
    margin-top: 12px;
    max-width: 425px;
    background-color: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
`
const ProfilePic = styled.img`
    flex-shrink: 0;
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 50%;
    margin-right: 8px;
`
const CommentInputContainer = styled.div`
    flex-grow: 1;
    height: 50px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #222222;
    border: 2px solid white;

    &:focus-within {
        background-color: white;
        border: 2px solid #11FFDA;
        box-shadow: 0 0px 8px rgba(17, 255, 212, 0.5);
    }
`
const CommentInput = styled.input`
    flex-grow: 1;
    font-family: "Galmuri9";
    color: white;
    font-size: 16px;
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    padding-left: 12px;

    &:focus {
        color: black;
    }
`

const CommentAdd = ({ profilePic, playlistId, setCommentData }) => {
    const [ isTyping, setIsTyping ] = useState(false);
    const [ content, setContent] = useState("");

    const handleInputChange = (event) => {
        setContent(event.target.value);
        setIsTyping(event.target.value.length > 0);
    };

    const handleSubmit = async () => {
        if (content.trim()) {
            const commentData = { 
                userId: 3,
                playlistId: playlistId,
                content 
            };
            await postComment(commentData);
            getCommentByPlaylistId({ playlistId, setData: setCommentData });
            setContent("");
            setIsTyping(false);
        }
    };

    return (
        <CommentContainer>
            <ProfilePic src={profilePic} />
            <CommentInputContainer>
                <CommentInput 
                    placeholder="댓글 추ㄱr"
                    value={content}
                    onChange={handleInputChange}
                />
                <div onClick={handleSubmit}>
                    {isTyping ? <ArrowCircleUpGreenSvg style={{ marginRight: '12px' }}/>
                            : <ArrowCircleUpSvg style={{ marginRight: '12px' }}/>}
                </div>
            </CommentInputContainer>
        </CommentContainer>
    );
};

export default CommentAdd;