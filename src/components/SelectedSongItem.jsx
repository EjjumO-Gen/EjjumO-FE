// SongItem.jsx
import styled from "styled-components";
import DeleteButtonSvg from "../assets/images/delete_button.svg?react";

const SongItemContainer = styled.div`
    display: flex;
    align-items: center;
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
    width: calc(100% - 82px);
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

const SelectedSongItem = ({ title, artist, thumbnail, duration, onClick }) => {
    return (
        <SongItemContainer>
            <Thumbnail src={thumbnail}/>
            <SongInfo>
                <Title> {title}</Title>
                <SongDetail>
                    <Artist>{artist}</Artist>
                    <Separator>・</Separator>
                    <Duration>{duration}</Duration>
                </SongDetail>
            </SongInfo>
            <DeleteButtonSvg onClick={onClick} />
        </SongItemContainer>
    );
};

export default SelectedSongItem;