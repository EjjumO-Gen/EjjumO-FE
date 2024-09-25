// MainPage.jsx
import styled from "styled-components";
import MainBanner from '../../assets/images/main_banner.png';
import ListSection from "../../components/ListSection";
import MakePlaylistSvg from "../../assets/images/make_playlist.svg?react";
import { useNavigate } from "react-router-dom";
import { getUserData, getUserList } from "../../apis/user";
import { useEffect, useState } from "react";
import { getPlaylistList } from "../../apis/playlist";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const MainPage = () => {
    const navigate = useNavigate();

    const [userPlaylist, setUserPlaylist] = useState({
        "user": {},
        "playlist": []
    });
    const [popularPlaylists, setPopularPlaylists] = useState([]);
    const [userList, setUserList] = useState([]);

    useEffect(() => {
        getUserData({ userId: 3, setData: setUserPlaylist });
        getPlaylistList({ setData: setPopularPlaylists });
        getUserList({ setData: setUserList});
    }, []);

    return (
        <Container>
            <img src={MainBanner} alt="Main Banner" style={{ width: '100%', height: 'auto' }} />

            {userPlaylist && <ListSection title="내 플레이리스트" data={userPlaylist.playlist} playList={true} />}

            {popularPlaylists && <ListSection title="지금, 인기 플레이리스트" data={popularPlaylists} playList={true} />}

            {userList && <ListSection title="고인물이시군요 ^.^" data={userList} playList={false} />}
            
            <span style={{ textAlign: "center", marginTop: "32px" }}>
                지금 바로 여러분의 추억의 플리를 공유하세요<br />.<br />.<br />.
            </span>
            <MakePlaylistSvg style={{ margin: "0 auto", marginTop: "8px", marginBottom: "32px" }} onClick={() => navigate("/playlist/create")} />
        </Container>
    );
};

export default MainPage;
