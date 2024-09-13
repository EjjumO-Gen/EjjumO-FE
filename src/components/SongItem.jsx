// SongItem.jsx
import { Link } from "react-router-dom";
import styled from "styled-components";

const SongItemContainer = styled(Link)`
    display: flex;
    margin-bottom: 16px;
    flex-direction: row;
    margin-left: 16px;
    text-decoration: none;
    color: white;
`
const Thumbnail = styled.img`
    width: 50px;
    height: 50px;
    background-color: gray;
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

const SongItem = ({ title, artist, thumbnail, videoId, duration }) => {
    return (
        <SongItemContainer to={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
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