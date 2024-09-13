import React from "react";
import { useParams } from "react-router-dom";
import SongItem from "../../components/SongItem";
import PlaylistItem from "../../components/PlaylistItem";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const PlayListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SongContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`

const ViewPlaylistPage = () => {
    const params = useParams();

    const playlistData = {
      "playlistId": 1, // 플리 id
      "userId": 1, // 작성자 user id
      "userName": "최우진",
      "playlistName": "노동요근본",
      "description": "그때, 그시절, 추억의 노래,,,",
      "thumbs": 100,
      "comments": 150,
      "isThumbsup": false,
      "songs": [
        {
          "songId": 1,
          "title": "후유증",
          "artist": "제국의아이들",
          "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
          "videoId": "52IYtmlSqAQ",
          "duration": "3:14",
        },
        {
          "songId": 2,
          "title": "바람의 유령",
          "artist": "제국의아이들",
          "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
          "videoId": "ie_uVB3cUpE",
          "duration": "3:31",
        },
      ]
    };

    return (
        // <span>{params.playlistId}</span>
        <Wrapper>
          <PlayListWrapper>
            <PlaylistItem 
              userName={playlistData.userName}
              playlistName={playlistData.playlistName}
              description={playlistData.description}
              thumbs={playlistData.thumbs}
              comments={playlistData.comments}
              thumbnail={playlistData.songs[0].thumbnail}
            />
          </PlayListWrapper>
          <SongContainer>
          {playlistData.songs.map((item) => (
            <SongItem 
              key={item.songId}
              title={item.title}
              artist={item.artist}
              duration={item.duration}
              thumbnail={item.thumbnail}
              videoId={item.videoId}
            />
          ))}
          </SongContainer>
        </Wrapper>
    );
  }
  
export default ViewPlaylistPage;