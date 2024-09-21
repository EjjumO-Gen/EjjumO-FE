// MainPage.jsx
import styled from "styled-components"; 
import ListSection from "../../components/ListSection";
import { useNavigate } from "react-router-dom";
import ProfileItem from "../../components/ProfileItem";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ViewProfilePage = () => {
    const myplaylistData = {
        "myPlaylists": [
            {
                "playlistId": 1, // 플리 id
                "playlistName": "노동요근본_니들이 케이팝을 알어~?!",
                "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "thumbs": 100,
            }, 
            {
                "playlistId": 10, // 플리 id
                "playlistName": "백투더2010",
                "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "thumbs": 200,
            }, 
            {
                "playlistId": 17, // 플리 id
                "playlistName": "노동요근본2",
                "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "thumbs": 300,
            },
            {
                "playlistId": 20, // 플리 id
                "playlistName": "노동요깔끼",
                "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "thumbs": 400,
            },
            {
                "playlistId": 25, // 플리 id
                "playlistName": "노동요근본",
                "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
                "thumbs": 500,
            },
        ]
    };
    
    const userData = {
        "userId": 1,
        "userName": "쉼승보",
        "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
        "thumbs": 100,
    };

    return (
        <Container>
            <ProfileWrapper>
                <ProfileItem 
                    userId={userData.userId}
                    profilePic={userData.profilePic}
                    userName={userData.userName}
                    thumbs={userData.thumbs}
                />
            </ProfileWrapper>
            <ListSection title="플레이리스트" data={myplaylistData.myPlaylists} playList={true} />
        </Container>
    );
}

export default ViewProfilePage;
