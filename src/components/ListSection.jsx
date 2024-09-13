// ListSection.jsx
import React from "react";
import styled from "styled-components";
import ArrowIcon from '../assets/images/arrow_forward_ios.png'
import ListItem from "./ListItem";
import UserItem from "./UserItem";

const SectionContainer = styled.div`
    margin-top: 32px;
    margin-left: 16px;
`
const Title = styled.div`
    font-family: "Galmuri11";
    font-weight: bold;
    font-size: 24px;
    color: white;
`
const Arrow = styled.img`
    height: 24px;
    margin-left: 8px;
`
const ItemsContainer = styled.div`
    display: flex;
    overflow-x: scroll;
`



const ListSection = ({ title, data, playList }) => {

    return (
        <SectionContainer>
            <Title>
                {title}
                <Arrow src={ArrowIcon} alt="Forward Arrow Icon" />
            </Title>
            <ItemsContainer>
            {playList ? 
        
                data.map(item => {
                    return (<ListItem
                        key={item.playlistId}
                        playlistId={item.playlistId}
                        playlistName={item.playlistName}
                        thumbnail={item.thumbnail}
                        thumbs={item.thumbs}
                    />)
                })
            
             : 
            
                data.map(item => {
                    return (<UserItem
                        key={item.userId}
                        userId={item.userId}
                        userName={item.userName}
                        profilePic={item.profilePic}
                        thumbs={item.thumbs}
                    />)
                })}
            </ItemsContainer>
        </SectionContainer>
    );
};

export default ListSection;