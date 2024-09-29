// SongItem.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";
import AddCircleSvg from "../assets/images/add_circle.svg?react";

const SongItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
`

const SongItemContainer = styled(Link)`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: white;
    align-items: center;
`
const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    background-color: gray;
    border-radius: 8px;
`
const SongInfo = styled.div`
    flex-direction: column;
    margin-left: 14px;
`;
const Title = styled.span`
    font-size: 16px;
`
const SongDetail = styled.span`
    display: flex;
    flex-direction: row;
`
const Artist = styled.span`
    font-size: 14px;
    color: gray;
`
const Duration = styled.span`
    font-size: 14px;
    color: gray;
`
const Separator = styled.span`
    margin: 0 4px; // 양쪽에 8px 마진
`
const AddButton = styled(AddCircleSvg)`
    cursor: pointer;
    padding: 8px;
`

const SearchSongItem = ({ title, artist, thumbnail, duration, handleClick }) => {
    return (
        <SongItemWrapper>
            <SongItemContainer>
                <Thumbnail src={thumbnail}/>
                <SongInfo>
                    <Title>{title}</Title>
                    <SongDetail>
                        <Artist>{artist}</Artist>
                        <Separator>・</Separator>
                        <Duration>{duration}</Duration>
                    </SongDetail>
                </SongInfo>
            </SongItemContainer>
            <AddButton onClick={handleClick} />
        </SongItemWrapper>
    );
};

export default SearchSongItem;