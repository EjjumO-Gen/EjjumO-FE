import React, { useState } from "react";
import styled from "styled-components";
import ArrowCircleUpSvg from "../assets/images/arrow_circle_up.svg?react";
import ArrowCircleUpGreenSvg from "../assets/images/arrow_circle_up_green.svg?react";

const CommentContainer = styled.div`
    display: flex;
    justify-content: space-between;
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
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 50%;
    margin-right: 8px;
`
const CommentInputContainer = styled.div`
    flex-grow: 1;
    height: 50px;
    /* border: 2px solid white; */
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props => props.$isTyping ? '#FFFFFF' : '#222222'};
    border: ${props => props.$isTyping ?  '2px solid #11FFDA' : '2px solid white'};
`
const CommentInput = styled.input`
    font-family: "Galmuri11";
    color: gray;
    font-size: 16px;
    margin-left: 16px;
    border: none;
    outline: none;
    background-color: transparent;
    color: ${props => props.$isTyping ? 'black' : 'gray'};
`

const CommentAdd = ({ profilePic }) => {
    const [ isTyping, setIsTyping ] = useState(false);

    const HandleInputChange = (event) => {
        setIsTyping(event.target.value.length > 0);
    };

    return (
        <CommentContainer>
            <ProfilePic src={profilePic}/>
            <CommentInputContainer $isTyping={isTyping}>
                <CommentInput 
                    placeholder="댓글 추ㄱr"
                    onChange={HandleInputChange}
                    $isTyping={isTyping}
                />
                {isTyping ? <ArrowCircleUpGreenSvg style={{ marginRight: '12px' }}/>
                           : <ArrowCircleUpSvg style={{ marginRight: '12px' }}/>}
            </CommentInputContainer>
        </CommentContainer>
    );
};

export default CommentAdd;