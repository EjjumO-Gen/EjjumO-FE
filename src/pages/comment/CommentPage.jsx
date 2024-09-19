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
        "playlistId": 1, // 플리 id
        "userId": 1, // 작성자 user id
        "userName": "최우진",
        "playlistName": "백투더2010_노동요근본",
        "description": "그때, 그시절, 추억의 노래,,,",
        "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
        "comments": [
            {
                "commentId": 1,
                "userName": "심승보",
                "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "createdAt" : "7일 전",
                "content": "노동요 근본이다."
            },
            {
                "commentId": 2,
                "userName": "전경원",
                "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "createdAt" : "6일 전",
                "content": "마젤토브도 추가해주세요!!"
            },
            {
                "commentId": 3,
                "userName": "깃박사",
                "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "createdAt" : "2일 전",
                "content": "깔쌈하네"
            },
            {
                "commentId": 4,
                "userName": "김현정",
                "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "createdAt" : "1일 전",
                "content": "내가 어뜨케 그래혀어~ 내가 이꼬를 하고"
            },
            {
                "commentId": 5,
                "userName": "김찬별",
                "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "createdAt" : "1시간 전",
                "content": "와 쩐다.. 개쩐다.."
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
              thumbnail={playlistData.thumbnail}
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