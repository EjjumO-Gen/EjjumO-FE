// ViewPlaylistPage.jsx
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SongItem from "../../components/SongItem";
import PlaylistItem from "../../components/PlaylistItem";
import styled from "styled-components";
import { getPlaylistById, updatePlaylistThumbs } from "../../apis/playlist";
import { googleLogin } from "../../apis/auth";
import { getGoogleToken } from "../../utils/token";
import { addSongToPlaylist, createYoutubePlaylist } from "../../apis/provider";
import { usePlaylistIdStore } from "../../store/playlist";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
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

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
  position: absolute;
  width: 100%;
  height: 100vh;
  z-index: 10;
`

const messages = [
  "추억을 유튜브로 소환중...",
  "팝업 차단을 허용해야 플리가 열려요.",
  "곡이 많을 수록 시간이 걸릴 수 있어요."
];

const ViewPlaylistPage = () => {
    const navigate = useNavigate();
    const {playlistId} = useParams();
    const pId = usePlaylistIdStore((state) => state.playlistId);
    const setPlaylistId = usePlaylistIdStore((state) => state.setPlaylistId);

    useEffect(() => {
      console.log(pId);
    })
    const [playlistData, setPlaylistData] = useState({
      "playlist": {},
      "songs": []
    });

    const googleAccessToken = getGoogleToken();

    const [isLoading, setIsLoading] = useState(false);
    const [loadingIdx, setLoadingIdx] = useState(0);

    useEffect(() => {
      getPlaylistById({playlistId: playlistId, setData: setPlaylistData});
    }, [playlistId]);

    const handleThumbsup = async () => {
      const response = await updatePlaylistThumbs({
        playlistId: playlistId,
        userId: 3
      });
      console.log(response)
      setPlaylistData(prev => ({
        ...prev,
        playlist: {
          ...prev.playlist,
          isThumbsup: response.isThumbsUp,
          thumbs: response.thumbs
        }
      }))
    }
    
    const handlePlayClick = async () => {
      setIsLoading(true);

      try {
        if (googleAccessToken) {
          const response = await createYoutubePlaylist({
            googleAccessToken: googleAccessToken,
            playlistData: {
                playlistName: playlistData.playlist.playlistName,
                description: playlistData.playlist.description
            }
          })

          const youtubePlaylistId = response.id;

          for (const song of playlistData.songs) {
            await addSongToPlaylist({
              googleAccessToken: googleAccessToken,
              youtubePlaylistId: youtubePlaylistId,
              videoId: song.videoId
            })
          }

          window.open(`https://www.youtube.com/playlist?list=${youtubePlaylistId}`, '_blank');
        } else {
          setPlaylistId(parseInt(playlistId));
          console.log(pId)
          googleLogin();
        }
      }
      catch (error) {
        console.error(error);
      }

      setIsLoading(false);
    }

    useEffect(() => {
      if (isLoading) {
        const interval = setInterval(() => {
          setLoadingIdx((loadingIdx) => (loadingIdx + 1) % messages.length);
        }, 3000);
  
        return () => {
          clearInterval(interval);
        }
      }
    })

    return (
        <Wrapper>
          {isLoading && ( 
            <Loading>
              {messages[loadingIdx]}
            </Loading> 
          )}
          {playlistData && (
            <>
              <PlayListWrapper>
                <PlaylistItem
                  playlistId={playlistData.playlist.playlistId}
                  userName={playlistData.playlist.userName}
                  playlistName={playlistData.playlist.playlistName}
                  description={playlistData.playlist.description}
                  thumbs={playlistData.playlist.thumbs}
                  isThumbsup={playlistData.playlist.isThumbsup}
                  comments={playlistData.playlist.comments}
                  thumbnail={playlistData.playlist.thumbnail}
                  comment={false}
                  handleThumbsClick={handleThumbsup}
                  handlePlayClick={handlePlayClick}
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