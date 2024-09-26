// CommentPage.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PlaylistItem from "../../components/PlaylistItem";
import CommentItem from "../../components/CommentItem";
import CommentAdd from "../../components/CommentAdd";
import { getCommentByPlaylistId } from "../../apis/comment";

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
const NoComments = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-bottom: 32px;
`

const CommentPage = () => {
  const { playlistId } = useParams();
  const [commentData, setCommentData] = useState({
    "playlist": {},
    "comments": []
  });

  useEffect(() => {
    getCommentByPlaylistId({ playlistId: 18, setData: setCommentData });
  }, [playlistId]);

  return (
    <Wrapper>
      {commentData && (
        <>
          <PlayListWrapper>
            <PlaylistItem
              userName={commentData.playlist.userName}
              playlistName={commentData.playlist.playlistName}
              description={commentData.playlist.description}
              thumbnail={commentData.playlist.thumbnail}
              comment={true}
            />
          </PlayListWrapper>
          <CommentContainer>
            <Title>댓글</Title>
            {commentData.comments.length > 0 ? (
              commentData.comments.map((item) => (
                <CommentItem
                  key={item.commentId}
                  profilePic={item.profilePic}
                  userName={item.userName}
                  createdAt={item.createdAt}
                  content={item.content}
                />
              ))
            ) : (
              <NoComments>아직 댓글이 없어요.</NoComments>
            )}
          </CommentContainer>
          <CommentWrapper>
            <CommentAdd
              profilePic={commentData.comments.profilePic}
            />
          </CommentWrapper>
        </>
      )}
    </Wrapper>
  );
}

export default CommentPage;