// ViewPlaylistPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SongItem from "../../components/SongItem";
import PlaylistItem from "../../components/PlaylistItem";
import styled from "styled-components";
import { getPlaylistById } from "../../apis/playlist";

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
  padding: 0 16px;
`

const ViewPlaylistPage = () => {
    const {playlistId} = useParams();
    const [playlistData, setPlaylistData] = useState({
      "playlist": {},
      "songs": []
    });

    useEffect(() => {
      getPlaylistById({playlistId: playlistId, setData: setPlaylistData});
    }, [playlistId]);

    return (
        <Wrapper>
          {playlistData && (
            <>
              <PlayListWrapper>
                <PlaylistItem
                  playlistId={playlistData.playlist.playlistId}
                  userName={playlistData.playlist.userName}
                  playlistName={playlistData.playlist.playlistName}
                  description={playlistData.playlist.description}
                  thumbs={playlistData.playlist.thumbs}
                  comments={playlistData.playlist.comments}
                  thumbnail={playlistData.playlist.thumbnail}
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
            </>
          )}
        </Wrapper>
    );
  };
  
export default ViewPlaylistPage;