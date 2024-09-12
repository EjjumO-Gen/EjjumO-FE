import React from "react";
import { useLinkClickHandler, useParams } from "react-router-dom";
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

    const playlistData =
      { userName: "유저 이름", playlistName: "플리 이름", playlistDesc: "간단한 설명 한 줄~^^", likeCount: "15", chatCount: "15" };

    const songData = [
      { title: "노래 제목1", artist: "가수1", duration: "3:45" },
      { title: "노래 제목2", artist: "가수2", duration: "4:20" },
      { title: "노래 제목3", artist: "가수3", duration: "2:55" },
      { title: "노래 제목4", artist: "가수4", duration: "3:45" },
      { title: "노래 제목5", artist: "가수5", duration: "4:20" },
      { title: "노래 제목6", artist: "가수6", duration: "2:55" },
      { title: "노래 제목7", artist: "가수7", duration: "3:45" },
      { title: "노래 제목8", artist: "가수8", duration: "4:20" },
      { title: "노래 제목9", artist: "가수9", duration: "2:55" },
      { title: "노래 제목10", artist: "가수10", duration: "2:55" }
    ];

    return (
        // <span>{params.playlistId}</span>
        <Wrapper>
          <PlayListWrapper>
            <PlaylistItem 
              userName={playlistData.userName}
              playlistName={playlistData.playlistName}
              playlistDesc={playlistData.playlistDesc}
              likeCount={playlistData.likeCount}
              chatCount={playlistData.chatCount}
            />
          </PlayListWrapper>
          <SongContainer>
          {songData.map((item, index) => (
            <SongItem 
              key={index}
              title={item.title}
              artist={item.artist}
              duration={item.duration}
            />
          ))}
          </SongContainer>
        </Wrapper>
    );
  }
  
export default ViewPlaylistPage;