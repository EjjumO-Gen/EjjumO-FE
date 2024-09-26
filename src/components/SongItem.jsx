// SongItem.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";

const SongItemContainer = styled(Link)`
    display: flex;
    margin-bottom: 16px;
    flex-direction: row;
    text-decoration: none;
    color: white;
    width: 100%;
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
    width: calc(100% - 66px);
`;
const Title = styled.span`
    font-size: 16px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const SongDetail = styled.span`
    display: flex;
    flex-direction: row;
`
const Artist = styled.span`
    font-size: 14px;
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Duration = styled.span`
    font-size: 14px;
    color: gray;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`
const Separator = styled.span`
    margin: 0 4px; // 양쪽에 8px 마진
`

const SongItem = ({ title, artist, thumbnail, videoId, duration }) => {
    return (
        <SongItemContainer to={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">
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
    );
};

export default SongItem;