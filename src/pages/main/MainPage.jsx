// MainPage.jsx
import styled from "styled-components";
import MainBanner from '../../assets/images/main_banner.png';
import ListSection from "../../components/ListSection";
import MakePlaylistSvg from "../../assets/images/make_playlist.svg?react";
import { useNavigate } from "react-router-dom";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

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

const popularplaylistData = {
	"popularPlaylists": [
		{
            "playlistId": 1, // 플리 id
            "playlistName": "노동요근본",
            "thumbnail": "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
            "thumbs": 100,
        }, 
        {
            "playlistId": 10, // 플리 id
            "playlistName": "백투더2010_커커커커커몬~",
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
	"user": [
		{
            "userId": 1,
            "userName": "쉬미쉬미코코밥쉬미쉬미코코밥",
            "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
            "thumbs": 100,
		},  
		{
            "userId": 3,
            "userName": "심승보",
            "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
            "thumbs": 200,
		},  
		{
            "userId": 5,
            "userName": "시미",
            "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
            "thumbs": 300,
		},
        {
            "userId": 7,
            "userName": "쉼시",
            "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
            "thumbs": 400,
		},
        {
            "userId": 9,
            "userName": "쉼시미",
            "profilePic" : "https://lh3.googleusercontent.com/nKvFQ16eEH9G7DjW-M-bGhZSlacvyyWAGsQQVPDusyVTUKjgC5flHRMvTXVx2HglPT4i0BQhtG5w7TQ=w120-h120-l90-rj",
            "thumbs": 500,
		},
	]
};

const MainPage = () => {
    const navigate = useNavigate();

    return (
        <Container>
            <img src={MainBanner} alt="Main Banner" style={{ width: '100%', height: 'auto' }} />
            <ListSection title="내 플레이리스트" data={myplaylistData.myPlaylists} playList={true} />
            <ListSection title="지금, 인기 플레이스트" data={popularplaylistData.popularPlaylists} playList={true} />
            <ListSection title="고인물이시군요 ^.^" data={userData.user} playList={false} />
            <span style={{ textAlign: "center", marginTop: "32px" }}>
                지금 바로 여러분의 추억의 플리를 공유하세요<br />.<br />.<br />.
            </span>
            <MakePlaylistSvg style={{ margin: "0 auto", marginTop: "8px", marginBottom: "32px" }} onClick={() => navigate("/playlist/create")} />
        </Container>
    );
};

export default MainPage;
