import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PlaylistItem from "../../components/PlaylistItem";
import CommentItem from "../../components/CommentItem";
import CommentAdd from "../../components/CommentAdd";

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
const CommentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  border: 2px solid white;
  border-radius: 8px;
  margin: 0 16px 86px 16px;
  padding: 16px 16px 0 16px;
`
const Title = styled.span`
    font-family: "Galmuri11";
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 32px;
`
const CommentWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const CommentPage = () => {
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
      "comments": [
          {
              "commentId": 1,
              "userId": 1,
              "userName": "심승보",
              "profilePic": null,
              "playlistId": 1,
              "content": "ㅇㅇ",
              "createdAt": null,
              "updatedAt": null,
              "checked": false
          },
          {
              "commentId": 2,
              "userId": 1,
              "userName": "심승보",
              "profilePic": null,
              "playlistId": 1,
              "content": "많이들어줘라",
              "createdAt": null,
              "updatedAt": null,
              "checked": false
          }
      ]
  };

    return (
        // <span>{params.playlistId}</span>
        <Wrapper>
          <PlayListWrapper>
            <PlaylistItem 
              userName={playlistData.playlist.userName}
              playlistName={playlistData.playlist.playlistName}
              description={playlistData.playlist.description}
              thumbnail={playlistData.playlist.thumbnail}
              comment={true}
            />
          </PlayListWrapper>
          <CommentContainer>
            <Title>댓글</Title>
            {playlistData.comments.map((item) => (
                <CommentItem 
                key={item.commentId}
                profilePic={item.profilePic}
                userName={item.userName}
                createdAt={item.createdAt}
                content={item.content}
                />
            ))}
          </CommentContainer>
          <CommentWrapper>
            <CommentAdd 
                profilePic={playlistData.comments[0].profilePic}
            />
          </CommentWrapper>
        </Wrapper>
    );
  }
  
export default CommentPage;