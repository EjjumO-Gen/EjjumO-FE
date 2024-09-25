// ListSection.jsx
import React from "react";
import styled from "styled-components";
import ArrowForwardSvg from "../assets/images/arrow_forward.svg?react";
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
    flex-direction: row;
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
                <ArrowForwardSvg style={{ marginLeft: '8px' }} />
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
                        thumbs={item.totalThumbs}
                    />)
                })}
            </ItemsContainer>
        </SectionContainer>
    );
};

export default ListSection;