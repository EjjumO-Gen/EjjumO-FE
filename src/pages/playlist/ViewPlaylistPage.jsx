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
      "playlist": {
          "playlistId": 1,
          "userId": 1,
          "userName": "심승보",
          "playlistName": "고인물",
          "description": "고인고인킵고인",
          "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
          "thumbs": 0,
          "comments": 2,
          "thumbsup": false
      },
      "songs": [
          {
              "songId": 3,
              "playlistId": 1,
              "title": "후유증",
              "artist": "제국의 아이들",
              "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
              "videoId": "52IYtmlSqAQ",
              "duration": "3:14"
          },
          {
              "songId": 4,
              "playlistId": 1,
              "title": "후유증",
              "artist": "제국의 아이들",
              "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
              "videoId": "52IYtmlSqAQ",
              "duration": "3:14"
          },
          {
              "songId": 5,
              "playlistId": 1,
              "title": "바람의 유령",
              "artist": "제국의 아이들",
              "thumbnail": null,
              "videoId": null,
              "duration": null
          }
      ]
  };

    return (
        // <span>{params.playlistId}</span>
        <Wrapper>
          <PlayListWrapper>
            <PlaylistItem
              playlistId={playlistData.playlist.playlistId}
              userName={playlistData.playlist.userName}
              playlistName={playlistData.playlist.playlistName}
              description={playlistData.playlist.description}
              thumbs={playlistData.playlist.thumbs}
              comments={playlistData.playlist.comments}
              thumbnail={playlistData.songs[0].thumbnail}
              comment={false}
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