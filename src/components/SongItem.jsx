// SongItem.jsx
import styled from "styled-components";

const SongItemContainer = styled.div`
    display: flex;
    margin-bottom: 16px;
    flex-direction: row;
    margin-left: 16px;
`
const AlbumImage = styled.img`
    width: 50px;
    height: 50px;
    background-color: gray;
`
const SongInfo = styled.div`
    flex-direction: column;
    margin-left: 14px;
`;
const SongTitle = styled.span`
    font-size: 16px;
`
const SongDetail = styled.span`
    display: flex;
    flex-direction: row;
`
const ArtistName = styled.span`
    font-size: 14px;
    color: gray;
`
const SongDuration = styled.span`
    font-size: 14px;
    color: gray;
`
const Separator = styled.span`
    margin: 0 4px; // 양쪽에 8px 마진
`

const SongItem = ({ title, artist, duration }) => {
    return (
        <SongItemContainer>
            <AlbumImage />
            <SongInfo>
                <SongTitle>{title}</SongTitle>
                <SongDetail>
                    <ArtistName>{artist}</ArtistName>
                    <Separator>・</Separator>
                    <SongDuration>{duration}</SongDuration>
                </SongDetail>
            </SongInfo>
        </SongItemContainer>
    );
};

export default SongItem;